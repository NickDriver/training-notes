import TwoAndTwo from "./TwoAndTwo"

export default function ShowCard() {
    return (
        <div className="flex justify-evenly items-center h-full w-full my-2 rounded-lg bg-slate-700 text-white shadow-md shadow-slate-900">
            <TwoAndTwo />
        </div>
    )
}