import * as Form from '@radix-ui/react-form'
import { Asterisk as AsteriskIcon } from 'lucide-react'
import { ChangeEvent, useEffect } from 'react'
import { Controller, ControllerRenderProps, FieldError, UseFormReturn, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge' 

interface Props {
  name: any
  methods?: UseFormReturn<any>
  label?: string
  helperText?: string
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  rules?: object
  defaultValue?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  size?: 0.5 | 1 | 2 | 3
  canResize?: boolean
  twClasses?: string
  type?: 'text' | 'password'
}

const CustomInput = ({
  methods,
  name,
  label,
  helperText,
  onChange,
  onBlur,
  rules,
  defaultValue = '',
  placeholder = 'Completar',
  required = false,
  disabled = false,
  canResize = false,
  twClasses = '',
  type = 'text'
}: Props) => {
  const { control: newControl } = useForm()
  const error = methods?.formState.errors[name] as FieldError

  const styles = twMerge(`
    py-2 px-3 text-sm border rounded-md outline-none transition-all duration-200
    text-slate-600 dark:text-slate-100 bg-slate-100 dark:bg-slate-600
    border-slate-300 hover:border-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700/70 active:border-blue-700 active:ring-1 active:ring-blue-700/70
    dark:border-slate-500 dark:hover:border-slate-400 dark:focus:border-blue-500 dark:focus:ring-1 dark:focus:ring-blue-500/70 dark:active:border-blue-500 dark:active:ring-1 dark:active:ring-blue-700/70
    placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-300 placeholder:font-light placeholder:select-none`,
    disabled && 'cursor-not-allowed hover:border-slate-300',
    error && `
      border-rose-500 ring-1 ring-rose-300 focus:border-red-700 focus:ring-red-500 active:border-red-700 active:ring-red-500 hover:border-red-600
      dark:border-rose-600 dark:ring-rose-500 dark:focus:border-red-700 dark:focus:ring-red-400 dark:active:border-red-700 dark:active:ring-red-400 dark:hover:border-red-600`,
    twClasses
  )

  useEffect( () => {
    if(defaultValue) methods?.setValue(name, defaultValue)
  }, [])

  return (
    <Controller 
      name={name}
      control={methods?.control ?? newControl}
      render={ ({ field }) => (
        <Form.Field name={name} className={`flex flex-col gap-1 w-full min-w-[5rem]`} ref={field.ref}>
          <Form.Label className='flex justify-between items-center pl-1 text-xs font-medium text-slate-500 dark:text-slate-400'>
            <Form.Message className='flex gap-1'>{label ?? ''} { required && <AsteriskIcon size={12} className='text-rose-500' />}</Form.Message>
            <span>
              { (helperText && !error) &&
                <Form.Message className='pr-1 text-xs text-slate-500 '>
                  { helperText }
                </Form.Message>
              }
              { error &&
                <Form.Message className='pr-1 text-xs text-rose-600 dark:text-rose-500'>
                  { error?.message ?? 'Campo con error' }
                </Form.Message>
              }
            </span>
          </Form.Label>
          
          <Form.Control asChild>
            { canResize
              ? renderTextArea(field)
              : renderInput(field)
            }
          </Form.Control>
        </Form.Field>
      )}
      rules={{
        ...rules,
      }}
    />
  )

  function renderTextArea(field: ControllerRenderProps<any, any>) {
    return (
      <textarea
        className={styles}
        rows={1}
        placeholder={placeholder ?? 'Completar'}
        disabled={disabled}
        value={field.value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          const { value } = event.target
          field.onChange(value)
          if(onChange) onChange(value)
        }}
        onBlur={() => {
          field.onBlur()
          if(onBlur) onBlur(field.value)
        }}
      />
    )
  }

  function renderInput(field: ControllerRenderProps<any, any>) {
    return (
      <input
        className={styles}
        placeholder={placeholder ?? 'Completar'}
        disabled={disabled}
        value={field.value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const { value } = event.target
          field.onChange(value)
          if(onChange) onChange(value)
        }}
        onBlur={() => {
          field.onBlur()
          if(onBlur) onBlur(field.value)
        }}
        type={type}
      />
    )
  }
}

export default CustomInput
