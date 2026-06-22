import emailjs from "@emailjs/browser"
import type { FormField } from "@/types"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

export const sendEmail = async (fields: FormField): Promise<void> => {
    const templateParams = {
        name: fields.name,
        email: fields.email,
        subject: fields.subject,
        message: fields.message
    }

    await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
    )
}