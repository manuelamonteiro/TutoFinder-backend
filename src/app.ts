import express, { Express } from "express";
import cors from "cors";

import { connectDb, disconnectDB } from "./config/database";
import { loadEnv } from "./config/envs";
import { subjectsRouter } from "./routers/subjects-router";
import { tutorsRouter } from "./routers/tutors-router";
import { bookingRouter } from "./routers/booking-router";
import { paymentRouter } from "./routers/payment-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use(subjectsRouter)
  .use(tutorsRouter)
  .use(bookingRouter)
  .use(paymentRouter)

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;