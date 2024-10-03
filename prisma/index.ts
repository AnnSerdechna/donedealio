import prisma from '../lib/prisma';

const statuses = [
  { name: 'done', color: '#36ba98' },
  { name: 'in progress', color: '#f4a261' },
  { name: 'stuck', color: '#e76f51' },
  { name: 'not started', color: '#758694' },
];

const priorities = [
  { name: 'critical', color: '#131842' },
  { name: 'high', color: '#1F316F' },
  { name: 'medium', color: '#1A4870' },
  { name: 'low', color: '#5B99C2' },
  { name: '', color: '#758694' },
];

async function main() {
  for (const priority of priorities) {
    await prisma.priority.upsert({
      where: { name: priority.name },
      update: {},
      create: {
        name: priority.name,
        color: priority.color,
      },
    });
  }

  for (const status of statuses) {
    await prisma.status.upsert({
      where: { name: status.name },
      update: {},
      create: {
        name: status.name,
        color: status.color,
      },
    });
  }
};

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});
