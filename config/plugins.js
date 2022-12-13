module.exports = ({ env }) => ({
    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                introspection: true,
                tracing: true,
            },
        },
    },
});