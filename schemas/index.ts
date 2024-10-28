import * as z from 'zod';

export const ProfileSchema = z.object({
  name: z
    .optional(z
    .string()
    .min(3, { message: 'Name should contains at least 3 characters!' }
  )),
  email: z
    .optional(z
    .string()
    .email({ message: 'Email isn\'t valid!' }
  )),
  password: z.optional(z.string()),
  newPassword: z.optional(z.string()),
  confirmPassword: z.optional(z.string())
})
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .refine((data) => !(data.newPassword && !data.password), {
    message: "Password is required when setting a new password",
    path: ['password'],
  })
  .refine((data) => !(data.password && !data.newPassword), {
    message: "New password is required when changing the password",
    path: ['newPassword'],
  });
// .refine(data => 
//   data.newPassword === data.confirmPassword, 
//   {
//     message: "Passwords don't match",
//     path: ['confirmPassword']
//   }
// )
// .refine(
//   data => data.password && !data.newPassword, 
//   {
//     message: "New password is required",
//     path: ['newPassword']
//   }
// )
// .refine(
//   data => !data.password && data.newPassword, 
//   {
//     message: "Password is required",
//     path: ['password']
//   }
// );

export const ForgotPasswordSchema = z.object({
  email: z
  .string()
  .email({ message: 'Email isn\'t valid!'}),
});

export const NewPasswordSchema = z.object({
  password: z
  .string()
  .min(6, {message: 'Minimum 6 characters required!'}),
  confirmPassword: z.string()
})
.refine(data => 
  data.password === data.confirmPassword, 
  {
    message: "Passwords don't match",
    path: ['confirmPassword'], 
});

export const LoginSchema = z.object({
  email: z
  .string()
  .email({ message: 'Email isn\'t valid!' }),
  password: z
    .string()
    .min(1, { message: 'Password is required!' }),
  code: z
    .optional(z
    .string()
  ),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name should contains at least 3 characters!' }),
  email: z
    .string()
    .email({message: 'Email isn\'t valid!'}),
  password: z
    .string()
    .min(6, { message: 'Minimum 6 characters required!' }),
  confirmPassword: z.string()
})
.refine(data => 
  data.password === data.confirmPassword, 
  {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});