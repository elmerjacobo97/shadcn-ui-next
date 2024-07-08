'use client';

import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid  grid-cols-2 gap-3">
      <div>
        <Slider defaultValue={[sliderValue]} onValueChange={(value) => setSliderValue(value[0])} max={100} step={5} />
        <span className="text-sm"> Slider value: {sliderValue}</span>
      </div>
      <div>
        <Slider defaultValue={rangeValue} onValueChange={setRangeValue} max={100} step={5} />
        <span className="text-sm"> Slider value: {rangeValue.join(' - ')}</span>
      </div>
    </div>
  );
}
