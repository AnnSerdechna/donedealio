import { auth } from '@/auth/auth';
import { WorkspacesPage } from '@/components/pages';

export default async function Workspaces() {
  const session = await auth();

  return <WorkspacesPage userId={session?.user?.id ?? ''} />
};