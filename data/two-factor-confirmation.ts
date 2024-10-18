import prisma from '@/lib/prisma';

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    return await prisma.twoFactorConfirnation.findUnique({ where: { userId } });
  } catch {
    return null;
  }
};
