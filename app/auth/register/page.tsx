import { Suspense } from 'react';

import { RegisterForm } from '@/components/auth';

export default function Register() {
  return (
    <Suspense fallback={null}>
      <RegisterForm />
    </Suspense>
  )
}