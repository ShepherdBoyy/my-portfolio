import { useNavigate } from "react-router-dom"

export default function Projects() {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => navigate("/projects")}
        className="cursor-pointer"
      >
        View All Projects
      </button>
    </div>
  )
}
