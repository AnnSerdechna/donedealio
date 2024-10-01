import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { PrismaClient } from '@prisma/client';
import { GraphQLSchema, lexicographicSortSchema } from 'graphql';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { buildSchema } from 'type-graphql';
import fs from 'node:fs/promises';

import { resolvers } from '../../../../prisma/generated/type-graphql';
import prisma from '../../../../lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

const prismaClient = prisma; 

async function createContext(): Promise<Context> {
  return {
    prisma: prismaClient,
  };
};

let apolloServer: ApolloServer<any> | null = null;
let nextHandler: any = null;

async function emitSchemaDefinitionWithDirectivesFile(
  schemaFilePath: string,
  schema: GraphQLSchema,
): Promise<void> {
  const schemaFileContent = printSchemaWithDirectives(lexicographicSortSchema(schema));
  await fs.writeFile(schemaFilePath, schemaFileContent);
};

async function createApolloServer() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  apolloServer = new ApolloServer({
    schema,
  });

  await emitSchemaDefinitionWithDirectivesFile('src/graphql/schema.graphql', schema);

  await apolloServer.start();

  nextHandler = startServerAndCreateNextHandler(apolloServer!, { context: createContext });
};

const handler = async (req: Request) => {
  if (!apolloServer || !nextHandler) {
    await createApolloServer();
  }

  return nextHandler(req);
};

export const GET = handler;
export const POST = handler;
