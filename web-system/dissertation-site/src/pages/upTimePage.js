import * as React from "react"
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UpTimePage = () => {
  const [plant1, setPlant1] = useState([]);
  const [plant2, setPlant2] = useState([]);
  const [plant3, setPlant3] = useState([]);
  const [plant4, setPlant4] = useState([]);
  const [plant5, setPlant5] = useState([]);
  const [plant6, setPlant6] = useState([]);

  //get all the plants time since last reading
  useEffect(()=> {
    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/1')
      .then(response => {
        setPlant1(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/2')
      .then(response => {
        setPlant2(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/3')
      .then(response => {
        setPlant3(response.data)
      }) 
      .catch(error => console.log(error))
    
    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/4')
      .then(response => {
        setPlant4(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/5')
      .then(response => {
        setPlant5(response.data)
      }) 
      .catch(error => console.log(error))

    axios.get('https://mcdowell-dissertation-api.azurewebsites.net/api/Plant/mostRecent/6')
      .then(response => {
        setPlant6(response.data)
      }) 
      .catch(error => console.log(error))


  }, [])
  return (
  <Layout>
    <Seo title="Up Time" />
    
    <h1>Time since last reading from plant:</h1>
    <p>Plant 1: {Math.round(plant1)} min - {plant1>30 ? 'Down' : 'Up'}</p>
    <p>Plant 2: {Math.round(plant2)} min - {plant2>30 ? 'Down' : 'Up'}</p>
    <p>Plant 3: {Math.round(plant3)} min - {plant3>30 ? 'Down' : 'Up'}</p>
    <p>Plant 4: {Math.round(plant4)} min - {plant4>30 ? 'Down' : 'Up'}</p>
    <p>Plant 5: {Math.round(plant5)} min - {plant5>30 ? 'Down' : 'Up'}</p>
    <p>Plant 6: {Math.round(plant6)} min - {plant6>30 ? 'Down' : 'Up'}</p>
    
  </Layout>
)}

export default UpTimePage
