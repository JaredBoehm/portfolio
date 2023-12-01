import UID from "~/utils/UID"
const uid = new UID()

interface Option {
    name: string
    value: string
}

interface OptionSelectProps {
    options: Option[]
    clickFunction: (option: string) => void
}

export default function OptionSelect({ options, clickFunction }: OptionSelectProps) {
    return (
        <div className={`flex flex-row flex-wrap gap-2`}>
            {options.map((option) => {
                return (
                    <button key={uid.new()} className={`text-white`} onClick={() => clickFunction(option.value)}>
                        {option.name}
                    </button>
                )
            })}
        </div>
    )
}