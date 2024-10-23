'use server';

import prisma from '@/lib/prisma';
import { getUserByEmail, getUserById } from '@/data/user';
import { ProfileValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { currentUser } from '@/lib/auth';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
import bcryptjs from 'bcryptjs';

export const profile = async (values: ProfileValuesProps): Promise<MessageProps> => {
  const user = await currentUser();  

  if (!user) {
    return {status: 'error', content: 'Unauthorized!'}
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { status: 'error', content: 'Unauthorized!' }
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (!!existingUser && existingUser.id !== user.id) {
      return { status: 'error', content: 'Email already in use!'}
    }

    const verificationToken = await generateVerificationToken(
      values.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { status: 'success', content: 'Verification email sent!' };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcryptjs.compare(
      values.password,
      dbUser.password
    );

    if (!passwordMatch) {
      return { status: 'error', content: 'Incorect password!' };
    }

    const hashPassword = await bcryptjs.hash(values.newPassword, 10);

    values.password = hashPassword;
    values.newPassword = undefined;
    values.confirmPassword = undefined;
  }

  await prisma.user.update({
    where: {id: dbUser.id },
    data: {
      ...values
    }
  });

  return { status: 'success', content: 'Profile updates!' };
};