import React from "react";
import styles from "../styles/CaseStudy.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import { Typography } from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function CaseStudy() {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
    setOpen1(false);
    setOpen3(false);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
    setOpen2(false);
    setOpen1(false);
  };

  return (
    <div className={styles.container}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        style={{
            backgroundColor: "transparent",
        }}
      >
        <ListItemButton onClick={handleClick1} className={styles.button} >
            <Typography className={styles.tag} >
                [01]
            </Typography>
            {open1 ? (
                <div>
                    <Typography className={styles.buttonFontSelected} >
                        case study
                    </Typography>
                </div>
              
            ) : (
                <Typography className={styles.buttonFont} >
                    case study
                </Typography>
            )}

        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
            <Typography className={styles.caseFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Eu in venenatis id laoreet enim. Interdum in orci vitae 
            feugiat quam urna. Pretium netus nec ante massa nulla odio 
            nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.
            </Typography>
        </Collapse>

        <ListItemButton onClick={handleClick2} className={styles.button}>
            <Typography className={styles.tag} >
                [02]
            </Typography>
            {open2 ? (
                <div>
                    <Typography className={styles.buttonFontSelected} >
                        case study
                    </Typography>
                </div>
              
            ) : (
                <Typography className={styles.buttonFont} >
                    case study
                </Typography>
            )}
        </ListItemButton>
        
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <Typography className={styles.caseFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Eu in venenatis id laoreet enim. Interdum in orci vitae 
            feugiat quam urna. Pretium netus nec ante massa nulla odio 
            nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.
            </Typography>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick3} className={styles.button}>
            <Typography className={styles.tag} >
                [03]
            </Typography>
            {open3 ? (
                <div>
                    <Typography className={styles.buttonFontSelected} >
                        case study
                    </Typography>
                </div>
              
            ) : (
                <Typography className={styles.buttonFont} >
                    case study
                </Typography>
            )}
        </ListItemButton>

        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <Typography className={styles.caseFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Eu in venenatis id laoreet enim. Interdum in orci vitae 
            feugiat quam urna. Pretium netus nec ante massa nulla odio 
            nunc posuere sit. Nec justo, leo eget ipsum sollicitudin aliquet.
            </Typography>
          </List>
        </Collapse>

        <Box height={640} width={1255} className={open1 ? styles.image1Front : styles.image1Back}>
        </Box>

        <Box height={640} width={1255} className={open2 ? styles.image2Front : styles.image2Back}>
        </Box>

        <Box height={640} width={1255} className={open3 ? styles.image3Front : styles.image3Back}>
        </Box>
        
      </List>
    </div>
  );
}

export default CaseStudy;
