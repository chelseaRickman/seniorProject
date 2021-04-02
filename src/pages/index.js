import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Contact from "../components/Contact"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <Layout>
      <Hero />
      <section class="bg-black">
        <Services />
      </section>
      <Contact />
    </Layout>
  )
}
