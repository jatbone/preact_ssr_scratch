import { Router } from "express";

const ApiRouter = Router();

ApiRouter.get("*", (req, res) => {
  res.status(200).send("OK");
});

export default ApiRouter;
