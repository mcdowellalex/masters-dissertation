import * as React from "react"

//accordian imports
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//components
import CustomTable from '../components/customTable';
import CustomCharts from '../components/customCharts'

const CustomAccordian = (props) => {


    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Graph views
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CustomCharts data={props.data} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    Table View
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <CustomTable data={props.data} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CustomAccordian;

