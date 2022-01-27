import React from 'react';
import { Box, Tab, Tabs, ThemeProvider, Typography } from '@material-ui/core';
import theme from '../../temaConfig';
import PropTypes from 'prop-types';
import './Styles/MuiTab.css'
import Home from '../Pages/Home'

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='TabStyle'>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
                            <Tab label="Clima hoy" {...a11yProps(0)} />
                            <Tab label="Reportes" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                       <Home/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Reportes
                    </TabPanel>
                </Box>
            </ThemeProvider>
        </div>




    );
}



// const MuiTab =() => (
//     <ThemeProvider theme={theme}>
//         <Box sx={{width: '100%'}}>
//             <Box sx={{ borderBottom:1, borderColor: 'divider' }}>
//                 <Tabs value = {value} onChange={handleChange}>

//                 </Tabs>
//             </Box>
//         </Box>

//     </ThemeProvider>

// );

// export default MuiTab;