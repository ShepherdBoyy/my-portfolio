import { CheckCircle } from "lucide-react"
import type { ContactSuccessProps } from "@/types"

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <div className="flex items-center justify-center px-6 sm:px-12 xl:px-24 lg:min-h-screen">
      <div className="w-full max-w-sm flex flex-col items-center gap-6 text-center py-20">

        <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20
          flex items-center justify-center">
          <CheckCircle size={36} className="text-accent" />
        </div>

        <div className="space-y-2">
          <h3 className="text-text text-2xl font-bold">Message Sent!</h3>
          <p className="text-muted text-sm leading-relaxed">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-2 bg-surface border border-border/60
            hover:border-accent/40 text-text text-sm font-semibold
            px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
        >
          Send Another Message
        </button>

      </div>
    </div>
  )
}