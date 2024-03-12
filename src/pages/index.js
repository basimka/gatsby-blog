import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = ()=> {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
           alt="Catty"
           src="https://koshka.top/uploads/posts/2021-11/1636355962_1-koshka-top-p-kotik-khitrii-1.jpg" 
        />
        <table>
                <tr>
                    <th><h1>Полезные ссылки:</h1></th>
                    <th></th>
                </tr>
                <tr>
                    <th><Link to="https://teremok-kupony.ru/moskva/">Купоны теремок</Link></th>
                    <th></th>
                </tr>
            </table>
      </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage