'use server';

import bcryptjs from 'bcryptjs';

import { RegisterSchema } from '@/schemas';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
import { RegisterValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';

export const register = async (values: RegisterValuesProps): Promise<MessageProps> => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { status: 'error', content: 'Invalid fields!' };
  };

  const { email, name, password } = validateFields.data;
  const hashPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (!!existingUser) {
    return { status: 'error', content: 'Email already in use!' };
  };

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword
    }
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  );

  return { status: 'success', content: 'Confirmation email sent!' };
};