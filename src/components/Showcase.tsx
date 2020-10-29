import React from "react"
import styled from "styled-components"
import { MuiThemeProvider, Theme, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid/Grid"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"
import { VerticalSpacer } from "./Spacer"
import Tabs from "@material-ui/core/Tabs/Tabs"
import Tab from "@material-ui/core/Tab/Tab"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Box from "@material-ui/core/Box/Box"

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.background.paper};

  .container {
    display: flex;
    flex-grow: 1;
  }

  .showcase {
    width: 200px;
    height: 200px;
  }

  .tabs {
    height: auto;
    background-color: #f55555;
    font-size:43px;
  }

  .tab {
    background-color: #424242;
  }

  
`
interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="body2" color="textSecondary">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledDiv>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={96} />
        <Typography variant="h1" color="textPrimary">
          Control your costs down to the second
        </Typography>
        <VerticalSpacer size={20} />
        <Typography variant="body1" color="textPrimary">
          Only consume what you need, and always know what you’re spending.
        </Typography>
        <VerticalSpacer size={40} />

        <div className="container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className="tabs"
          >
            <Tab
              className="tab"
              label="Scale down to a single shared 32 Mb instance or up multi-instance, multi-CPU workloads."
              {...a11yProps(0)}
            />
            <Tab
              className="tab"
              label="Experience true cost savings with dev environments that automatically sleep when they are not in use!"
              {...a11yProps(1)}
            />
            <Tab
              className="tab"
              label="Understand your maximum monthly cost before deploying anything!"
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <img
              className="showcase"
              src="http://static.simpledesktops.com/uploads/desktops/2020/09/02/60s_Lightning.png"
            ></img>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <img
              className="showcase"
              src="http://static.simpledesktops.com/uploads/desktops/2020/09/15/Day_at_Camp.png"
            ></img>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <img
              className="showcase"
              src="http://static.simpledesktops.com/uploads/desktops/2020/07/07/chain_circle.png"
            ></img>
          </TabPanel>
        </div>
      </MuiThemeProvider>
      <VerticalSpacer size={96} />
    </StyledDiv>
  )
}
