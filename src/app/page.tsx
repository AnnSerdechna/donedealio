import { LoginForm } from '@/components/elements';
import { AuthLayout } from '@/components/layout';

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};