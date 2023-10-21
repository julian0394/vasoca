import { Input } from "@nextui-org/react"

interface Props {}

const NextuiInput = (props: Props) => {
  return (
    <Input 
      type="text" 
      label="Nombre" 
      className="group-data-[focus=true]:bg-purple-500"
      classNames={{
        mainWrapper: 'group',
        label: "text-black/50 dark:text-slate-200",
        input: [
          "text-black/90 dark:text-white",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
    />
  )
}

export default NextuiInput
