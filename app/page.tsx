import { LoginForm } from '@/components/elements';
import { AuthLayout } from '@/components/layout';
import { Suspense } from 'react';

export default function Home() {
  return (
    <AuthLayout>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
};