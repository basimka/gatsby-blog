import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout  pageTitle="Обо мне">
            <table>
                <tr>
                    <th><p><b>Telegram:</b></p></th>
                    <th><Link to="https://t.me/bobkovtech">t.me/bobkovtech</Link></th>
                </tr>
                <tr>
                    <th><b><p>Sait:</p></b></th>
                    <th><Link to="https://bobkov.tech">https://bobkov.tech</Link></th> 
                </tr>
                <tr>
                    <th><b><p>Youtube:</p></b></th>
                    <th><Link to="https://www.youtube.com/channel/UCpPmKg6Wdjl747M8HtcfRUQ">Dark Daiver channel</Link></th> 
                </tr>
            </table>

            
            <YandexMetric />
        </Layout>
    )
  }

  export const Head = () => <Seo title="About" />

  export default AboutPage

