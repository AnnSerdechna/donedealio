import { Resend } from 'resend';

import { domain } from '@/variables';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: 'donedealio@donedealio.online',
    to: email,
    subject: '2FA Code',
    html: `<p>Your 2FA code: ${token}</p>`
  });
};

export const sendVerificationEmail = async (
  email: string, 
  token: string,
) => {
  const confirmLink = `${domain}/auth/verification?token=${token}`;

  await resend.emails.send({
    from: 'donedealio@donedealio.online',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email</p>`
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'donedealio@donedealio.online',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`
  });
};
