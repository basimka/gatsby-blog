import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const OeuvrePage = () => (
  <Layout pageTitle='Творчество'>
    <Link to="/oeuvre/postament">Postament</Link>
    <p></p>
    <Link to="/oeuvre/poni">Poni</Link>
    <p></p>
    <Link to="/oeuvre/poetry">Стихи и Проза</Link>
    <p></p>
    <Link to="/oeuvre/other">Прочее</Link>
    <p></p>
    <Link to="/"><br></br>Вернуться назад</Link>
  </Layout>
)

export const Head = () => <Seo title="Oeuvre" />

export default OeuvrePage
