import prisma from '@/lib/prisma';

export const getVereficationTokenByEmail = async (email: string) => {
  try {
    return await prisma.verificationToken.findFirst({ where: { email } });
  } catch {
    return null;
  }
};

export const getVereficationTokenByToken = async (token: string) => {
  try {
    return await prisma.verificationToken.findUnique({ where: { token } });
  } catch {
    return null;
  }
};
