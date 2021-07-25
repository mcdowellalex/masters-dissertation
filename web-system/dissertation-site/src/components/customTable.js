import * as React from "react"
//ui Table stuff
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//utilities
import {formatDate} from '../utilities/formatDate';


const CustomTable = (props) => {

    return(
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
            <TableHead>
                <TableRow >
                    <TableCell style={{paddingLeft:'6px', fontSize:'22px'}}>Datetime Recorded</TableCell>
                    <TableCell style={{fontSize:'22px'}} align="right">Leaf Temp</TableCell>
                    <TableCell style={{fontSize:'22px'}} align="right">Ambient Temp</TableCell>
                    <TableCell style={{fontSize:'22px'}} align="right">Temp Difference</TableCell>
                    <TableCell style={{fontSize:'22px'}} align="right">Soil Moisture</TableCell>
                    <TableCell style={{fontSize:'22px'}} align="right">RGB</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((row) => (
                <TableRow key={row.datetimeRecorded}>
                    <TableCell component="th" scope="row" style={{paddingLeft:'6px'}}>
                    {formatDate(row.datetimeRecorded)}
                    </TableCell>
                    <TableCell align="right">{row.leafTemp}</TableCell>
                    <TableCell align="right">{row.ambientTemp}</TableCell>
                    <TableCell align="right">{Math.round((row.leafTemp - row.ambientTemp)*100) / 100}</TableCell>
                    <TableCell align="right">{row.soilMoisture}</TableCell>
                    <TableCell align="right">
                    <div 
                        style={{width:'20px', height:'20px', 
                        background:`rgb(${row.redStrength},0${row.greenStrength},${row.blueStrength}`}}
                    />
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable;