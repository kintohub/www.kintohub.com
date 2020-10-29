import React, { useState } from "react"
import styled from "styled-components"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  MuiThemeProvider,
  SvgIcon,
  Typography,
} from "@material-ui/core"
import Grid from "@material-ui/core/Grid/Grid"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"
import { AutoGrowSpacer, VerticalSpacer } from "./Spacer"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import SnoozeRoundedIcon from "@material-ui/icons/SnoozeRounded"
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded"
import CustomResourceVid from "../images/video/custom_resources.gif"

const StyledVideoTabContainer = styled.div`
  background-color: ${props => props.theme.palette.background.paper};
  .tab {
    float: left;
    background-color: ${props => props.theme.palette.background.paper};
    height: auto;
  }

  .tab button {
    display: block;
    background-color: inherit;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
    font-size: 17px;
  }

  .tab button:hover {
    background-color: #ddd;
  }

  .tab button.active {
    background-color: #ccc;
  }

  .tabcontent {
    float: left;
    background: ${props => props.theme.palette.background.paper};
    padding: 0px 12px;

    height: auto;
  }

  .videoContainer {
    width: 200px;
    height: 200px;
    background-image: cover;
  }
  .icon {
    width: 40px;
    height: 40px;
  }

  .videoTextList {
    max-width: 400px;
  }

  .videoSrc {
    width: 634px;
    height: 386px;
    border-radius: 8px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`

const VideoTab = () => {
  const tabData = [
    {
      id: "1",
      name: "Custom Resources",
      info:
        "Scale down to a single shared 32 Mb instance or up multi-instance, multi-CPU workloads.",
      icon: <TuneRoundedIcon />,
      src: CustomResourceVid,
    },
    {
      id: "2",
      name: "Sleep Mode",
      info:
        "Experience true cost savings with dev environments that automatically sleep when they are not in use!",
      icon: <SnoozeRoundedIcon />,
      src:
        "https://images.unsplash.com/photo-1603880008872-0572a0ae2f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: "3",
      name: "Transparent Billing",
      info: "Understand your maximum monthly cost before deploying anything!",
      icon: <CreditCardRoundedIcon />,
      src:
        "https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]

  const [tabIndex, setTabIndex] = useState(0)

  const handleClick = (index: any) => {
    setTabIndex(index)
  }

  return (
    <StyledVideoTabContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid item>
            {tabData.map((item, index) => (
              <Card elevation={0}>
                <CardActionArea
                  key={item.name}
                  onClick={() => handleClick(index)}
                >
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item className="videoTextList">
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                      >
                        <Grid item xs={2}>
                          <SvgIcon className="icon">{item.icon}</SvgIcon>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="subtitle1" color="textPrimary">
                            {item.name}
                          </Typography>
                          <VerticalSpacer size={5} />
                          <Typography variant="subtitle2" color="textSecondary">
                            {item.info}
                          </Typography>
                          <VerticalSpacer size={5} />
                        </Grid>
                      </Grid>
                      <Divider />
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            ))}
          </Grid>

          <AutoGrowSpacer size={0.04} />

          <Grid item>
            <img className="videoSrc" src={tabData[tabIndex].src}></img>
          </Grid>
        </Grid>
        <VerticalSpacer size={160} />
      </MuiThemeProvider>
    </StyledVideoTabContainer>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.theme.palette.background.paper};

  box-sizing: border-box;
`

export default () => {
  return (
    <StyledDiv>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={96} />
        <Typography align="center" variant="h1" color="textPrimary">
          Control your costs down to the second
        </Typography>
        <VerticalSpacer size={20} />
        <Typography align="center" variant="body1" color="textPrimary">
          Only consume what you need, and always know what you’re spending.
        </Typography>
        <VerticalSpacer size={40} />
      </MuiThemeProvider>
      <VerticalSpacer size={96} />
      <VideoTab />
    </StyledDiv>
  )
}
