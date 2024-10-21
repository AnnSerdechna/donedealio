import { Verification } from '@/components/auth';
import { Suspense } from 'react';

export default function VerificationPage() {
  return (
    <Suspense fallback={null}>
      <Verification />
    </Suspense>
  )
}