import React from 'react'
import styles from '../styles/IntroSection.module.css'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import { useInView } from "react-intersection-observer";
import {Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material'
import CaseStudy from "./CaseStudy"
import PictureSelect from './PictureSelect'

const theme = createTheme({
    // your other theme settings here
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            '&:hover': {
              backgroundColor: "white",
              color: "black"
            },
          }),
        },
      },
    },
  });


const IntroSection = () => {
    const [DivRef, DivInView] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '0px 0px',
      })
    
    const [InnerRef, InnerInView] = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '0px 0px',
      })

    const DivStyle = useSpring({
        to: {
            opacity: DivInView ? 1 : 0,
          },
          from: {
            opacity: 0,
          },
          config: {
            duration: 500
          }
    })

    const InnerStyle = useSpring({
        to: {
            opacity: InnerInView ? 1 : 0,
            transform:InnerInView ? "translateY(0%)" : "translateY(20%)"
          },
          from: {
            opacity: 0,
            transform: "translateY(20%)"
          },
          config: {
            duration: 1000
          }
    })


  return (
    <div className={styles.container}>
        <div className={styles.bg}>
            <div className={styles.bgImage} />

            <div  className={styles.imageGradient}/>

            <div  className={styles.bgGradient}/>

            <div className={styles.meshBox}>
                <Box >
                    <Image
                        src="/assets/Mesh.svg"
                        alt="mesh"
                        layout="responsive"
                        width={1800}
                        height={1080}
                        className={styles.mesh}
                    />
                </Box>
            </div>
        </div>

        <Typography  className={styles.title}>we are an<br /> award-winning</Typography>

        <animated.div className={styles.articleDiv} style={DivStyle} ref={DivRef}>
            <animated.div style={InnerStyle} ref={InnerRef}>
            <Typography className={styles.hero}>
                    We can offer a complete design service to all vessels, power and sail.
                     Whether it is conceptual design work or
                    full naval architecture and engineering, no job is too 
                    big or too small for our team.
                </Typography>
                <div className={styles.articleGrid}>
                    <Typography className={styles.article1}>
                        We believe that success is to a large part a matter of design process, 
                        and a good designer will have a design process that will produce a successful 
                        outcome whether it be a yacht, a powerboat, an aeroplane, or a ballpoint pen.
                    </Typography>
                    <Typography className={styles.article2}>
                        We undertake a wide variety of craft from radio yachts, to racing yachts, 
                        offshore powerboats, to 90m motoryachts, pilotboats, kayaks, Arabian dhows, 
                        cargo barges and fishing boats. As a result we are exposed to a wide variety 
                        of conditions, design problems and novel solutions, and if we were restricted 
                        to designing only one type of craft then we would not see this rich variety 
                        of thinking.
                    </Typography>
                </div>
            </animated.div>
        </animated.div>

        <ThemeProvider theme={theme}>
        <Button className={styles.button}>
            <Typography className={styles.buttonFont}>
                SEE EXPERTISE<br />
            </Typography>
                <Box width={60} height={16} className={styles.arrow}>
                    <Image
                        src="/assets/Arrow.svg"
                        alt="mesh"
                        layout="responsive"
                        width={60}
                        height={16}
                    />
                </Box>
        </Button>
        </ThemeProvider>

        <Typography className={styles.bottomText}>Boutique design <br /> studio</Typography>
        <Typography className={styles.secondTitle}>Selected <br />works</Typography>

        <CaseStudy />
        <PictureSelect />

        <ThemeProvider theme={theme}>
        <Button className={styles.buttonBottom}>
            <Typography className={styles.buttonFont}>
                see all designs<br />
            </Typography>
                <Box width={60} height={16} className={styles.arrow}>
                    <Image
                        src="/assets/Arrow.svg"
                        alt="mesh"
                        layout="responsive"
                        width={60}
                        height={16}
                    />
                </Box>
        </Button>
        </ThemeProvider>
    </div>
  )
}

export default IntroSection
