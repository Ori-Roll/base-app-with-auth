'use server';
import React from 'react';
import { signOut } from '@/../auth';
import { Button } from '@/components/ui/Button/Button';
import { auth } from '../../../../auth';

type SettingsProps = {};

const Settings = async (props: SettingsProps) => {
  const session = await auth();

  console.log('session?.user?.image ', session?.user?.image);

  return (
    <div>
      <h1>Settings</h1>
      <h4>Welcome authenticated man</h4>
      <p>here you can sign out</p>
      {session?.user?.image && (
        // Using img instead of next's Image component because of an issue with google account image link with width if using Image
        // eslint-disable-next-line @next/next/no-img-element
        <img src={session?.user?.image} alt="user image" />
      )}
      <h5>{JSON.stringify(session, null, 4) ?? 'NO user'}</h5>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button size="size-large" type="submit">
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default Settings;
