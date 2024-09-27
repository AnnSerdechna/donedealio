import prisma from '../lib/prisma';

async function main() {};

main()
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});
