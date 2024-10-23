import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { PrismaClient } from '@prisma/client';
import { GraphQLSchema, lexicographicSortSchema } from 'graphql';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { buildSchema } from 'type-graphql';
import fs from 'node:fs/promises';

import { resolvers } from '@/prisma/generated/type-graphql';
import prisma from '@/lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

async function createContext(): Promise<Context> {
  return {
    prisma,
  };
};

let apolloServer: ApolloServer<any> | null = null;
let nextHandler: any = null;

async function emitSchemaDefinitionWithDirectivesFile(
  schemaFilePath: string,
  schema: GraphQLSchema,
): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

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

  await emitSchemaDefinitionWithDirectivesFile('graphql/schema.graphql', schema);
  await apolloServer.start();

  nextHandler = startServerAndCreateNextHandler(apolloServer!, { context: createContext });
};

const handler = async (req: Request) => {
  if (!apolloServer || !nextHandler) {
    await createApolloServer();
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  const response = await nextHandler(req);

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
};

export const GET = handler;
export const POST = handler;
