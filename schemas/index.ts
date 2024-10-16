import * as z from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Email isn\'t valid!'
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required!'
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], 
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email isn\'t valid!'
  }),
  password: z.string().min(1, {
    message: 'Password is required!'
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: 'First name is required!'
  }),
  email: z.string().email({
    message: 'Email isn\'t valid!'
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required!'
  })
});