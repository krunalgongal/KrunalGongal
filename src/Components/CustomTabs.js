import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

export default function CustomTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* Left side (Tabs) */}
            <Box sx={{ width: '200px', flexShrink: 0 }}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="vertical tabs example"
                >
                    <Tab label="Project 1" {...a11yProps(0)} />
                    <Tab label="Project 2" {...a11yProps(1)} />
                    <Tab label="Project 3" {...a11yProps(2)} />
                </Tabs>
            </Box>

            {/* Right side (Console Panel) */}
            <Box sx={{ flex: 1, overflow: 'auto' }}>
                <CustomTabPanel value={value} index={0}>
                    <Typography sx={{ fontWeight: 'bold', paddingBottom: 3 }}>
                        Storytelling App for Child Using NaturalLanguage Processing (NLP)
                    </Typography>
                    <Typography variant='body1'>
                        The last few years have seen a number of computational
                        works dealing with the translation of sign languages from and
                        into their spoken languages. Some of the most recent studies
                        concentrate on understanding sign languages, while others
                        translate text or voice into sign languages. Some works aim at
                        recognizing words, others only letters. Two-sided translation
                        is performed using the Microsoft Asia group system and the
                        Virtual Sign Translator. There is no English to Indian Sign
                        Language (ISL) translation available for Huawei Story Sign
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography sx={{ fontWeight: 'bold', paddingBottom: 3 }}>
                        Storytelling App for Child Using NaturalLanguage Processing (NLP)
                    </Typography>
                    <Typography variant='body1'>
                        The last few years have seen a number of computational
                        works dealing with the translation of sign languages from and
                        into their spoken languages. Some of the most recent studies
                        concentrate on understanding sign languages, while others
                        translate text or voice into sign languages. Some works aim at
                        recognizing words, others only letters. Two-sided translation
                        is performed using the Microsoft Asia group system and the
                        Virtual Sign Translator. There is no English to Indian Sign
                        Language (ISL) translation available for Huawei Story Sign
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography sx={{ fontWeight: 'bold', paddingBottom: 3 }} color={'white'}>
                        Storytelling App for Child Using NaturalLanguage Processing (NLP)
                    </Typography>
                    <Typography variant='body1' color={'white'}>
                        The last few years have seen a number of computational
                        works dealing with the translation of sign languages from and
                        into their spoken languages. Some of the most recent studies
                        concentrate on understanding sign languages, while others
                        translate text or voice into sign languages. Some works aim at
                        recognizing words, others only letters. Two-sided translation
                        is performed using the Microsoft Asia group system and the
                        Virtual Sign Translator. There is no English to Indian Sign
                        Language (ISL) translation available for Huawei Story Sign
                    </Typography>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
