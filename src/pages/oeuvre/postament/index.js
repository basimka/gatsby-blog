import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const PostamentPage = () => (
  <Layout>
    <h1>Песни группы Postament</h1>
    <h1>Видео</h1>
    <Link to="/oeuvre">Go back to the Oeuvrepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Postament" />

export default PostamentPage
