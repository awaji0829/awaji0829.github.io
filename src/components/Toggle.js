import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          className="darkmodeBtn"
          onClick={e => toggleTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "WHITE" : "DARK"}
        </div>
      )}
    </ThemeToggler>
  )
}
