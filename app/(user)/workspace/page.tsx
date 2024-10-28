import { auth } from '@/auth';
import { Workspaces } from '@/components/user';

export default async function WorkspacesPage() {
  const session = await auth();

  return <Workspaces userId={session?.user?.id ?? ''} />
};