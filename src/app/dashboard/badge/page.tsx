import { Badge } from '@/components/ui/badge';

export default function BadgePage() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge capitalize variant="warning">
        warning
      </Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
    </div>
  );
}
