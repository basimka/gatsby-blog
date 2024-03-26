import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

const PostamentPage = () => (
  <Layout pageTitle="Postament">
    <p><Link to="/oeuvre/postament/songs">Песни группы Postament</Link></p>
    <p><Link to="/oeuvre/postament/video">Видео группы Postament</Link></p>
    <p><Link to="/oeuvre"><br></br>Вернуться обратно</Link></p>
    
    
    
    
  </Layout>
)

export const Head = () => <Seo title="Postament" />

export default PostamentPage