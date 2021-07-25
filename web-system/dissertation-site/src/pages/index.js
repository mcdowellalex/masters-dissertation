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
      
      <h2>Analysis of human effects on individual plants</h2> 
      <br />

      <p>A quick look at the setup</p>
      <StaticImage
        src="../images/setup.jpg"
        width={800}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      
    </Layout>
  )
}

export default IndexPage
