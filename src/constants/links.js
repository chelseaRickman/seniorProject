import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "gallery",
    url: "/gallery/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

export default ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      {data.map(link => (
        <li key={link.id}>
          <Link className="text-xl" to={link.url}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

// const tempLinks = data.map(link => {
//   return (
//     <li key={link.id}>
//       <Link to={link.url}>{link.text}</Link>
//     </li>
//   )
// })
// // I KNOW WE CAN COMBINE IT !!!!!

// export default ({ styleClass }) => {
//   return <ul className={`page-links ${styleClass ? styleClass : ""}`}>
//   {tempLinks}
// </ul>
// }
