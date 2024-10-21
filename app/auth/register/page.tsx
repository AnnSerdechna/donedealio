import { Suspense } from 'react';

import { AuthCard, RegisterForm } from '@/components/auth';

export default function Register ()  {
  return (
    <Suspense fallback={null}>
      <AuthCard
        title={'Sign up'}
        description={'Already have account?'}
        backLinkUrl={'/auth/login'}
        backLinkLabel={'Sign in'}
        hasSocials
      >
        <RegisterForm />
      </AuthCard >
    </Suspense>
  )
}