import { LoginButton } from '@/components/auth/LoginButton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white">Auth</h1>
        <LoginButton>
          <Button variant="secondary">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
