import type { FormField, FormErrors, FormStatus } from "@/types";
import { availabilityItems, initialFields, inputClass, validateForm } from "@/utils/contact.utils";
import { AlertCircle, Loader2, Mail, MessageSquare, PenSquare, Send, User } from "lucide-react";
import { useState } from "react";
import ContactSuccess from "./elements/contact/ContactSuccess";
import { sendEmail } from "@/utils/emailjs.utils";

export default function Contact() {
  const [fields, setFields] = useState<FormField>(initialFields)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormField, boolean>>>({})
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validateForm(fields)

    if (fieldErrors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors]
      }))
    }
  }

  const handleSubmit = async (): Promise<void> => {
    const fieldErrors = validateForm(fields)
    setTouched({ name: true, email: true, subject: true, message: true })

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    
    setStatus("loading")

    try {
      await sendEmail(fields)
      setStatus("success");
    } catch (error) {
      console.error("EmailJS error: ",  error)
      setStatus("error")
    }
  }

  const handleReset = (): void => {
    setFields(initialFields);
    setErrors({});
    setTouched({})
    setStatus("idle");
  }

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-6 sm:px-12 xl:px-24 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-14 py-20">
        <div className="lg:w-[45%] flex items-center">
          <div className="w-full flex flex-col gap-10 px-2 lg:px-0">
            <div className="space-y-6">
              <h2 className="text-5xl xl:text-6xl font-bold leading-[1.1]">
                Let's Build
                <br />
                Something <span className="text-accent">Great</span>
              </h2>

              <p className="max-w-xl text-muted leading-8 text-md">
                Whether you need a full-stack developer, a modern web
                application, or simply want to discuss an idea, I'd love
                to hear from you. Let's create something meaningful together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {availabilityItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-surface/70 rounded-3xl backdrop-blur-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>

                    <p className="text-sm font-semibold text-text">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-surface/80 backdrop-blur-xl rounded-4xl p-7 sm:p-9 shadow-2xl shadow-black/10 flex flex-col gap-7">
            <div>
              <h3 className="text-3xl font-bold text-text">
                Send me a message
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-text/40 text-[11px] font-semibold tracking-[0.25em] uppercase">
                  Full Name
                </label>

                <div className="relative">
                  <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-text/30" />

                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jhey Marc Abad"
                    className={`${inputClass("name", touched, errors)} bg-background/50 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-sm placeholder:text-text/30 focus:ring-4 focus:ring-accent/10 transition-all duration-300`}
                  />
                </div>

                {touched.name && errors.name && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-text/40 text-[11px] font-semibold tracking-[0.25em] uppercase">
                  Email
                </label>

                <div className="relative">
                  <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-text/30" />

                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jmarc.abad26@gmail.com"
                    className={`${inputClass("email", touched, errors)} bg-background/50 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-sm placeholder:text-text/30 focus:ring-4 focus:ring-accent/10 transition-all duration-300`}
                  />
                </div>

                {touched.email && errors.email && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-text/40 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Subject
              </label>

              <div className="relative">
                <PenSquare size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-text/30" />

                <input
                  type="text"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type here..."
                  className={`${inputClass("subject", touched, errors)} bg-background/50 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-sm placeholder:text-text/30 focus:ring-4 focus:ring-accent/10 transition-all duration-300`}
                />
              </div>

              {touched.subject && errors.subject && (
                <p className="text-red-400 text-xs flex items-center gap-1.5">
                  <AlertCircle size={12} /> {errors.subject}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-text/40 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Message
              </label>

              <div className="relative">
                <MessageSquare size={18} className="absolute left-6 top-5 text-text/30" />
                
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type here..."
                  rows={6}
                  className={`${inputClass("message", touched, errors)} resize-none bg-background/50 border border-white/5 rounded-2xl pl-14 pr-5 py-4 text-sm placeholder:text-text/30 focus:ring-4 focus:ring-accent/10 transition-all duration-300`}
                />
              </div>

              {touched.message && errors.message && (
                <p className="text-red-400 text-xs flex items-center gap-1.5">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              {status === "error" && (
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle size={14} />
                  Something went wrong. Please try again
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className={`ml-auto flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold transition-all duration-300
                  ${status === "loading"
                    ? "bg-accent/50 text-text/50 cursor-not-allowed"
                    : "bg-accent hover:bg-accent-hover text-text hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                  }
                `}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {status === "success" && (
          <ContactSuccess onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
