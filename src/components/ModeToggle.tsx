"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-light dark:text-dark mr-3 -ml-3">
      {theme === "light" ? <Moon size={20} className="hover:bg-zinc-100 p-1.5 h-8 w-8 rounded-md transition-colors"/> : <Sun size={20} className="hover:bg-zinc-900 p-1.5 h-8 w-8 rounded-md transition-colors"/>}
    </button>
  )
}
