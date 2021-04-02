import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <section>
        <div className="flex md:flex-row flex-col content-center">
          <img
            className="mr-16 object-scale-down"
            src="http://picsum.photos/400/500"
            alt="Sample Contact Photo"
          />
          <div className="p-16 ml-8 bg-green-200 bg-opacity-50">
            <h1 className="main-title-font mb-8 text-center">Contact Me</h1>
            <form className="p-4 main-paragraph-font font-bold">
              <div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <label className="mb-1">First Name</label>
                    <input type="text" className="border-2" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1">Last Name</label>
                    <input type="text" className="border-2" />
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">Email Address</label>
                  <input type="text" className="border-2" />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1">Message</label>
                  <textarea
                    className="h-32 border-2 resize-none"
                    resize="none"
                  ></textarea>
                </div>
              </div>
              <button className="main-paragraph-font p-4 mt-4 bg-green-400 hover:bg-blue-600 hover:bg-opacity-50 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
