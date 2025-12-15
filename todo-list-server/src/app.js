import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import routes from "./routes/index.js";
import cors from "cors";
import { devUserMiddleware } from "./middlewares/devUser.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(devUserMiddleware);

app.get("/", (req, res) => {
  res.send("Server OK");
});

app.use("/api", routes);

// ✅ Swagger route
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app; // 🔴 NO listen() here
