import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"

const About = () => {
  return (
    <Layout>
      <section className="flex md:flex-row flex-col content-center">
        <div className="p-2 mr-8">
          <h1 className="main-title-font mb-8">About</h1>
          <h2 className="main-paragraph-font font-bold text-xl mb-6">
            Hello I'm Billy Bob Joe!
          </h2>
          <p className="main-paragraph-font mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis orci ac bibendum condimentum. Nullam consequat pulvinar
            efficitur. Nam auctor ipsum justo, quis posuere nulla viverra ac.
            Nam id felis accumsan, suscipit ex et, rutrum lacus. Donec vel
            tortor nibh. Curabitur ac laoreet lacus. Fusce commodo eu lorem a
            interdum. In ornare dolor nisi. Quisque sit amet nulla et metus
            dignissim hendrerit.
          </p>
          <p className="main-paragraph-font mb-4">
            Duis eget nisi in quam consectetur lobortis. Maecenas consequat,
            lacus vitae pharetra gravida, diam tellus dapibus nisi, eu viverra
            nulla dui quis nisl. Ut in volutpat tellus. Integer porttitor
            pharetra urna, sed pellentesque risus porta et. Donec eu quam
            mattis, laoreet purus sit amet, hendrerit arcu. Donec ac lectus sed
            leo sagittis facilisis. Sed vitae arcu eget lacus auctor consectetur
            sed nec urna. Phasellus efficitur, tortor nec cursus maximus, sem
            lorem dapibus tellus, vitae pulvinar orci massa at elit. Donec id
            vehicula metus. Fusce facilisis imperdiet ante egestas finibus.
            Curabitur et elit ac ligula ultricies porttitor aliquam eu turpis.
            Integer ullamcorper urna sodales interdum vestibulum. Proin
            vulputate est quis sollicitudin pretium. Suspendisse potenti. Etiam
            gravida pharetra arcu, ac dapibus libero condimentum eget.
          </p>
        </div>
        <img
          className="ml-8 object-scale-down"
          src="http://picsum.photos/300/500"
          alt="Portrait of Photographer"
        />
      </section>
      <Contact></Contact>
    </Layout>
  )
}

export default About
