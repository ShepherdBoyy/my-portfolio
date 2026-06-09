export type FormField = {
    name: string
    email: string
    subject: string
    message: string
}

export type FormStatus = "idle" | "loading" | "success" | "error"

export type FormErrors = Partial<FormField>