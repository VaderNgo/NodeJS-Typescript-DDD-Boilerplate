import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Media Streaming API",
            version: "1.0.0",
            description: "Media Streaming API.",
        },
        servers: [
            {
                url: process.env.SWAGGER_API || "http://localhost:3001",
                description: "Production server",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJsdoc(options);
