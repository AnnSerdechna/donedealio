import { Verification } from '@/components/elements';
import { Suspense } from 'react';

export default function VerificationPage() {
  return (
    <Suspense fallback={null}>
      <Verification />
    </Suspense>
  )
}