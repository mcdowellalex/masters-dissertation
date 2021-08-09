import * as React from "react"

import { LineChart, Label, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



const CustomCharts = (props) => {


    //temperature
    var tempData=[]
    props.data.map((row) =>{
        tempData.push({datetimeRecorded: row.datetimeRecorded, tempDifference: Math.round((row.leafTemp - row.ambientTemp)*100) / 100})
    })

  
    const data = props.data;

    return(
        <div style={{width:'100%'}}>
            <div style={{fontSize:24, display:'flex', justifyContent:'center', marginBottom:20}}>Soil Moisture Over Time</div>
            <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 30}}>
                <Line type="monotone" dataKey="soilMoisture" stroke="#8884d8" dot={false}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false}/>
                <XAxis dataKey="datetimeRecorded" hide={true}/>
                    
                <YAxis label={{value:'Soil Moisture', angle:-90, position:'insideLeft'}} />
                <Tooltip />
            </LineChart>

            <br /><br />

            <div style={{fontSize:24, display:'flex', justifyContent:'center', marginBottom:20}}>Leaf and Ambient Temp Over Time</div>
            <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 30}}>
                <Line type="monotone" dataKey="ambientTemp" stroke="#8884d8" dot={false}/>
                <Line type="monotone" dataKey="leafTemp" stroke="#eb9234" dot={false}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false}/>
                <XAxis dataKey='datetimeRecorded' hide={true} />
                <YAxis label={{value:'Temp (degrees celsius)', angle:-90, position:'insideLeft'}} />
                <Tooltip />
            </LineChart>  

            <br /><br />

            <div style={{fontSize:24, display:'flex', justifyContent:'center', marginBottom:20}}>Temp Difference Over Time</div>
            <LineChart width={800} height={400} data={tempData} margin={{ top: 5, right: 30, bottom: 5, left: 30}}>
                <Line type="monotone" dataKey="ambientTemp" stroke="#8884d8" dot={false}/>
                <Line type="monotone" dataKey="tempDifference" stroke="#eb9234" dot={false}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false}/>
                <XAxis dataKey='datetimeRecorded' hide={true} />
                <YAxis label={{value:'Temp (degrees celsius)', angle:-90, position:'insideLeft'}} domain={[-6, 6]} /> 
                <Tooltip />
            </LineChart>  
        </div>
    )
}

export default CustomCharts;

