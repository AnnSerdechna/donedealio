import { AuthCard, ForgotPasswordForm } from '@/components/auth';

export default function ForgotPassword ()  {
  return (
    <AuthCard
      title={'Forgot password?'}
      description={"We'll send new password link to email"}
    >
      <ForgotPasswordForm />
    </AuthCard>
  )
}