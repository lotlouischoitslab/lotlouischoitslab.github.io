import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
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
        <div className="education-lists">
          <div className ="university-title">
            University of Illinois at Urbana-Champaign <span className = "title-colored"></span>
          </div>
          <div className = "education-date">
            August 2020 - May 2024 (Expected)
          </div>
          <ul class='education-description'>
            <li className='elem'>
              Pursuing a B.S in Civil & Environmental Engineering (Specialization: Transportation Engineering)
            </li>
            <li className='elem'>
              Pursuing a Minor in Computer Science (Focus Area: Artificial Intelligence & Big Data)
            </li>

          </ul> 
        </div>
      </TabPanel>
      
    </Box>
  );
}