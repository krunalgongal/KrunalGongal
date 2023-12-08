import { Box, Paper, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { amber, blue, orange } from '@mui/material/colors'
import React from 'react'

function AboutPage() {
    const skills = ['React', 'Node', 'Express', 'Java', 'MongoDB']
    return (
        <div id='about'>
            <Box sx={{ backgroundColor: '#DEBA9D', height: '100vh', py: 15 }}>
                <Typography variant="h4"
                    component="h4"
                    style={{
                        fontSize: "30px",
                        paddingBottom: 15
                    }}
                    align='center'
                >
                    About
                </Typography>

                <Grid2 container justifyContent="center" alignItems="center">
                    <Grid2 item xs={8} container spacing={2} px={5} >
                        <Typography


                            variant="h4"
                            component="h4"
                            style={{
                                color: "white",
                                fontSize: "20px",
                                textAlign: 'center',
                                paddingBottom:'20px'
                            }}
                            justifyContent={'space-around'}
                        >
                            As a recent graduate with a passion for Java and Web developer, I have a strong foundation in Java programming, data structures, algorithms, and software design principles. I have experience working on Java-based projects, as well as with front-end technologies, databases, and version control tools. I am eager to learn and adapt to new technologies, and my problem-solving and critical thinking skills make me a valuable asset to any team. Let's connect to discuss how I can contribute as a Java developer.
                        </Typography>

                        {skills.map((skill, index) => (
                            <Grid2 item key={index} xs={6} md={3} lg={2}>
                                <Paper
                                    style={{
                                        padding: '10px',
                                        textAlign: 'center',
                                        flexGrow: 1, // Grow to fill available space
                                    }}
                                >
                                    <Typography variant="body2">{skill}</Typography>
                                </Paper>
                            </Grid2>
                        ))}

                    </Grid2>
                    <Grid2 xs={4}>
                        <img
                            src="https://media.licdn.com/dms/image/D4D03AQH1vhxKDMIIjw/profile-displayphoto-shrink_800_800/0/1667405576272?e=1706745600&v=beta&t=VquPIcvy1VqwtiZlXpmryUQmCVdXVw0DQ2RmkCwta7E"
                            alt="Profile"
                            style={{
                                width: '90%',
                                height: 'auto',
                                borderRadius: '50%',
                                paddingRight: 5

                            }}

                        />
                    </Grid2>
                </Grid2>

            </Box>
        </div>
    )
}

export default AboutPage