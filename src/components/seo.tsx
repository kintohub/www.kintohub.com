/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import sharingImage from "resources/logo/share.png"

type SeoProps = {
  description?: string
  lang?: string
  meta: HTMLMetaElement[]
  keywords: string[]
  title?: string
}

function SEO({ description, lang, meta, keywords, title }: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const getTitle = () => {
    if (!title) {
      return `${site.siteMetadata.title}`
    } else {
      return `${title} | ${site.siteMetadata.title}`
    }
  }
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${getTitle()}`}
      titleTemplate={`%s`}
      script={[
        {
          src: "https://unpkg.com/@segment/tracktor",
          "data-workspace-id": "K98tn8ZQgd",
          "data-source-id": "5vHz1DUJTq",
          type: "text/javascript",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${sharingImage}`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${sharingImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@kintohub`,
        },
        {
          name: `twitter:image:alt`,
          content:
            "kintohub logo and microservice blocks floating in the background on a purple backdrop",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
