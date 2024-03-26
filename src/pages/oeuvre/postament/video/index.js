import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../../components/layout"
import Seo from "../../../../components/seo"

const PostamentPage = () => (
  <Layout pageTitle="Postament Video">
    <p>Video1</p>
    <p><Link to="/oeuvre/postament"><br></br>Вернуться обратно</Link></p>
  </Layout>
)

export const Head = () => <Seo title="Postament" />

export default PostamentPage