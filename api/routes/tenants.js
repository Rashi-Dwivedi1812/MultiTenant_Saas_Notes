// api/routes/tenants.js
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/:slug/upgrade', protect, isAdmin, async (req, res) => {
    // Ensure the admin belongs to the tenant they are trying to upgrade
    if (req.user.tenantSlug !== req.params.slug) {
        return res.status(403).json({ error: "Forbidden: You cannot upgrade another tenant's plan." });
    }

    const updatedTenant = await prisma.tenant.update({
        where: { slug: req.params.slug },
        data: { plan: 'PRO' },
    });
    res.json({ message: `Tenant ${updatedTenant.name} has been upgraded to the PRO plan.`});
});

export default router;