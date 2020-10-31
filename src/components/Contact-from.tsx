import { TextField, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid/Grid"
import { createStyles, MuiThemeProvider } from "@material-ui/core/styles"
import React, { useState } from "react"
import SendIcon from "@material-ui/icons/Send"
import styled from "styled-components"
import { bps, textThemeDark } from "theme/index"
import ActionButton from "components/Button"
import { VerticalSpacer } from "components/Spacer"
import axios from "axios"
import FormControl from "@material-ui/core/FormControl/FormControl"
import Select from "@material-ui/core/Select/Select"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import InputLabel from "@material-ui/core/InputLabel/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput"

const StyledFormContainer = styled.div`
  min-width: 500px;
  height: auto;

  ${bps.down("md")} {
    min-width: auto;
    margin: -32px 16px 0px 16px;
  }

  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: -32px;

  .form {
    padding: 32px;
  }

  .select {
    width: 100%;
  }
  .select-empty {
    margin: 0 0 0px 14px;
  }
`

const StyledFormSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  height: 679px;

  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: -32px;

  .formSubmitted {
    padding: 32px;
    margin-top: 42px;
  }
`

export default (data: any) => {
  const [email, setemail] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [projectinfo, setprojectinfo] = useState("")
  const [inquirytype, setinquirytype] = useState("Enterprise")
  const [formStatus, setformStatus] = useState(false)

  const formData = {
    submittedAt: Date.now(),
    fields: [
      {
        name: "email",
        value: email,
      },
      {
        name: "firstname",
        value: firstname,
      },
      {
        name: "lastname",
        value: lastname,
      },
      {
        name: "projectinfo",
        value: projectinfo,
      },
      {
        name: "inquirytype",
        value: inquirytype,
      },
      {
        name: "lifecyclestage",
        value: "marketingqualifiedlead",
      },
    ],

    context: {
      pageUri: window.location.href,
      pageName: window.location.pathname,
    },
  }

  const onEmailChange = (event: any) => {
    setemail(event.target.value)
  }
  const onFirstNameChange = (event: any) => {
    setfirstname(event.target.value)
  }
  const onLastNameChange = (event: any) => {
    setlastname(event.target.value)
  }

  const onMessageChange = (event: any) => {
    setprojectinfo(event.target.value)
  }
  const onMessageTypeChange = (event: any) => {
    setinquirytype(event.target.value)
  }

  const url =
    "https://api.hsforms.com/submissions/v3/integration/submit/5698733/deda0c98-c07c-4d85-a678-8125e225e08e"

  const submit = async () => {
    axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      data: formData,
      url,
    })
      .then(response => {
        setformStatus(true)
      })
      .catch(error => console.log(error))
  }

  if (!formStatus) {
    return (
      <StyledFormContainer>
        <MuiThemeProvider theme={textThemeDark}>
          <form noValidate autoComplete="off" className="form">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <FormControl variant="outlined" className="select">
                <Select value={inquirytype} onChange={onMessageTypeChange}>
                  <MenuItem value={"Enterprise"}>Enterprise</MenuItem>
                  <MenuItem value={"General Questions"}>
                    General Questions
                  </MenuItem>
                  <MenuItem value={"Partnership Opportunity"}>
                    Partnership Opportunity
                  </MenuItem>
                </Select>
              </FormControl>
              <VerticalSpacer size={24} />
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstname}
                onChange={onFirstNameChange}
              />
              <VerticalSpacer size={24} />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastname}
                onChange={onLastNameChange}
              />
              <VerticalSpacer size={24} />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={onEmailChange}
                fullWidth
                value={email}
              />
              <VerticalSpacer size={24} />
              <TextField
                id="outlined-basic"
                rows={6}
                multiline
                value={projectinfo}
                label="How can we help?"
                variant="outlined"
                fullWidth
                onChange={onMessageChange}
              />
              <VerticalSpacer size={24} />
              <ActionButton
                color="primary"
                buttonTitle={"Send Message"}
                startIcon={<SendIcon />}
                variant="contained"
                onClick={submit}
              />
              <VerticalSpacer size={24} />
              <Typography
                align="left"
                variant="subtitle2"
                color="textSecondary"
              >
                Make sure the email is correct so we can reach you.
                <div>Usually we respond within 24 hours.</div>
              </Typography>
            </Grid>
          </form>
        </MuiThemeProvider>
      </StyledFormContainer>
    )
  } else {
    return (
      <StyledFormSubmitContainer>
        <MuiThemeProvider theme={textThemeDark}>
          <div className="formSubmitted">
            <Typography variant="h4" color="textPrimary">
              Thanks, we will get back to you soon!
            </Typography>
          </div>
        </MuiThemeProvider>
      </StyledFormSubmitContainer>
    )
  }
}
