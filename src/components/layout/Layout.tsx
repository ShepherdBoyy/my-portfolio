import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div className="min-h-screen bg-charcoal">
        <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}
