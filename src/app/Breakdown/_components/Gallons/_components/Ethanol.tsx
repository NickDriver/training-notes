export default function Ethanol({ onEthanolInput }: { onEthanolInput: any }) {
  function ethanolInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    onEthanolInput(event.target.value);
  }
  return (
    <div className="flex justify-between m-2 bg-sky-600 text-stone-950 rounded-sm">
      <label className="m-1">Ethanol</label>
      <input className="m-1 font-bold" type="number" name="ethanol" onChange={ethanolInputHandler} />
    </div>
  )
}