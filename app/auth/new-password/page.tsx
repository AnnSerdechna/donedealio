import {  NewPasswordForm } from '@/components/elements';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <NewPasswordForm />
    </Suspense>
  );
};