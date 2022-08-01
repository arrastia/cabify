import { Styles } from './QuantitySelector.styles';

import { Button } from 'ui/components/Button';

import { useQuantitySelector } from './hooks/useQuantitySelector';

import type { QuantitySelectorProps } from './@types/QuantitySelector.types';

export const QuantitySelector = ({ productCategory }: QuantitySelectorProps) => {
  const { decreaseCounter, increaseCounter, quantity, setCustomValue, resetStates } = useQuantitySelector(productCategory);

  return (
    <Styles.Container>
      <Button category="transparent" label="-" onClick={decreaseCounter} />
      <Styles.Input min="0" onChange={setCustomValue} onKeyDown={resetStates} type="number" value={quantity} />
      <Button category="transparent" label="+" onClick={increaseCounter} />
    </Styles.Container>
  );
};
