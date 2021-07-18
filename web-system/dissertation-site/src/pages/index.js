import * as React from "react"
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => {
  const [data, setData] = useState([]);
  
  

  return (
    <Layout>
      <Seo title="Home" />
      
      <p>
        
      </p> 

      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/upTimePage/">Go to page 2</Link> <br />
      </p>
    </Layout>
  )
}

export default IndexPage
