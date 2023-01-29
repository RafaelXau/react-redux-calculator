import ErrorLine from "./ErrorLine";
import FormulaLine from "./FormulaLine"
import ResLine from "./ResLine";

const Display = () => {
  return (
    <div className="text-right p-3 bg-slate-800 rounded-xl">
      <ErrorLine />
      <FormulaLine />
      <ResLine />
    </div>
  )
}

export default Display;