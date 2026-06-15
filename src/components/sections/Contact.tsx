import type { FormField, FormErrors, FormStatus } from "@/types";
import { availabilityItems, initialFields, inputClass, validateForm } from "@/utils/contact.utils";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";

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
  }

  return (
    <div className="min-h-screen flex items-center px-6 sm:px-12 lg:py-26 xl:px-24 lg:pt-0">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-14">
        <div className="lg:w-[45%] flex flex-col justify-center">
          <div className="flex flex-col gap-8 p-8 xl:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="w-10 h-[3px] bg-accent rounded-full" />

                <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                  Let's Build
                  <br />
                  Something <span className="text-accent">Great</span>
                </h2>
              </div>

              <p className="text-muted leading-relaxed max-w-lg">
                Whether you need a full-stack developer, a modern web
                application, or simply want to discuss an idea, I'd love to hear
                from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {availabilityItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-4 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      className="text-accent transition-transform"
                    />
                  </div>

                  <span className="text-sm font-medium text-text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-surface border border-border/60 rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold tracing-wide uppercase">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Jhey Marc Abad"
                  className={inputClass("name", touched, errors)}
                />

                {touched.name && errors.name && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5">
                    <AlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-text text-xs font-semibold tracing-wide uppercase">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="jmarc.abad26@gmail.com"
                  className={inputClass("email", touched, errors)}
                />

                {touched.email && errors.email && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5">
                    <AlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-text text-xs font-semibold tracing-wide uppercase">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type here..."
                className={inputClass("subject", touched, errors)}
              />

              {touched.subject && errors.subject && (
                <p className="text-red-400 text-xs flex items-center gap-1.5">
                  <AlertCircle size={11} /> {errors.subject}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-text text-xs font-semibold tracking-wide uppercase">
                Message
              </label>

              <textarea
                name="message"
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type here..."
                rows={5}
                className={`${inputClass("message", touched, errors)} resize-none`}
              />

              {touched.message && errors.message && (
                <p className="text-red-400 text-xs flex items-center gap-1.5">
                  <AlertCircle size={11} /> {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-1">
              {status === "error" && (
                <p className="text-red-400 text-sm flex items-center gap-1.5">
                  <AlertCircle size={11} />
                  Something went wrong. Please try again
                </p>
              )}

              <div className="ml-auto">
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className={`flex items-center gap-2 text-sm font-semibold px-7 py-3 rounded-xl transition-all duration-200 cursor-pointer
                    ${status === "loading"
                      ? "bg-accent/50 text-text/50 cursor-not-allowed"
                      : "bg-accent hover:bg-accent-hover text-text hover:shadow-lg hover:shadow-accent/20"
                    }
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
