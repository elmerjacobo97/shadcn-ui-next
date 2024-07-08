import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return '123456789'.split(''); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
};

export default async function SkeletonPage() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row">
            <Image src="https://github.com/shadcn.png" alt="@shadcn" width={40} height={40} className="rounded-full" />
            <div className="ml-2">
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Info</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
