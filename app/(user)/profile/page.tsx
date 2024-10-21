import { ContentContainer, ProfileForm } from '@/components/user';

export default async function Profile() {
  return (
    <ContentContainer title={'Profile'}>
      <ProfileForm />
    </ContentContainer>
  );
};