import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3">
      <Key value={"C"} variant="gray" />
      <Key value={"CE"} variant="gray" />
      <Key value={"+-"} variant="gray" />
      <Key value={"/"} variant="blue" />
      <Key value={"7"} />
      <Key value={"8"} />
      <Key value={"9"} />
      <Key value={"*"} variant="blue" />
      <Key value={"4"} />
      <Key value={"5"} />
      <Key value={"6"} />
      <Key value={"-"} variant="blue" />
      <Key value={"1"} />
      <Key value={"2"} />
      <Key value={"3"} />
      <Key value={"+"} variant="blue" />
      <Key value={"0"} cols={2} />
      <Key value={"."} />
      <Key value={"="} variant="blue" />
    </div>
  )
}

export default Keyboard;