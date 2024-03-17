import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { Script } from 'gatsby'
import Helmet from "react-helmet"


const IndexPage = ()=> {
  return (
      <Layout pageTitle="Главная">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
           alt="Catty"
           src="https://koshka.top/uploads/posts/2021-11/1636355962_1-koshka-top-p-kotik-khitrii-1.jpg" 
        />
        <table>
                <tr>
                    <th><h2>Полезные ссылки:</h2></th>
                    <th></th>
                </tr>
                <tr>
                    <th><Link to="https://teremok-kupony.ru/moskva/">Купоны теремок</Link></th>
                    <th></th>
                </tr>
            </table>
            <Helmet>
              
            </Helmet>

      </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {theme: {eq: "blog"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="Home Page" />

export default IndexPage