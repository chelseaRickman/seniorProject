import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import BlogTile from "../components/blogTile"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url"

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    getBlogPosts().then(setBlogPosts)
  }, [])

  return (
    <Layout>
      <div className="flex flex-col">
        <section className="flex flex-row">
          <div className="p-8 mb-16 bg-green-200 bg-opacity-50">
            <h1 className="main-title-font mb-8">Blog</h1>
            <h2 className="main-paragraph-font font-bold text-xl mb-6">
              Welcome to my blog page!
            </h2>
            <p className="main-paragraph-font mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis orci ac bibendum condimentum. Nullam consequat pulvinar
              efficitur. Nam auctor ipsum justo, quis posuere nulla viverra ac.
              Nam id felis accumsan, suscipit ex et, rutrum lacus.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(blogPost => (
            <BlogTile
              image={blogPost.imageSource}
              title={blogPost.title}
              date={blogPost.date}
              key={`${blogPost.title}-${blogPost.date}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

function getBlogPosts() {
  return sanityClient
    .fetch(
      `*[_type == 'blogpost'] | order(postdate) {
        title,
        postdate,
        "postslug": slug,
        "thumbnailImageUrl": thumbnailImage.asset->url
      }`
    )
    .then(data => data.map(convertApiDataToPost))
}

function convertApiDataToPost(blogPost) {
  const width = 300,
    height = 300
  const urlBuilder = imageUrlBuilder(sanityClient)
  let formattedImageUrl = urlBuilder
    .image(blogPost.thumbnailImageUrl)
    .width(width)
    .height(height)
    .url()

  return {
    imageSource: formattedImageUrl,
    title: blogPost.title,
    date: blogPost.postdate,
    postslug: blogPost.postslug
  }
}

export default Blog
