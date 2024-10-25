'use server';

import bcryptjs from 'bcryptjs';

import { RegisterSchema } from '@/schemas';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
import { RegisterValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { defaultStatuses } from '@/data/defautlStatuses';

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

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  for (const status of defaultStatuses) {
    await prisma.status.create({
      data: {
        name: status.name,
        color: status.color,
        type: status.type,
        user: {
          connect: { id: newUser.id },
        },
      },
    });
  };
  
  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
  );

  return { status: 'success', content: 'Confirmation email sent!' };
};

