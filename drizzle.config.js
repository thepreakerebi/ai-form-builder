import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-forms_owner:Xv8SOnCjU3rW@ep-soft-breeze-a5v6owzz.us-east-2.aws.neon.tech/ai-forms?sslmode=require"
  }
});