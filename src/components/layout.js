/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Footer from "./footer"
import mq from "./media-queries"
import "normalize.css"
import "../style/breadcrumb.css"

const PageContainer = styled.div`
  display: grid;
  gap: 0.67rem;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto 1fr;
  background: #222831;
  color: #666;
`

const PageTitleWrapper = styled.div`
  background: #1f1f20;
  display: grid;
  padding: 0 0.67rem 0 0.67rem;
  ${mq.md} {
    padding: 0.67rem 2rem;
  }
`

const Title = styled.h1`
  margin: 0.67rem auto;
`

const TitleLink = styled.a`
  text-decoration: none;
`

const BreadcrumbWrapper = styled.div`
  margin: 0.67em 2em;
  ${mq.md} {
    margin: 0.67em auto;
  }
`

const MainWrapper = styled.div`
  margin: 0.67em 2em;
  display: grid;
  gap: 0.67rem;
  grid-template-columns: minmax(200px, 1200px);
  grid-template-rows: auto auto auto 1fr;
  justify-content: center;
  margin: 0 0.67em 0 0.67em;
`

const Layout = ({ children, crumbs, crumbLabel }) => {
  const {
    site: {
      siteMetadata: { title, description, author, keywords },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `)

  const disableLinks = ["/book"]

  return (
    <>
      <Global
        styles={css`
          body {
            color: #ececec;
          }
          a {
            color: #ececec;
          }
        `}
      />
      <Helmet
        title={title}
        defer={false}
        meta={[
          { name: "Books", content: "Books I have read" },
          { name: "good books", content: "good books" },
          { name: "description", content: description },
          { name: "author", content: author },
          { name: "keywords", content: keywords },
          { property: "og:type", content: "website" },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <PageContainer>
        <PageTitleWrapper>
          <Title>
            <TitleLink href="/">{title}</TitleLink>
          </Title>
        </PageTitleWrapper>
        <BreadcrumbWrapper>
          <Breadcrumb
            crumbs={crumbs}
            crumbLabel={crumbLabel}
            disableLinks={disableLinks}
          />
        </BreadcrumbWrapper>
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </PageContainer>
    </>
  )
}

Layout.defaultProps = {
  crumbLabel: "",
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape(),
      pathname: PropTypes.string.isRequired,
    })
  ).isRequired,
  crumbLabel: PropTypes.string,
}

export default Layout
