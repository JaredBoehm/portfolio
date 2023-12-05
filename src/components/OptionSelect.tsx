import UID from "~/utils/UID"
const uid = new UID()

interface Option {
    display: string
    value: string
}

interface OptionSelectProps {
    options: Option[]
    clickFunction: (option: string) => void
}

export default function OptionSelect({ options, clickFunction }: OptionSelectProps) {
    return (
        <div className={`flex flex-row flex-wrap gap-4 p-2`}>
            {options.map((option) => {
                return (
                    <button key={uid.new()} className={`dark:text-white text-xs`} onClick={() => clickFunction(option.value)}>
                        {option.display}
                    </button>
                )
            })}
        </div>
    )
}