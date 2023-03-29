import express, { Express } from "express";
import cors from "cors";

import { loadEnv } from "./config/envs";
loadEnv();

import { connectDb, disconnectDB } from "./config/database";
import { subjectsRouter } from "./routers/subjects-router";
import { tutorsRouter } from "./routers/tutors-router";
import { bookingRouter } from "./routers/booking-router";
import { userRouter } from "./routers/sign-router";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use(userRouter)
  .use(subjectsRouter)
  .use(tutorsRouter)
  .use(bookingRouter)

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;