'use server';

import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { 
  generateVerificationToken, 
  generateTwoFactorToken,
} from '@/lib/tokens';
import { 
  sendVerificationEmail,
  sendTwoFactorTokenEmail,
} from '@/lib/mail';
import { LoginValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import prisma from '@/lib/prisma';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';
import bcryptjs from 'bcryptjs';

export const login = async (values: LoginValuesProps): Promise<MessageProps | { twoFactorToken: boolean }> => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { status: 'error', content: 'Invalid fields!'};
  }

  const { email, password, code } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { status: 'error', content: 'Invalid credentials!' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { status: 'success', content: 'Confirmation email sent!' };
  }

  const isPasswordValid = await bcryptjs.compare(password, existingUser.password);

  if (existingUser.isTwoFactorEnable && !!existingUser.email && isPasswordValid) {
    if (!!code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { status: 'error', content: 'Invalid code!' };
      }

      if (twoFactorToken.token !== code) {
        return { status: 'error', content: 'Invalid code!' };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return { status: 'error', content: 'Code expired!' };
      }

      await prisma.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id
        }
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

      if (existingConfirmation) {
        await prisma.twoFactorConfirnation.delete({
          where: {
            id: existingConfirmation.id
          }
        });
      }

      await prisma.twoFactorConfirnation.create({
        data: {
          userId: existingUser.id
        }
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);

      await sendTwoFactorTokenEmail(
        twoFactorToken.email,
        twoFactorToken.token
      );

      return { twoFactorToken: true };
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { status: 'error', content: 'Invalid credentials!' };
        default:
          return { status: 'error', content: 'Something went wrong!' };
      }
    }

    throw error;
  };

  return { status: 'success', content: 'User loggined!' };
}