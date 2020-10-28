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

  span {
    color: ${props => props.theme.palette.primary.main};
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: 240,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  tab: {
    height: 90,
    fontSize: 18, 
  }

}))


const StyledTab = styled(Tab)`
    font-size:12px;
    text-decoration:none;
    margin:0;
    padding:0;
    `

export default () => {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()
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

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <StyledTab
                className={classes.tab}
                  label="Scale down to a single shared 32 Mb instance or up multi-instance, multi-CPU workloads."
                  {...a11yProps(0)}
                />
                <StyledTab
                className={classes.tab}
                  label="Experience true cost savings with dev environments that automatically sleep when they are not in use!"
                  {...a11yProps(1)}
                />
                <StyledTab
                className={classes.tab}
                  label="Understand your maximum monthly cost before deploying anything!"
                  {...a11yProps(2)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                a single shared 32 Mb instance or up multi-instance, multi-CPU
                workloads.
              </TabPanel>
              <TabPanel value={value} index={1}>
                Scale down to a single shared 32 Mb instance or up
                multi-instance,
              </TabPanel>
              <TabPanel value={value} index={2}>
                p multi-instance, multi-CPU workloads.
              </TabPanel>
            </Grid>
          </Grid>
          <Grid item>
              </Grid>
        </Grid>
      </MuiThemeProvider>
    </StyledDiv>
  )
}
