import * as z from 'zod';

import { RegisterSchema, LoginSchema, ForgotPasswordSchema, NewPasswordSchema } from '@/schemas';

export type LoginValuesProps = z.infer<typeof LoginSchema>;

export type RegisterValuesProps = z.infer<typeof RegisterSchema>;

export type ForgotPasswordValuesProps = z.infer<typeof ForgotPasswordSchema>;

export type NewPasswordValuesProps = z.infer<typeof NewPasswordSchema>;