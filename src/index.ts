import express from "express";
import Swagger from "swagger-ui-express";

import SwaggerFiles from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", Swagger.serve, Swagger.setup(SwaggerFiles));

app.use("/users", usersRoutes);

export { app };
