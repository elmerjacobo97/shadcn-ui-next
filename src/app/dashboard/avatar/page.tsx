import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarPage() {
  return (
    <div className="flex justify-center h-[200px] items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="ml-2">@shadcn</p>
    </div>
  );
}
