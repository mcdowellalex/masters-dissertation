import * as React from "react"
import {useState} from 'react'

//ui tabs
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//components
import CustomAccordian from '../components/CustomAccordian'
import CustomTable from '../components/customTable';
import CustomCharts from '../components/customCharts'

//local tab component
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


const CustomTabs = (props) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div style={{width:'960px'}}>
           <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Plant One"/>
                    <Tab label="Plant Two"/>
                    <Tab label="Plant Three"/>
                    <Tab label="Plant Four"/>
                    <Tab label="Plant Five"/>
                    <Tab label="Plant Six"/>
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
              <h3>Plant One - Control Group</h3>
              <CustomAccordian data={props.plant1Data} />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <h3>Plant Two - Control Group</h3>
              <CustomAccordian data={props.plant2Data} />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <h3>Plant Three - Salt Group</h3>
              <CustomAccordian data={props.plant3Data} />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <h3>Plant Four - Salt Group</h3>
              <CustomAccordian data={props.plant4Data} />
            </TabPanel>

            <TabPanel value={value} index={4}>
              <h3>Plant Five - Shaking/moving Group</h3>
              <CustomAccordian data={props.plant5Data} />
            </TabPanel>

            <TabPanel value={value} index={5}>
              <h3>Plant Six - Shaking/moving Group</h3>
              <CustomAccordian data={props.plant6Data} />
            </TabPanel>
        </div>
    )
}

export default CustomTabs;

