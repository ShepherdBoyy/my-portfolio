import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import PageTransition from "./PageTransition"
import MainPage from "./MainPage"
import Show from "@/pages/Projects/Show"
import Index from "@/pages/Projects/Index"

export default function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route
                path="/"
                element={
                    <PageTransition>
                        <MainPage />
                    </PageTransition>
                }
            />

            <Route
                path="/projects"
                element={
                    <PageTransition>
                        <Index />
                    </PageTransition>
                }
            />

            <Route
                path="/projects/:slug"
                element={
                    <PageTransition>
                        <Show />
                    </PageTransition>
                }
            />
        </Routes>
    </AnimatePresence>
  )
}