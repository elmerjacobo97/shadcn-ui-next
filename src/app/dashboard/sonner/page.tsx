'use client';

import { Button } from '@/components/ui/button';
import { RocketIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';

export default function SonnerPage() {
  return (
    <div className="grid gap-3 grid-cols-4">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            duration: 3000,
            // icon: <RocketIcon />,
            position: 'top-right',
            description: `Sunday, December ${new Date().getDate()}, 2023 at 9:00 AM`,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            duration: 3000,
            // icon: <RocketIcon />,
            position: 'top-right',
            description: `Sunday, December ${new Date().getDate()}, 2023 at 9:00 AM`,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.error('Event has been created', {
            duration: 3000,
            // icon: <RocketIcon />,
            position: 'top-right',
            description: `Sunday, December ${new Date().getDate()}, 2023 at 9:00 AM`,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show error Toast
      </Button>
    </div>
  );
}
