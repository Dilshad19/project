import express, { Application } from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import adminRoutes from './routes/adminRoutes';
import mobileRoutes from './routes/mobileRoutes';
import { authMiddleware } from './middlewares/authMiddleware';

const app: Application = express();

// Middleware
app.use(bodyParser.json());

// DB connection
connectDB();

// Routes
app.use('/admin', adminRoutes);
app.use('/mobile', authMiddleware, mobileRoutes);

export default app;
