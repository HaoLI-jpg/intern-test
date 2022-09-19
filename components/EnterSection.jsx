import React from "react";
import styles from "../styles/EnterSection.module.css";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useSpring, animated } from 'react-spring'


function EnterSection() {

  const logoPopUp = useSpring({

    from: { transform: "translateY(40%)", opacity: "0"},
    to: [
      { transform: "translateY(0%)", opacity: "1"},
    ],
    config: { duration: "500" },
  })

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.infoDiv}>
          <Box width="auto" height="auto">
            <animated.div style={logoPopUp}>
              <Image
                src="/assets/LogoLarge.svg"
                alt="navbar-logo"
                width={1800}
                height={100}
                layout="responsive"
              />
            </animated.div>
          </Box>
          <div className={styles.infoOuter}>
            <div className={styles.infoInnerLeft}>
              <Typography className={styles.infoFont}>
                +64 9 480 6800
                <br />
                info@bakewell-white.com
              </Typography>
            </div>

            <div className={styles.infoInnerMid}>
              <Typography className={styles.infoFont}>
                Bakewell-white Yacht Design LTD
                <br />
                Pace with grace / © 2022
              </Typography>
            </div>

            <div className={styles.infoInnerRight}>
              <Typography className={styles.infoFont}>
                Est. 1994
                <br />
                auckland / new zealand
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterSection;
