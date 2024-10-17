'use server';

import { getUserByEmail } from '@/data/user';
import { getVereficationTokenByToken } from '@/data/verification-token'
import prisma from '@/lib/prisma';
import { MessageProps } from '@/types';

export const verification = async (token: string): Promise<MessageProps> => {
  const existingToken = await getVereficationTokenByToken(token);

  if (!existingToken) {
    return { status: 'error', content: 'Token doesn\'t exist!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { status: 'error', content: 'Token has expired!' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { status: 'error', content: 'Email doesn\'t exist!' };
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

  return { status: 'success', content: 'Email verified!' };
};