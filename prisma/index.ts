import prisma from '../lib/prisma';

type StatusProps = {
  name: string
  color: string
  type: 'STATUS' | 'PRIORITY' 
}

const statuses: StatusProps[] = [
  { name: 'Done', color: '#36ba98', type: 'STATUS'  },
  { name: 'In Progress', color: '#f4a261', type: 'STATUS' },
  { name: 'Stuck', color: '#e76f51', type: 'STATUS' },
  { name: 'Not Started', color: '#758694', type: 'STATUS' },
  { name: 'Critical', color: '#131842', type: 'PRIORITY' },
  { name: 'High', color: '#1F316F', type: 'PRIORITY' },
  { name: 'Medium', color: '#1A4870', type: 'PRIORITY' },
  { name: 'Low', color: '#5B99C2', type: 'PRIORITY' },
  { name: '', color: '#758694', type: 'PRIORITY' },
];

async function main() {
  const users = await prisma.user.findMany();

  for (const user of users) {
    for (const status of statuses) {
      await prisma.status.create({
        data: {
          name: status.name,
          color: status.color,
          type: status.type,
          user: {
            connect: { id: user.id },
          },
        },
      });
    };
  };
};

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});
