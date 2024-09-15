import { useAppDispatch, useAppSelectore } from '../../hooks';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useAppSelectore((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      counter value: {count}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
};

export default Counter;
