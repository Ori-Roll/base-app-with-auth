'use server';
import React from 'react';
import { signOut } from '@/../auth';
import { Button } from '@/components/ui/Button/Button';
import { auth } from '../../../../auth';
type SettingsProps = {};

const Settings = async (props: SettingsProps) => {
  const session = await auth();
  console.log('session', session);
  return (
    <div>
      <h1>Settings</h1>
      <h4>Welcome authenticated man</h4>
      <p>here you can sign out</p>
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
