import type { AvailabilityItem, FormErrors, FormField } from "@/types";
import { Briefcase, Sparkles, Users } from "lucide-react";

export const initialFields: FormField = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const availabilityItems: AvailabilityItem[] = [
  { icon: Sparkles, label: "Open to freelance work" },
  { icon: Briefcase, label: "Available for full-time roles" },
  { icon: Users, label: "Open to collaborations" },
];

export const inputClass = (
  field: keyof FormField,
  touched: Partial<Record<keyof FormField, boolean>>,
  errors: FormErrors,
): string =>
  `w-full bg-elevated border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-muted/40
    focus:outline-none transition-all duration-200 ${
      touched[field] && errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-border/60 focus:border-accent/60"
    }`;

export const validateForm = (fields: FormField): FormErrors => {
    const errors: FormErrors = {}

    if (!fields.name.trim())
        errors.name = "Name is required"

    if (!fields.email.trim())
        errors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
        errors.email = "Please enter a valid email"

    if (!fields.subject.trim())
        errors.subject = "Subject is required"

    if (!fields.message.trim())
        errors.message = "Message is required"
    else if (fields.message.trim.length < 10)
        errors.message = "Message must be atleast 10 characters"
        
    return errors
}