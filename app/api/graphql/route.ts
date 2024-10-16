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

// Context type
export type Context = {
  prisma: PrismaClient;
};

// Create context
async function createContext(): Promise<Context> {
  return {
    prisma,
  };
};

let apolloServer: ApolloServer<any> | null = null;
let nextHandler: any = null;

// Function to emit the GraphQL schema with directives
async function emitSchemaDefinitionWithDirectivesFile(
  schemaFilePath: string,
  schema: GraphQLSchema,
): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    // Skip writing schema file in production
    return;
  }

  const schemaFileContent = printSchemaWithDirectives(lexicographicSortSchema(schema));
  await fs.writeFile(schemaFilePath, schemaFileContent);
};

// Create Apollo Server
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

// Handler for GraphQL requests
const handler = async (req: Request) => {
  if (!apolloServer || !nextHandler) {
    await createApolloServer();
  }

  // Handle OPTIONS request (CORS preflight)
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

  // Ensure CORS headers are set for every request
  const response = await nextHandler(req);

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return response;
};

// Export handlers for GET and POST
export const GET = handler;
export const POST = handler;
