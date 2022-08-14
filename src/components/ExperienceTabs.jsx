import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './css/Experiences.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'black', color: 'white', display: 'flex', height: 220 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="white"
        TabIndicatorProps={{
          style: {
            backgroundColor: "black"
          }
        }}
        MuiTab-root={{
          style: {
            color: "white"
          }
        }}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="job-lists">
          <div className ="job-title">
            Research Assistant <span className = "title-colored">@ Reliable Autonomy Group UIUC</span>
          </div>
          <div className ="professor">
            Advised by Professor Sayan Mitra, Electrical & Computer Engineering @ UIUC
          </div>
          <div className = "job-date">
            May 2022 - Present
          </div>
          <div className='project-name'>
            DryVR++ Lane Map Generator (May 2022 - August 2022)
          </div>
          <ul class='job-description'>
            <li className='elem'>
              Created parsing function to read road geometry from ASAM Opendrive files.
            </li>
            <li className='elem'>
              Plotted road geometry for data visualization.
            </li>
            <li className='elem'>
              Generated lanes for autonomous driving simulators.
            </li>

          </ul> 
        </div>
      </TabPanel>
      
    </Box>
  );
}