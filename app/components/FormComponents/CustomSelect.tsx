import * as Select from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { AsteriskIcon, Check, ChevronDown, X as XIcon } from 'lucide-react'
import { Controller, FieldError, UseFormReturn, useForm } from 'react-hook-form'
import { MutableRefObject, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectOption } from '../../models/forms/sessionForm.model'
import { setInputSize } from '../../utils/setInputSize'

interface Props {
  name: string
  label: string
  options: SelectOption[]
  methods?: UseFormReturn<any>
  defaultValue?: string
  helperText?: string
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  rules?: object
  ref?: MutableRefObject<any>
  required?: boolean
  disabled?: boolean
  allowClear?: boolean
  flexSize?: 0.5 | 1 | 2 | 3
}

const CustomSelect = ({ 
  name,
  label,
  options,
  methods,
  defaultValue,
  helperText,
  onChange,
  onBlur,
  rules,
  ref,
  required = false,
  disabled = false,
  allowClear = false,
  flexSize = 1
}: Props) => {
  const { control: newControl, setValue: newSetValue } = useForm()
  const inputSize = setInputSize(flexSize)
  const error = methods?.formState.errors[name] as FieldError

  const clearValue = () => {
    if(allowClear) methods?.setValue(name, '') ?? newSetValue(name, '')
  }

  useEffect( () => {
    if(defaultValue) methods?.setValue(name, defaultValue) ?? newSetValue(name, defaultValue)
  }, [])

  return (
    <Controller
      name={name}
      control={methods?.control ?? newControl}
      render={({ field }) => (
        <div className={`relative flex flex-col gap-1 text-slate-500 w-full ${inputSize} min-w-[5rem]`}>
          <label htmlFor={`id-${name}`} className='flex justify-between items-center pl-1 text-xs font-medium text-slate-500 dark:text-slate-400'>
            <span className='flex gap-1'>
              { label }
              { required && <AsteriskIcon size={12} className='text-rose-500' /> }
            </span>
            <>
              { (helperText && !error) &&
                <span className='pr-1 text-xs text-slate-500'>
                  { helperText }
                </span>
              }
              { error &&
                <span className='pr-1 text-xs text-rose-600 dark:text-rose-500'>
                  {error?.message ?? 'Campo con error'}
                </span>
              }
            </>
          </label>

          <Select.Root
            onValueChange={(value: string) => {
              field.onChange(value)
              if(onChange) onChange(value)
            }}
            value={field.value}
            name={field.name}
          >
            { (field.value !== '' && allowClear && !required) &&
              <Select.Icon className='absolute right-[40px] top-[30px] rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600/80 dark:hover:text-slate-300 p-[2px] transition-all duration-200'>
                <XIcon size={18} onClick={clearValue} />
              </Select.Icon>
            }
            <Select.Trigger
              className={twMerge(`
                flex justify-between py-2 px-3 border rounded-md outline-none select-none transition-all duration-200
                text-slate-600 dark:text-slate-100 bg-slate-100 dark:bg-slate-700
                border-slate-300 hover:border-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700/70 active:border-blue-700 active:ring-1 active:ring-blue-700/70
                dark:border-slate-500 dark:hover:border-slate-400 dark:focus:border-blue-500 dark:focus:ring-1 dark:focus:ring-blue-500/70 dark:active:border-blue-500 dark:active:ring-1 dark:active:ring-blue-700/70`,
                field.value === '' && 'text-sm font-light select-none text-slate-400 dark:text-slate-300',
                disabled && 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed',
                error && `border-rose-500 ring-1 ring-rose-300 focus:border-red-700 focus:ring-red-500 active:border-red-700 active:ring-red-500 hover:border-red-600
                dark:border-rose-600 dark:ring-rose-500 dark:focus:border-red-700 dark:focus:ring-red-400 dark:active:border-red-700 dark:active:ring-red-400 dark:hover:border-red-600`,
              )}
              aria-label={name}
              id={`id-${name}`}
              disabled={disabled}
              onBlur={() => {
                field.onBlur()
                if(onBlur) onBlur(field.value)
              }}
              ref={ref ?? field.ref}
            >
              <Select.Value placeholder='Seleccionar' />

              <span className='relative flex items-center gap-3 text-slate-400'>
                <Select.Icon>
                  <ChevronDown />
                </Select.Icon>
              </span>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className={`
                  border rounded-md w-[--radix-select-trigger-width]
                  bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-500
                `}
                position='popper'
                sideOffset={2}
              >
                <ScrollArea.Root type="auto">
                  <Select.Viewport className={twMerge('p-1', options.length > 8 && 'mr-3 h-[15rem]')}>
                    <ScrollArea.Viewport className='w-full h-full'>
                      { options.map((option, index) => (
                        <Select.Item
                          value={option.value}
                          className={twMerge(`
                            relative py-2 px-7 flex items-center rounded-md text-sm leading-none cursor-pointer select-none data-[disabled]:italic data-[disabled]:pointer-events-none data-[highlighted]:outline-none
                            hover:bg-sky-100 dark:hover:bg-slate-600/90 data-[disabled]:bg-gray-100 dark:data-[disabled]:bg-gray-600 data-[disabled]:text-gray-400`, index !== 0 && 'data-[state=checked]:text-blue-600 dark:data-[state=checked]:text-sky-500' 
                          )}
                          key={option.value}
                          disabled={index === 0}
                        >
                          <Select.ItemText>{option.label}</Select.ItemText>
                          {index !== 0 &&
                            <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                              <Check size={15} />
                            </Select.ItemIndicator>
                          }
                        </Select.Item>
                      ))}
                    </ScrollArea.Viewport>
                  </Select.Viewport>
                  <ScrollArea.Scrollbar className='w-2 mx-1 my-1 rounded-md bg-slate-200/50 hover:bg-slate-600/50 dark:bg-slate-500 dark:hover:bg-slate-500/80' orientation="vertical">
                    <ScrollArea.Thumb className='rounded-md bg-slate-300 hover:bg-slate-400/70 dark:bg-slate-400 dark:active:bg-slate-300/80 transition-colors duration-150' />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      )}
      rules={{
        ...rules,
      }}
    />
  )
}

export default CustomSelect
