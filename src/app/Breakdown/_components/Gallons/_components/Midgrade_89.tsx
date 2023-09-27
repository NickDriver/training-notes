export default function Midgrade_89({ onMidgradeInput }: { onMidgradeInput: any }) {
  function midgradeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    onMidgradeInput(event.target.value);
  }
  return (
    <div className="flex justify-between m-2 bg-blue-600 text-stone-950 rounded-sm">
      <label className="m-1">89-Mid</label>
      <input className="m-1 font-bold" type="number" name="midgrade" onChange={midgradeInputHandler} />
    </div>
  )
}