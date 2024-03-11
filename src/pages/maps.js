import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const MapsPage = () => (
  <Layout>
    <h1>Hi from the Maps Page</h1>
    <p>Здесь будут Карты, возможно, когда нибудь.</p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Maps Page" />

export default MapsPage
