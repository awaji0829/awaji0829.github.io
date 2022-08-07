import * as React from "react"
import { Link } from "gatsby"
import { Toggle } from "../components/Toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Toggle />{" "}
      <header
        className="global-header"
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--point)",
          // transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        {header}
      </header>
      <main>{children}</main>
      <footer
        style={{
          color: "var(--textNormal)",
          // transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
