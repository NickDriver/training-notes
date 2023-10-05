export default function DSL({ onDieselInput }: { onDieselInput: any }) {
  function dieselInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    onDieselInput(event?.target.value);
  }
  return (
    <div className="flex justify-between m-2 bg-green-700 text-stone-950 rounded-sm">
      <label data-testid="label-diesel" className="m-1">Diesel</label>
      <input className="m-1 font-bold" type="number" name="diesel" onChange={dieselInputHandler} />
    </div>
  )
}