'use client'
import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

type Props = {
  onChange: void;
};

const QuantityStepper = ({ onChange }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <Box>
      <HStack>
        <Button onClick={handleDecrement}>-</Button>
        <NumberInput value={quantity} min={1}>
          <NumberInputField />
        </NumberInput>
        <Button onClick={handleIncrement}>+</Button>
      </HStack>
    </Box>
  );
};

export default QuantityStepper;
