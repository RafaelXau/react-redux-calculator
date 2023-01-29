import { useAppSelector } from "../../../app/hooks";

const ErrorLine = () => {
  const error = useAppSelector(state => state.calculator.error)

  return (
    <div className="h-5 text-red-400 text-xs pt-1 uppercase">
      {error}
    </div>
  )
}

export default ErrorLine;