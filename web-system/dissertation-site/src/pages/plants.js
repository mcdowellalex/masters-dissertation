import * as React from "react"
import {useState, useEffect} from 'react'
import axios from 'axios'

import Layout from "../components/layout"
import Seo from "../components/seo"



//components
import CustomTabs from '../components/customTabs';


// ---------------- the actual page ---------------

const PlantsPage = () => {
  const [plant1, setPlant1] = useState([]);
  const [plant2, setPlant2] = useState([]);
  const [plant3, setPlant3] = useState([]);
  const [plant4, setPlant4] = useState([]);
  const [plant5, setPlant5] = useState([]);
  const [plant6, setPlant6] = useState([]);


  //get all the plants time since last reading
  useEffect(()=> {
    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/1')
      .then(response => {
        setPlant1(response.data)
        console.log(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/2')
      .then(response => {
        setPlant2(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/3')
      .then(response => {
        setPlant3(response.data)
      }) 
      .catch(error => console.log(error))
    
    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/4')
      .then(response => {
        setPlant4(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/5')
      .then(response => {
        setPlant5(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/6')
      .then(response => {
        setPlant6(response.data)
      }) 
      .catch(error => console.log(error))


  }, [])
  return (
  <Layout>
    <Seo title="Plants" />
  
    <CustomTabs 
      plant1Data={plant1} 
      plant2Data={plant2} 
      plant3Data={plant3} 
      plant4Data={plant4} 
      plant5Data={plant5} 
      plant6Data={plant6}
    />

    <br />

    
  </Layout>
)}

export default PlantsPage
