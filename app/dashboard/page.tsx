import { auth } from '@/auth/auth';
import { DashboardPage } from '@/components/pages';

export default async function Dashboard() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <DashboardPage />
    </div>
  );
};