import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error); // exibido para o desenvolvedor

  // exibido para o usuário
  return response.status(500).json({ message: "Internal Server Error" });
};

export default errorHandler;
