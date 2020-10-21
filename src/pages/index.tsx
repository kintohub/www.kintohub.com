import Footer from "../components/Footer"
import Header from "../components/NavBar"
import Hero from "../components/Hero"
import CallToAction from "../components/Calltoaction"
import SEO from "../components/seo"
import Testimonial from "../components/Testimonial"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/Layout"

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="KintoHub - The best way to deploy fullstack apps"
          keywords={[
            `kintohub`,
            `micro-services`,
            `backend`,
            `api`,
            `deployment`,
            `vercel`,
            `render`,
            `heroku`,
          ]}
        />
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[
            {
              name: "KintoHub",
              content: "Sample page",
            },
          ]}
          title={"Kintohub"}
        />
        <Header />
        <Hero />
        <Testimonial />
        <CallToAction />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
