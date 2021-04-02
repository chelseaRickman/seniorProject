<p align="center">
  <a href="https://docs.google.com/document/d/1ih4oQpB2ydHlKVY1ZZvDiKjfhwjphPMkExPCE9TqLjA/edit?usp=sharing">
    <img alt="Gatsby" src="https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" width="200" />
  </a>
</p>
<h1 align="center">
  Photography Website
</h1>

- [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/?)
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins/)
- [npm packages](https://www.npmjs.com/)
- [npm Docs](https://docs.npmjs.com/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Components](https://tailwindcomponents.com/)
- [Tailwind Blocks](https://tailblocks.cc/)
- [Free Images](https://unsplash.com/)
- [Color Generator](https://tailwind.ink/)
- [Tailwind CSS Resources](https://dev.to/tracycss/tailwind-css-resources-you-wish-you-had-3i18)

## Website Details

<details>
  <summary>Click to expand!</summary>
  <br>

### Layout

- Styling
  - Inline
  - Global CSS
  - Styled Components
  - Framework - Tailwind/Bootstrap
- Data
  - Local
  - JSON
  - Markdown
  - Remote
- Headless CMS
  - Strapi
  - Sanity
  - Contentful
  - Cloudinary
- Hosting
  - Netlify
  - Heroku
  - Azure
  - AWS

### Service Limits

[Netlify](https://www.netlify.com/pricing/)

| Metric                           | Limit                |
| -------------------------------- | -------------------- |
| Bandwidth                        | 100GB /month         |
| Build minutes                    | 300 minutes /month   |
| Serverless Functions Invocations | 125k per site /month |
| Forms Submissions                | 100 per site /month  |
| Forms Submissions                | 100 per site /month  |
| Large Media Transformations      | 2.5k per site /month |

[Contentful](https://www.contentful.com/developers/docs/technical-limits/#community-tier)

| Metric                                                                                  | Tier limit | Unit of measure                                                  |
| --------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| Content Delivery API (CDA) calls (includes GraphQL calls)                               | 55         | Calls per second                                                 |
| Content Management API (CMA) calls                                                      | 7          | Calls per second                                                 |
| Content Preview API (CPA) calls                                                         | 14         | Calls per second                                                 |
| Content types                                                                           | 48         | Number per space                                                 |
| Content type fields                                                                     | 50         | Number of fields per content type                                |
| Environments                                                                            | 3          | Number per space                                                 |
| Environment creation                                                                    | 12         | Number per 5 minutes                                             |
| Users                                                                                   | 5          | Number per organization                                          |
| Roles                                                                                   | 2          | Number per space                                                 |
| Spaces                                                                                  | 1          | Total number                                                     |
| Records                                                                                 | 25000      | Number per space                                                 |
| API keys                                                                                | 100        | Number per organization                                          |
| Webhooks                                                                                | 20         | Number per space                                                 |
| Locales                                                                                 | 2          | Number per space                                                 |
| Request size                                                                            | 1          | MB                                                               |
| GraphQL request size                                                                    | 8          | KB                                                               |
| Response size                                                                           | 7          | MB                                                               |
| URI request length                                                                      | 7600       | characters                                                       |
| Image size                                                                              | 20         | MB per image                                                     |
| Image size (pixels), for animated GIFs total pixels = width x height x number of frames | 300        | Megapixels                                                       |
| Asset or image filename length                                                          | 256        | Characters with extension                                        |
| Asset size, including images larger than the image size limit                           | 50         | MB per asset                                                     |
| Long text field                                                                         | 50000      | Characters per field                                             |
| Short text field                                                                        | 255        | Characters per field                                             |
| Short text, list field                                                                  | 1000       | Items per field                                                  |
| Rich Text field                                                                         | 200000     | Characters per field (field size cannot exceed a payload of 1MB) |
| References, many field                                                                  | 1000       | Linked entries per field                                         |
| Scheduled actions                                                                       | 500        | Number per space                                                 |
| Scheduled actions, scheduleded time                                                     | 200        | Number of scheduled to be executed at, per minute                |
| App Definitions                                                                         | 10         | Number per organization                                          |
| App Installations                                                                       | 10         | Number per environment                                           |

</details>

---

## SRS Document

<details>
  <summary>Click to expand!</summary>
  <br>

### User: Photographer

#### What needs to be addressed?

- The photographer needs a website that does the following:
  - Displays their portfolio, contact info, biography, blog posts
  - Provides the ability for customers to schedule photo sessions
  - Allows the photographer to schedule photo sessions and view sessions already scheduled
  - Provides a way for customers to contact the photographer and vice versa
  - Allows the photographer to update the content of their website (i.e. upload new photos or blog posts)
  - Allows the photographer to upload customer photos, so that customers can access their photos
- Input/processing/output
  - Input:
    - The content the photographer updates such as uploading new photos, new blog posts, new contact information, new biography information
    - The customer’s account credentials when creating or logging into an account in order to access their photos
    - The date and time customers select when reserving a photo session
  - Processing:
    - Uploading/downloading of images
    - Creating a user account, adding information to a database
    - Reserving a photo session, ensuring date/time is available
  - Output:
    - A website that displays photos, text (contact information, about information, blog posts), photo session calendar

</details>

---

## Gatsby Details

<details>
  <summary>Click to expand!</summary>
  <br>

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

</details>

---

### Tutorials

<details>
  <summary>Click to expand!</summary>
  <br>

- [Example](www.google.com) Link Description

### Research

- ### User Authentication
  - [Example](www.google.com) Link Description
  - [Strapi Authentication](https://strapi.gitee.io/documentation/3.0.0-alpha.x/guides/authentication.html#token-usage) Strapi CMS includes authentication
- ### Photo Storage/Upload
  - [Example](www.google.com) Link Description
  - [Strapi CMS](https://strapi.io/) A headless CMS using Node.js that is super simple to set up and would handle all the uploading/editing of photos for us and the photographer
- ### Blog Posts
  - [Example](www.google.com) Link Description
  - [Strapi CMS](https://strapi.io/) A headless CMS using Node.js that is super simple to set up and would handle all the uploading/editing of blogposts for us and the photographer
- ### Email for forms
  - [Example](www.google.com) Link Description
- ### Database
  - [Example](www.google.com) Link Description
  - [Azure SQL Database](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal) Article on how to set up a database within Azure

</details>

---

### Learning Links

<details>
  <summary>Click to expand!</summary>
  <br>

- [MDM Web Docs](https://developer.mozilla.org/en-US/docs/Web) Mozzilla web developement resource page
- [The Odin Project](https://www.theodinproject.com/home) Full stack curriculum
- [Full Stack Web Development](https://github.com/bmorelli25/Become-A-Full-Stack-Web-Developer)100+ Free resources for learning Full Stack Web Development
- [Developer Roadmaps](https://roadmap.sh/) Step by step guides and paths to learn different tools or technologies
- [OSSU](https://github.com/ossu/computer-science) Open Source Society University curriculum is a complete education in computer science using online materials.
- [Teach Yourself Computer Science](https://teachyourselfcs.com/) Which subjects should you learn, and why? What is the best book or video lecture series for each subject?
- [CS Course Links](https://github.com/Developer-Y/cs-video-courses) Links to CS courses in numerous topics
- [freeCodeCamp](https://www.freecodecamp.org/) Many coding tutorials
- [Reference Sheets/Books](https://books.goalkicker.com/) Programming Notes for Professionals
- [Project Based Learning](https://github.com/tuvtran/project-based-learning) A list of programming tutorials in which learners build an application from scratch.
- [Build Your Own](https://github.com/danistefanovic/build-your-own-x) A list of programming tutorials focused on projects

---

### Front End / Back End

- [Front/Back End](https://en.wikipedia.org/wiki/Front_end_and_back_end) Wiki web development layer info
- [Web Frameworks](https://en.wikipedia.org/wiki/Comparison_of_web_frameworks) This is a comparison of notable web frameworks, software used to build and deploy web applications.
- [.NET Core/Azure](https://azure.microsoft.com/en-us/free/students/starter/) Looks like we can deploy our web app using .NET core and Azure for free as students. This would cover the backend side of things.

---

### Tools Links

- [Developer tools](https://extendsclass.com/) Tools directly usable in a browser. Syntax validators, code formatters, testers, HTTP clients, mock server, but also a SQLite browser.
- [HTML-CSS-JS](https://html-css-js.com/) Online HTML, CSS and JS editor with instant preview.
- [.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-5.0&tabs=visual-studio) Tutorial for creating a .NET Core MVC app which creates a template to build to develop our front-end and back-end
- [WEB2PY](http://www.web2py.com/books/default/chapter/29/03/overview) A Python framework that includes frontend, backend, a free virtual server, and a SQLite database

</details>
