// api/routes/notes.js
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

// GET all notes for the current tenant
router.get('/', protect, async (req, res) => {
  const notes = await prisma.note.findMany({
    where: { tenantId: req.user.tenantId },
    orderBy: { createdAt: 'desc' },
  });
  res.json(notes);
});

// POST a new note
router.post('/', protect, async (req, res) => {
    // Subscription Feature Gating
    if (req.user.plan === 'FREE') {
        const noteCount = await prisma.note.count({
            where: { tenantId: req.user.tenantId }
        });
        if (noteCount >= 3) {
            return res.status(403).json({ error: 'Free plan limit of 3 notes reached. Please upgrade.' });
        }
    }

    const { title, content } = req.body;
    const note = await prisma.note.create({
        data: {
            title,
            content,
            tenantId: req.user.tenantId, // Tenant Isolation
            userId: req.user.userId,
        },
    });
    res.status(201).json(note);
});

// DELETE a note
router.delete('/:id', protect, async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.note.delete({
            where: {
                id,
                tenantId: req.user.tenantId // Ensure user can only delete their own tenant's notes
            }
        });
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Note not found or you do not have permission to delete it.' });
    }
});

// You can implement GET /:id and PUT /:id similarly, always using `tenantId: req.user.tenantId` in the where clause.

export default router;