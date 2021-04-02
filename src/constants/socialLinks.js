import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare class="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagramSquare class="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaTwitterSquare class="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
]

export default ({ styleClass }) => {
  return (
    <ul class={`social-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <a href={link.url} class="social-link">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
