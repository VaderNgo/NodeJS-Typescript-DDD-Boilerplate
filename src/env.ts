import "dotenv/config";
import z from "zod";

const envSchema = z.object({
    PORT: z.string().min(1),
    // DOMAIN: z.string().min(1),
    MONGODB_URL: z.string().min(1),
    REDIS_URL: z.string().min(1),
    // REDIS_PASSWORD: z.string().min(1),
    COOKIE_SECRET: z.string().min(1),
    ENV: z.enum(["DEVELOPMENT", "PRODUCTION"]),
    SWAGGER_API: z.string().min(1),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("Invalid environment variables");
    console.error(parsedEnv.error.errors.forEach((e) => e.path.forEach((p) => console.error(p))));
    process.exit(1);
}

export const env = parsedEnv.data;

type Env = z.infer<typeof envSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env {}
    }
}
