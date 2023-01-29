import { useAppDispatch } from "../../../app/hooks";
import { addChar, calculate } from "../../../features/calculator/calculatorSlice";

interface KeyProps {
  value: string;
  variant?: 'slate' | 'blue' | 'gray';
  cols?: number;
}

const Key = ({ value, variant, cols }: KeyProps) => {
  const dispatch = useAppDispatch();

  const colSpan = cols ? `col-span-${cols}` : `col-span-1`;

  const bgColor = variant === 'gray'
    ? 'bg-gray-600'
    : variant === 'blue'
      ? 'bg-blue-700'
      : 'bg-slate-800';

  const handleKeyClick = () => {
    if (value === '=') return dispatch(calculate());
    dispatch(addChar(value))
  };

  return (
    <button
      className={`${bgColor} ${colSpan} p-3 flex justify-center items-center rounded-xl`}
      onClick={handleKeyClick}
    >
      {value}
    </button>
  )
}

export default Key;