import { createYoga, createSchema } from "graphql-yoga";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "@/graphql/resolvers";
import { createContext } from "@/graphql/context";

const path = join(process.cwd(), "src", "generated", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

const schema = createSchema({
  typeDefs,
  resolvers,
});

const graphqlEndpoint = "/api/graphql";

export default createYoga({
  graphqlEndpoint,
  schema,
  context: createContext,
});
