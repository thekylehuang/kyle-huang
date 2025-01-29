"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        className="sr-only peer"
      />
      <motion.div
        layout
        initial={false}
        className="w-16 h-7 bg-zinc-50 peer-checked:bg-neutral-950 rounded-full flex items-center px-1.5 transition-colors relative border border-neutral-950 dark:border-zinc-50"
      >
        <motion.div
          initial={false}
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute left-2"
        >
          <Sun size={18} className="text-neutral-950 dark:text-zinc-50" />
        </motion.div>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="w-5 h-5 bg-neutral-950 dark:bg-zinc-50 rounded-full"
          animate={{ x: isDark ? 32 : -2 }}
        />
        <motion.div
          initial={false} 
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute right-2"
        >
          <Moon size={18} className="text-neutral-950 dark:text-zinc-50" />
        </motion.div>
      </motion.div>
    </label>
  )
}
