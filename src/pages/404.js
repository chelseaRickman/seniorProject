import React from "react"
import Layout from "../components/Layout"
import dragonIllustration from "../assets/dragon-illustration.svg"

const Error = () => {
  return (
    <Layout>
      <div className="text-center">
        <img
          alt="Dragon breathing fire on castle"
          className="block mx-auto"
          src={dragonIllustration}
        />
        <h2 className="text-2xl font-bold inline-block">
          We can't find the page you are looking for...
        </h2>
      </div>
    </Layout>
  )
}

export default Error
