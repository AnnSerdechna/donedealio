'ue server';

import { currentRole } from '@/lib/auth';
import { MessageProps } from '@/types';
import { Role } from '@prisma/client';

export const admin = async (): Promise<MessageProps> => {
  const role = await currentRole();

  if (role === Role.ADMIN) {
    return { status: 'success', content: 'Allowed!' };
  }

  return { status: 'error', content: 'Forbidden access!' };
}