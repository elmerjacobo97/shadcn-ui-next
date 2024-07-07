import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardPage() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {'123456789'.split('').map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Info</Button>
            <Button>Más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
