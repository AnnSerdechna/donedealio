import prisma from '../lib/prisma';
import { StatusType } from '@prisma/client';

const statuses = [
  { name: 'done', color: '#36ba98', type: StatusType.STATUS  },
  { name: 'in progress', color: '#f4a261', type: StatusType.STATUS },
  { name: 'stuck', color: '#e76f51', type: StatusType.STATUS },
  { name: 'not started', color: '#758694', type: StatusType.STATUS },

  { name: 'critical', color: '#131842', type: StatusType.PRIORITY },
  { name: 'high', color: '#1F316F', type: StatusType.PRIORITY },
  { name: 'medium', color: '#1A4870', type: StatusType.PRIORITY },
  { name: 'low', color: '#5B99C2', type: StatusType.PRIORITY },
  { name: '', color: '#758694', type: StatusType.PRIORITY },
];

async function main() {
  for (const status of statuses) {
    await prisma.status.upsert({
      where: { name: status.name },
      update: {},
      create: {
        name: status.name,
        color: status.color,
        type: status.type
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
