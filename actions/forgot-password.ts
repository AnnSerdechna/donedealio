'use server';

import { ForgotPasswordSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';
import { ForgotPasswordValuesProps } from '@/schemas/types';
import { MessageProps } from '@/types';

export const forgotPassword = async (values: ForgotPasswordValuesProps): Promise<MessageProps> => {
  const validateFields = ForgotPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { status: 'error', content: 'Invalid fields!'};
  };

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { status: 'error', content: 'Email not found!' };
  };
  
  const passwordResetoken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetoken.email,
    passwordResetoken.token
  );


  return { status: 'success', content: 'Email sent!' };
};