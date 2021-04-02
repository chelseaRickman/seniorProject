import React from "react"

const Contact = () => {
    return (
        <div className="mt-16 flex md:flex-row flex-col flex-wrap bg-green-200 bg-opacity-50">
          <img
            className="p-4 mr-8 object-scale-down"
            src="http://picsum.photos/300"
            alt="Photographer with camera"
          />
          <div>
            <p className="main-paragraph-font font-bold text-2xl mt-32 mb-8">
              Look forward to hearing from you!
            </p>
            <a href="../contact"
              className="main-paragraph-font p-4 bg-green-400 hover:bg-blue-600 hover:bg-opacity-50 rounded"
            >
              CONTACT ME
            </a>
          </div>
      </div>
    )
}

export default Contact
