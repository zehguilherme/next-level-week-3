/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index); // Listagem
routes.get("/orphanages/:id", OrphanagesController.show); // Listar 1 único orfanato
routes.post("/orphanages", upload.array("images"), OrphanagesController.create); // Criação

export default routes;
