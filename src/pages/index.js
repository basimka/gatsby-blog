import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql} from 'gatsby'
import Helmet from "react-helmet"




const IndexPage = ()=> {
  return (
      
      <Layout pageTitle="Главная">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
           alt="Catty"
           src="https://koshka.top/uploads/posts/2021-11/1636355962_1-koshka-top-p-kotik-khitrii-1.jpg" 
        />
        <div>
            <h2>Полезные ссылки:</h2>
            <a href='https://teremok-kupony.ru/moskva/'>Купоны теремок</a>
        </div>
                
            
            
            <Helmet>
        <script
            dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
            ym(96759362, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            })
            `,
            }} 
            />
            <script
          dangerouslySetInnerHTML={{
            __html: `
              var name = 'Maximilian!!!';
              console.log('Hello ' + name);
            `,
          }}
        />
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