import React, { useState } from "react"
import styled from "styled-components"
import {
  Card,
  CardActionArea,
  Divider,
  MuiThemeProvider,
  SvgIcon,
  Typography,
} from "@material-ui/core"
import Grid from "@material-ui/core/Grid/Grid"
import { textThemeDark } from "theme/index"
import { AutoGrowSpacer, VerticalSpacer } from "components/Spacer"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import SnoozeRoundedIcon from "@material-ui/icons/SnoozeRounded"
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded"
import CustomResourceVid from "images/video/custom_resource.gif"
import BillingVid from "images/video/billing.gif"
import SleepModeVid from "images/video/sleep_mode.gif"
import ActionButton from "components/Button"
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded"

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

  .pricing-btn {
    margin-left: 20px;
  }

  .videoSrc {
    width: auto;
    height: 450px;
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
      src: SleepModeVid,
    },
    {
      id: "3",
      name: "Transparent Billing",
      info: "Understand your maximum monthly cost before deploying anything!",
      icon: <CreditCardRoundedIcon />,
      src: BillingVid,
    },
  ]

  const [tabIndex, setTabIndex] = useState(0)

  const handleClick = (index: any) => {
    console.log(index)
    setTabIndex(index)
  }

  return (
    <StyledVideoTabContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
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
                              index == Number(tabData[tabIndex].id) - 1
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
                      <Divider />
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            ))}
            <VerticalSpacer size={20} />
            <ActionButton
              buttonTitle={"Start Free"}
              variant="contained"
              startIcon={<PowerSettingsNewRoundedIcon />}
              link={"https://app.kintohub.com/auth/sign-up"}
            />
            <ActionButton
              className="pricing-btn"
              buttonTitle={"See Pricing"}
              variant="outlined"
              link={"/pricing"}
            />
            <VerticalSpacer size={40} />
          </Grid>

          <AutoGrowSpacer size={0.05} />

          <Grid item>
            <img className="videoSrc" src={tabData[tabIndex].src}></img>
          </Grid>
        </Grid>
        <VerticalSpacer size={90} />
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
        <Typography align="center" variant="h2" color="textPrimary">
          Control your costs down to the second
        </Typography>
        <VerticalSpacer size={20} />
        <Typography align="center" variant="body1" color="textPrimary">
          Only consume what you need, and always know what you’re spending.
        </Typography>
        <VerticalSpacer size={40} />
      </MuiThemeProvider>
      <VerticalSpacer size={40} />
      <VideoTab />
    </StyledDiv>
  )
}
