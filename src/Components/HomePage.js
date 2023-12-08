import { Box, Divider, Typography } from '@mui/material'
import { blue, orange } from '@mui/material/colors'
import React from 'react'
import AboutPage from './AboutPage'
import ExperiencePage from './ExperiencePage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
// import AboutPage from './AboutPage'
// import { blue } from '@mui/material/colors'
// import ExperiencePage from './ExperiencePage'
// import ProjectPage from './ProjectPage'
// import ContactPage from './ContactPage'
// import NavBar from './NavBar'

function HomePage() {
    return (
        <div>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', // Align text to the left
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 5, // Adjust padding as needed
                    backgroundColor: '#DEBA9D',
                    color: 'white',
                    height: '100vh',
                }}
            >
                <Box textAlign={"left"}>
                    <Typography
                      pl={5}
                      variant="h4"
                      component="h4"
                      style={{
                          color: "white", // Text color white
                          fontSize: "30px",
                          fontWeight: "bold",
                      }}
                    >
                        Hello, I'm
                    </Typography>
                    <Typography
                       
                        pl={4}
                        variant="h2"
                        component="h2"
                        style={{
                            color: "white", // Text color white
                            fontSize: "100px",
                            fontWeight: "bold",
                        }}
                    >
                        KRUNAL
                    </Typography>
                    <Typography py={5}
                        pl={4}
                        variant="h2"
                        component="h2"
                        style={{
                            color: orange[900], // Text color white
                            fontSize: "100px",
                           
                        }}>
                        I Make Websites
                    </Typography>
                </Box>
            </Box>



            <section id="about">
                {/* <Box sx={{ backgroundColor:blue[400], height: '100vh' }}>
                    <img
                        src='https://editorial01.shutterstock.com/preview-440/13945710vt/5316f9ff/Shutterstock_13945710vt.jpg'
                        alt='hello'
                        style={{

                        }}
                    />
                </Box> */}
                <AboutPage />
            </section>
            <section id="experience">
                <ExperiencePage />
            </section>
            <section id="project">
                <ProjectPage />
            </section>
            <section id="contact">
                <ContactPage />
            </section>


        </div>
    )
}

export default HomePage