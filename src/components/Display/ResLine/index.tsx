import { useAppSelector } from "../../../app/hooks";


const ResLine = () => {
  const result = useAppSelector(state => state.calculator.result)

  return (
    <div className="text-4xl text-gray-200">{result}</div>
  )
}

export default ResLine;