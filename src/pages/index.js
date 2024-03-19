import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql} from 'gatsby'




const IndexPage = ()=> {
  return (
      
      <Layout pageTitle="Главная">
        <p>Верстаю по тихоньку блог</p>
        <StaticImage
           alt="Catty"
           src="https://koshka.top/uploads/posts/2021-11/1636355962_1-koshka-top-p-kotik-khitrii-1.jpg" 
        />
        <div>
            <h2>Полезные ссылки:</h2>
            <a href='https://teremok-kupony.ru/moskva/'>Купоны теремок</a>
        </div>
       
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