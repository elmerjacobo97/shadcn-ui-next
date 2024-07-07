'use client';

import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon, ReloadIcon, RocketIcon } from '@radix-ui/react-icons';

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Button variant="default" size="default">
        Default
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary" size="icon">
        <RocketIcon className="h-4 w-4" />
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button onClick={() => alert('clicked')}>Click me</Button>
      <Button variant="success">Success</Button>
      <Button variant="secondary">
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
