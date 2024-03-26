import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const OeuvrePage = () => (
  <Layout pageTitle='Творчество'>
    <Link to="/oeuvre/postament">Postament</Link>
    <p></p>
    <Link to="/oeuvre/poni">Poni</Link>
    
    <p>Стихи</p>
    <p>Прочее</p>
    <Link to="/">Вернуться назад</Link>
  </Layout>
)

export const Head = () => <Seo title="Oeuvre" />

export default OeuvrePage
