'use server';

import * as z from 'zod';
import bcryptjs from 'bcryptjs';

import { RegisterSchema } from '@/auth/schemas';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

type RegisterValuesProps = z.infer<typeof RegisterSchema>;

export const register = async (values: RegisterValuesProps) => {
  const validateFields = RegisterSchema.safeParse(values);

  console.log({validateFields}, 'validateFields');
  

  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  };

  const { email, name, password } = validateFields.data;
  const hashPassword = await bcryptjs.hash(password, 10)

  const existingUser = await getUserByEmail(email)  

  if (!!existingUser) {
    return { error: 'Email already in use!' };
  };

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword
    }
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' };
};