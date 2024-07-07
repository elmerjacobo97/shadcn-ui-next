'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          className="rounded-md border shadow"
        />
        <Calendar mode="single" selected={date} onSelect={setDate} disabled={(date) => date > new Date()} className="rounded-md border shadow" />
        <Calendar mode="multiple" selected={multipleDates} onSelect={setMultipleDates} className="rounded-md border shadow" />
      </div>
      <div className="mt-4">
        <h1 className="text-4xl">Información</h1>
        <div className="border-b"></div>

        <p>Fecha: {smallDate}</p>
        <p>Fecha multiple: {multipleDates?.map((date) => date.toLocaleDateString()).join(', ')}</p>
      </div>
    </div>
  );
}
