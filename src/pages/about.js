import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout  pageTitle="About Me">
            <table>
                <tr>
                    <th><p><b>Telegram:</b></p></th>
                    <th><Link to="https://t.me/bobkovtech">t.me/bobkovtech</Link></th>
                </tr>
                <tr>
                    <th><b><p>Sait:</p></b></th>
                    <th><Link to="https://bobkov.tech">https://bobkov.tech</Link></th> 
                </tr>
            </table>

            
            
        </Layout>
    )
  }

  export const Head = () => <Seo title="About" />

  export default AboutPage

