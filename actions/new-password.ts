'use server';

import bcryptjs from 'bcryptjs';

import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import prisma from '@/lib/prisma';
import { NewPasswordSchema } from '@/schemas';
import { NewPasswordValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';

export const newPassword = async (values: NewPasswordValuesProps, token: string | null): Promise<MessageProps> => {
  if (!token) {
    return { status: 'error', content: 'Missing token!' };
  };

  const validateFields = NewPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { status: 'error', content: 'Invalid fields!' };
  };

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

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

  const hashPassword = await bcryptjs.hash(password, 10)

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashPassword
    }
  });

  await prisma.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    }
  });

  return { status: 'success', content: 'Password has been updated!' };
};