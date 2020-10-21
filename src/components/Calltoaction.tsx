import React from "react"
import styled from "styled-components"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import { Typography } from "@material-ui/core"
import { CallToActionButton } from "./Button"
import { ButtonProps } from "@material-ui/core/Button/Button"
import CallToActionBg from "../images/CallToActionBg.svg"

type Props = {
  title:string
  subtitle:string
  buttonTitle: string
  buttonIcon?: React.ComponentType;
} 

const StyledDiv = styled.div`
  width: 100%;
  height: 385px;
  background-image: url(${CallToActionBg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 0px;
  display: flex;
  flex-direction: column;

  .heading {
    color: rgba(255, 255, 255, 0.87);
    font-size: 34px;
    text-align: center;
    font-weight: 500;
    text-align: center;
    padding-top: 72px;
    letter-spacing: -0.53px;
    padding-bottom: 16px;
    line-height: 40px;
  }

  .subheading {
    color: rgba(255, 255, 255, 0.87);
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    letter-spacing: 0.15px;
    line-height: 24px;
    padding-bottom: 40px;
  }
`

export default ({title,subtitle,buttonTitle,buttonIcon}:Props) => {
  return (
    <StyledDiv>
      <Typography className="heading">
        {title}
      </Typography>
      <Typography className="subheading">
        {subtitle}
      </Typography>
      <CallToActionButton
        variant="contained"
        color="primary"
        startIcon={buttonIcon}
        buttonTitle={buttonTitle}
      />
    </StyledDiv>
  )
}
