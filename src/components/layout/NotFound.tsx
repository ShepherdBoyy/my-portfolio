import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-8xl font-extrabold text-accent">404</h1>
      <p className="text-text text-xl font-bold">Page Not Found</p>
      <p className="text-muted text-sm text-center">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-text text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to Home
      </button>
    </div>
  )
}