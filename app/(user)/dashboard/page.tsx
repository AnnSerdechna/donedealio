
import { DashboardPage } from '@/components/pages';
import { currentUser } from '@/lib/auth';

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <div>
      {JSON.stringify(user)}
      <DashboardPage />
    </div>
  );
};