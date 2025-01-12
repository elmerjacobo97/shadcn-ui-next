'use client';

import { Badge } from '@/components/ui/badge';
import { Payment } from '@/data/payments';
import { ColumnDef, FilterFn, Row, SortDirection } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon, ChevronUpIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
// import { toast } from '@/components/ui/use-toast';
import { toast } from 'sonner';

const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {
  filterValue = filterValue.toLowerCase();

  const filterParts = filterValue.split(' ');
  const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLowerCase();

  return filterParts.every((part) => rowValues.includes(part));

  // if (row.original.email.includes(filterValue)) {
  //   return true;
  // }

  // if (row.original.clientName.includes(filterValue)) {
  //   return true;
  // }

  // if (row.original.status.toString().includes(filterValue)) {
  //   return true;
  // }

  // return false;
};

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === 'asc') {
    return <ChevronUpIcon className="ml-2 h-4 w-4" />;
  }

  if (isSorted === 'desc') {
    return <ChevronDownIcon className="ml-2 h-4 w-4" />;
  }

  return null;
};

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    // header: 'Status',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Status
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const variant =
        {
          pending: 'info',
          processing: 'warning',
          success: 'success',
          failed: 'destructive',
        }[status] ?? ('default' as any);

      return (
        <Badge capitalize variant={variant}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'email',
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'amount',
    // header: 'Amount',
    // header: () => <div className="text-right">Amount</div>,
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'PEN',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'clientName',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Client
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast.success('Payment ID copied to clipboard', {
                  position: 'top-right',
                });
                // toast({
                //   title: 'Payment ID copied to clipboard',
                //   description: 'Your payment ID has been copied to your clipboard.',
                // });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
