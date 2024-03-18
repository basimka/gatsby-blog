import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'
const AboutPage = () => {
    return (
        <Layout  pageTitle="Обо мне">
            <div>
                <p><b>Telegram: </b><Link to="https://t.me/bobkovtech">t.me/bobkovtech</Link></p>
                <p><b>Sait: </b><Link to="https://bobkov.tech">https://bobkov.tech</Link></p>
                <p><b>Youtube: </b><Link to="https://www.youtube.com/channel/UCpPmKg6Wdjl747M8HtcfRUQ">Dark Daiver channel</Link></p>        
            </div>
            
           
        </Layout>
    )
  }

  export const Head = () => <Seo title="About" />

  export default AboutPage

