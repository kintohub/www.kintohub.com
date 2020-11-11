import React, { useState } from "react"
import styled from "styled-components"
import {
  Card,
  CardActionArea,
  Divider,
  MuiThemeProvider,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import Grid from "@material-ui/core/Grid/Grid"
import { bps, textThemeDark } from "theme/index"
import {
  AutoExpandSpacer,
  AutoGrowSpacer,
  HorizontalSpacer,
  VerticalSpacer,
} from "components/Spacer"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import SnoozeRoundedIcon from "@material-ui/icons/SnoozeRounded"
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded"
import CustomResourceVid from "resources/video/custom_resource.gif"
import BillingVid from "resources/video/billing.gif"
import SleepModeVid from "resources/video/sleep_mode.gif"
import ActionButton from "components/Button"
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded"
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress"
import Hidden from "@material-ui/core/Hidden/Hidden"

const StyledVideoProgress = styled.div`
  height: 2px;
`

const VideoProgress = () => {
  //increase and later on reset the width of progress bar on specific intervals
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return -15
        }
        const diff = 3
        return Math.min(oldProgress + diff, 100)
      })
    }, 215)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <StyledVideoProgress>
      <LinearProgress variant="determinate" value={progress} />
    </StyledVideoProgress>
  )
}

const StyledVideoTabContainer = styled.div`
  background-color: ${props => props.theme.palette.background.paper};

  .disabledIcon {
    width: 40px;
    height: 40px;
    color: ${props => props.theme.palette.text.disabled};
  }

  .activeIcon {
    width: 40px;
    height: 40px;
    color: ${props => props.theme.palette.primary.main};
  }

  .videoTextList {
    max-width: 400px;
  }

  .progressBar {
    height: 3px;
    border-radius: 8px;
  }

  .disabled {
    display: none;
  }

  .blue {
  }

  .videoSrc {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

    ${bps.down("md")} {
      padding: 0px 16px;
      width: 100%;
      height: 100%;
    }
  }

  .grid-container {
    ${bps.down("md")} {
      text-align: left;
      align-items: center;
      flex-direction: column;
    }
  }
`

const tabData = [
  {
    id: 1,
    name: "Custom Resources",
    info:
      "Scale down to a single shared 32 Mb instance or up multi-instance, multi-CPU workloads.",
    icon: <TuneRoundedIcon />,
    src: CustomResourceVid,
    srcLength: Number(11),
  },
  {
    id: 2,
    name: "Sleep Mode",
    info:
      "Experience true cost savings with dev environments that automatically sleep when they are not in use!",
    icon: <SnoozeRoundedIcon />,
    src: SleepModeVid,
    srcLength: Number(7),
  },
  {
    id: 3,
    name: "Transparent Billing",
    info: "Understand your maximum monthly cost before deploying anything!",
    icon: <CreditCardRoundedIcon />,
    src: BillingVid,
    srcLength: Number(11),
  },
]

const VideoTab = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleClick = (index: any) => {
    setTabIndex(index)
  }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  })

  return (
    <StyledVideoTabContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <Grid
          className="grid-container"
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item xs={2}></Grid>
          <Grid item className="red" xs lg={3}>
            {tabData.map((item, index) => (
              <Card elevation={0} key={item.id}>
                <CardActionArea onClick={() => handleClick(index)}>
                  <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Grid item className="videoTextList">
                      <VerticalSpacer size={20} />
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid item xs={2}>
                          <SvgIcon
                            key={item.id}
                            className={
                              index == tabData[tabIndex].id - 1
                                ? "activeIcon"
                                : "disabledIcon"
                            }
                          >
                            {item.icon}
                          </SvgIcon>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="subtitle1" color="textPrimary">
                            {item.name}
                          </Typography>
                          <VerticalSpacer size={2} />
                          <Typography variant="subtitle2" color="textSecondary">
                            {item.info}
                          </Typography>
                          <VerticalSpacer size={20} />
                        </Grid>
                      </Grid>
                      <div
                        className={
                          index == tabData[tabIndex].id - 1 ? "" : "disabled"
                        }
                      >
                        <VideoProgress />
                      </div>
                      <Divider />
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            ))}

            <Hidden mdDown>
              <VerticalSpacer size={20} />
              <Grid container justify={isMobile ? "center" : "flex-start"}>
                <ActionButton
                  buttonTitle={"Start Free"}
                  variant="contained"
                  color="primary"
                  startIcon={<PowerSettingsNewRoundedIcon />}
                  link={"https://app.kintohub.com/auth/sign-up"}
                />
                <HorizontalSpacer size={20} />
                <ActionButton
                  className="pricing-btn"
                  buttonTitle={"See Pricing"}
                  variant="outlined"
                  color="primary"
                  link={"/pricing"}
                />
              </Grid>
            </Hidden>
          </Grid>
          <Hidden mdDown>
            <VerticalSpacer size={50} />
            <Grid item lg={5} className="blue">
              <Grid container alignItems="center">
                <img
                  className="videoSrc"
                  src={tabData[tabIndex].src}
                  alt="showcase"
                ></img>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden lgUp>
            <VerticalSpacer size={40} />
            <Grid item lg={5} className="blue">
              <Grid container alignItems="center">
                <img
                  className="videoSrc"
                  src={tabData[tabIndex].src}
                  alt="showcase"
                ></img>
              </Grid>
            </Grid>

            <VerticalSpacer size={40} />
            <Grid container justify={isMobile ? "center" : "flex-start"}>
              <ActionButton
                buttonTitle={"Start Free"}
                variant="contained"
                color="primary"
                startIcon={<PowerSettingsNewRoundedIcon />}
                link={"https://app.kintohub.com/auth/sign-up"}
              />
              <HorizontalSpacer size={20} />
              <ActionButton
                className="pricing-btn"
                buttonTitle={"See Pricing"}
                variant="outlined"
                color="primary"
                link={"/pricing"}
              />
            </Grid>
          </Hidden>

          <Grid item xs={2}></Grid>
        </Grid>

        <Hidden smDown>
          <VerticalSpacer size={90} />
        </Hidden>
        <Hidden mdUp>
          <VerticalSpacer size={40} />
        </Hidden>
      </MuiThemeProvider>
    </StyledVideoTabContainer>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 16px;
  background: ${props => props.theme.palette.background.paper};

  box-sizing: border-box;
`

export default () => {
  return (
    <StyledDiv>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={90} />
        <Typography align="center" variant="h2" color="textPrimary">
          Control your costs down to the second
        </Typography>
        <VerticalSpacer size={20} />
        <Typography align="center" variant="body1" color="textPrimary">
          Only consume what you need, and always know what you’re spending.
        </Typography>
      </MuiThemeProvider>

      <Hidden mdDown>
        <VerticalSpacer size={54} />
      </Hidden>
      <Hidden smUp>
        <VerticalSpacer size={44} />
      </Hidden>
      <VideoTab />
    </StyledDiv>
  )
}
