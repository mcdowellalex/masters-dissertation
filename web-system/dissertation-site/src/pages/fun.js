import * as React from "react"
import {useState, useEffect} from 'react'
import axios from 'axios'

import Layout from "../components/layout"
import Seo from "../components/seo"



//components
import CustomTabs from '../components/customTabs';


// ---------------- the actual page ---------------

const FunPage = () => {
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
  
    
      <h1>Control Group</h1>
      <br />
      <h2>Plant 1</h2>
      <br />
      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant1.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>


      <br />
      <h2>Plant 2</h2>
      <br />
      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant2.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>

      <br />
      <h1>Salt Group</h1>
      <br />
      <h2>Plant 3</h2>
      <br />
      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant3.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>


      <br />
      <h2>Plant 4</h2>
      <br />
      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant4.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>

      <br />
      <h1>Physical Group</h1>
      <br />
      <h2>Plant 5</h2>
      <br />

      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant5.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>


      <br />
      <h2>Plant 6</h2>
      <br />
      <div style={{display:'flex', flexWrap:'wrap'}}>

        {plant6.map((row) => (
            <div>
              <div 
                  style={{width:'20px', height:'20px', marginLeft:'2px', marginBottom:'2px',
                  background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
              />
            </div> 
        ))}
      </div>

    <br />

    
  </Layout>
)}

export default FunPage
