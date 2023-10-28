import { ZodSchema, z } from 'zod'

export interface LoginFormType {
  email: string
  password: string
}
export const DEFAULT_LOGIN_FORM = {
  email: '',
  password: '',
}
export const loginSchema: ZodSchema<LoginFormType> = z.object({
  email: z.string().min(1, 'Este campo es requerido').email('Ingrese email válido'),
  password: z.string().min(1, 'Este campo es requerido')
})
// export type LoginSchema = z.infer<typeof loginSchema>


export interface SignupFormType {
  email: string
  password: string
  confirmPassword: string
}
export const DEFAULT_SIGNUP_FORM = {
  email: '',
  password: '',
  confirmPassword: '',
}
export const signupSchema: ZodSchema<SignupFormType> = z.object({
  email: z.string().email('No es un formato de mail válido').min(1, 'Este campo es requerido'),
  password: z.string().min(1, 'Este campo es requerido'),
  confirmPassword: z.string().min(1, 'Este campo es requerido'),
}).refine(
  (values) => values.password === values.confirmPassword,
  {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  }
)
// export type SignupFormTypeSchema = z.infer<typeof signupSchema>


export interface SelectOption {
  value: string
  label: string
}
