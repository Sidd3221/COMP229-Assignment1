import { Router } from "express";
import { homePage, aboutPage, servicesPage, contactPage, projectsPage } from "../controllers/index.controller.server.js";

const router = Router();
router.get('/', homePage);
router.get('/home',homePage);
router.get('/about', aboutPage);
router.get('/contact',contactPage);
router.get('/projects', projectsPage);
router.get('/services', servicesPage);

export default router;