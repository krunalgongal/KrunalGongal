import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import CustomTabs from './CustomTabs'

function ExperiencePage() {
    return (
        <div id='experience'>
            <Box sx={{ backgroundColor: '#DEBA9D', height: '100vh', py: 15 }}>
                <Typography variant="h4"
                    component="h4"
                    style={{
                        fontSize: "30px",
                        paddingBottom: 15
                    }}
                    align='center'
                >
                    Experience
                </Typography>
                <CustomTabs/>
            </Box>
        </div>
    )
}

export default ExperiencePage