import { RadioGroup, Radio, useRadio, VisuallyHidden, RadioProps } from "@nextui-org/react"
import { twMerge } from "tailwind-merge";

//todo: unir props a las custom

const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={twMerge(
        "group inline-flex items-center justify-between hover:bg-content2 flex-row-reverse",
        "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-red-600">{description}</span>
        )}
      </div>
    </Component>
  )
}

export default CustomRadio
