import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { Button, Input, Box } from "@chakra-ui/react";

const Counter = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("");
  const count = useSelector((state) => state.counter.count);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <Box>
      <p>{count}</p>
      <Box>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>

        <Input
          type={"number"}
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </Button>
        <Button onClick={resetAll}>Reset</Button>
      </Box>
    </Box>
  );
};

export default Counter;
