import prisma from '../lib/prisma';

const statuses = [
  { name: 'Done', color: '#36ba98'  },
  { name: 'In Progress', color: '#f4a261'},
  { name: 'Stuck', color: '#e76f51' },
  { name: 'Not Started', color: '#758694'},
];

const priorities = [
  { name: 'Critical', color: '#131842' },
  { name: 'High', color: '#1F316F' },
  { name: 'Medium', color: '#1A4870' },
  { name: 'Low', color: '#5B99C2' },
  { name: '', color: '#758694' },
];


async function main() {
  // for (const status of statuses) {
  //   await prisma.status.upsert({
  //     where: { name: status.name },
  //     update: {},
  //     create: {
  //       name: status.name,
  //       color: status.color,
  //     },
  //   });
  // }

  // for (const priority of priorities) {
  //   await prisma.priority.upsert({
  //     where: { name: priority.name },
  //     update: {},
  //     create: {
  //       name: priority.name,
  //       color: priority.color,
  //     },
  //   });
  // }
};

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});
