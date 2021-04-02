import React, { useState } from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { graphql, useStaticQuery, Link } from "gatsby"

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="bg-transparent">
      <div className="flex flex-wrap items-center">
        <Link to="/">
          <h1 className="flex items-center no-underline px-3 py-2">
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
        <div class="ml-auto">
          <button
            className="items-center block px-3 py-2 border border-white rounded md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <FaAlignRight></FaAlignRight>
          </button>
          <nav className="hidden md:block md:items-center w-full md:w-auto px-3 py-2">
            <PageLinks styleClass="navbar-links"></PageLinks>
          </nav>
        </div>
      </div>
    </header>

    // <nav className="flex flex-wrap items-center bg-transparent">
    //   <img src={logo} />
    //   <button class="md:hidden">
    //     <FaAlignRight></FaAlignRight>
    //   </button>
    //   <div>
    //     <div class="hidden md:block">
    //       <PageLinks styleClass="inline-flex"></PageLinks>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
