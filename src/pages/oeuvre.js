import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OeuvrePage = () => (
  <Layout>
    <h1>Hi from the Oeuvre Page</h1>
    <p>Welcome to page Oeuvre</p>
    <p>Postament</p>
    <p>P.O.N.I.</p>
    <p>Стихи</p>
    <p>Прочее</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Oeuvre" />

export default OeuvrePage
