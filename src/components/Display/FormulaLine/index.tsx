import { useAppSelector } from "../../../app/hooks";


const FormulaLine = () => {
  const formula = useAppSelector(state => state.calculator.formula)

  return (
    <div className="h-7 text-lg text-gray-500">{formula}</div>
  )
}

export default FormulaLine;