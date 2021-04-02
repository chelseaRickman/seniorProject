import React from "react"
import { Link } from "gatsby"

const BlogTile = ({image, title, date, postslug, ...props}) => {
    return (
      <Link to="../contact">
        <div className="flex flex-col m-2 main-paragraph-font font-bold">
          <div className="p-4 bg-green-200 bg-opacity-50 text-center">
            <h3>
              {title}
            </h3>
          </div>
            <img
              src={image}
              alt={title}
            />
            <div className="p-4 bg-green-200 bg-opacity-50 text-center">
            <h3>
              {date}
            </h3>
          </div>
        </div>
      </Link>
    )
}

export default BlogTile
