// api/prisma/seed.mjs
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const hashedPassword = await bcrypt.hash('password', 10);

  // Create Tenants
  const acme = await prisma.tenant.create({
    data: { name: 'Acme', slug: 'acme' },
  });
  const globex = await prisma.tenant.create({
    data: { name: 'Globex', slug: 'globex' },
  });
  console.log('Created tenants...');

  // Create Users
  await prisma.user.create({
    data: {
      email: 'admin@acme.test',
      password: hashedPassword,
      role: 'ADMIN',
      tenantId: acme.id,
    },
  });
  await prisma.user.create({
    data: {
      email: 'user@acme.test',
      password: hashedPassword,
      role: 'MEMBER',
      tenantId: acme.id,
    },
  });
  await prisma.user.create({
    data: {
      email: 'admin@globex.test',
      password: hashedPassword,
      role: 'ADMIN',
      tenantId: globex.id,
    },
  });
  await prisma.user.create({
    data: {
      email: 'user@globex.test',
      password: hashedPassword,
      role: 'MEMBER',
      tenantId: globex.id,
    },
  });
  console.log('Created users...');
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });