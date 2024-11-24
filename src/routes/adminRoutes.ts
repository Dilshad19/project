import { Router } from 'express';
import { createAdmin } from '../controller/adminController.ts';

const router: Router = Router();

router.post('/create', createAdmin);

export default router;
