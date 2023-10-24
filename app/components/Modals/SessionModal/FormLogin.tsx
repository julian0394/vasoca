import  * as Form from "@radix-ui/react-form"
import CustomInput from "../../FormComponents/CustomInput"
import { useForm } from "react-hook-form"
import { DEFAULT_LOGIN_FORM, LoginFormType, loginSchema } from "../../../models/forms/sessionForm.model"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@nextui-org/react"

const FormLogin = () => {
  const methods = useForm<LoginFormType>({
    defaultValues: DEFAULT_LOGIN_FORM,
    mode: 'all',
    resolver: zodResolver(loginSchema)
  })

  const submitData = async (data: LoginFormType) => alert(`${data.email} ${data.password}`)

  return (
    <Form.Root onSubmit={methods.handleSubmit(submitData)} className="flex flex-col gap-5">
      <CustomInput methods={methods} name='email' label='Correo electrónico' />
      <CustomInput methods={methods} name='password' label='Contraseña' type="password" />
      <Button type="submit" variant="solid" className="w-full mt-2 bg-slate-600 text-white">Iniciar sesión</Button>
    </Form.Root>
  )
}

export default FormLogin
