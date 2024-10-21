import { Suspense } from 'react';

import { AuthCard, LoginForm } from '@/components/auth';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <AuthCard
        title={'Sign in'}
        description={"Haven't account yet?"}
        backLinkUrl={'/auth/register'}
        backLinkLabel={'Sign up'}
        hasSocials
        isLogin
      >
        <LoginForm />
      </AuthCard>
    </Suspense>
  );
};