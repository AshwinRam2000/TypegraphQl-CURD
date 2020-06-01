import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { MovieResolver } from "./resolver/MovieResolver";
import { createConnection } from "typeorm";



const main = async () => {
    
    await createConnection();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[MovieResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    const app = Express();

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(4000, () => {
        console.log("server started on http://localhost:4000/graphql");
    });
};

main();