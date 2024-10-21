import { Suspense } from 'react';

import { AuthCard, NewPasswordForm } from '@/components/auth';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <AuthCard
        title={'New password'}
        description={'Set new password and'}
        backLinkUrl={'/auth/login'}
        backLinkLabel={'Sign in'}
      >
        <NewPasswordForm />
      </AuthCard>
    </Suspense>
  );
};