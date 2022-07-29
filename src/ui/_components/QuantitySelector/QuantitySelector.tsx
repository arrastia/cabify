import React, { useRef, useState } from 'react';
import { Button } from '../Button';
import { Styles } from './QuantitySelector.styles';

type Props = {};

export const QuantitySelector = (props: Props) => {
  const [quantity, setQuantity] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const increment = () => {
    inputRef.current?.stepUp();
  };

  const decrement = () => {
    inputRef.current?.stepDown();
  };

  return (
    <Styles.Container>
      <Button category="transparent" label="-" onClick={decrement}></Button>
      <Styles.Input ref={inputRef} min="0" type="number" value={inputRef.current?.value} />
      <Button category="transparent" label="+" onClick={increment}></Button>

      {/* <td>
        <div className="form-row justify-content-center">
          <div className="form-group mb-0">
            <div className="input-group mx-auto mb-0">
              <div className="number-input">
                <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                <input className="quantity bg-light" min="0" placeholder="0" name="quantity" value="1" type="number" />
                <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus"></button>
              </div>
            </div>
          </div>
        </div>
      </td> */}
    </Styles.Container>
  );
};
