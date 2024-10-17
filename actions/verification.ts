'use server';

import { getUserByEmail } from '@/data/user';
import { getVereficationTokenByToken } from '@/data/verification-token'
import prisma from '@/lib/prisma';

export const verification = async (token: string) => {
  const existingToken = await getVereficationTokenByToken(token);

  if (!existingToken) {
    return ({ error: 'Token doesn\'t exist!'});
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return ({ error: 'Token has expired!' });
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return ({ error: 'Email doesn\'t exist!' });
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    }
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    }
  });

  return { success: 'Email verified!' };
};