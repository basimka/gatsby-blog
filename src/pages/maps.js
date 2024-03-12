import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MapsPage = () => (
  <Layout pageTitle="Карты">
    <h1>Hi from the Maps Page</h1>
    <p>Здесь будут Карты, возможно, когда нибудь. Но мы обязательно попробуем и у нас все получится</p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Maps Page" />

export default MapsPage
