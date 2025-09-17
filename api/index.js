// api/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';
import tenantRoutes from './routes/tenants.js';
// Import other routes later

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS
app.use(express.json());

// --- Routes ---
// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
// Use other routes later

app.use('/api/notes', noteRoutes); // <-- Add
app.use('/api/tenants', tenantRoutes); // <-- Add

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app; // Important for Vercel