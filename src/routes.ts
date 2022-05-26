import { Router } from "express";

const router = Router();

router.post('/clientes', (request, response) => {
    return response.status(201).send();
})

export { router }