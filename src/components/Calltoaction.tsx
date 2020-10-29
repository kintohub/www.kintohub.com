import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import ActionButton from "components/Button"
import { ButtonProps } from "@material-ui/core/Button/Button"
import CallToActionBg from "images/background/calltoaction.svg"

import { VerticalSpacer } from "components/Spacer"

type Props = {
  title: string
  subtitle: string
  buttonTitle: string
  variant: string
  buttonIcon?: React.ComponentType
} & ButtonProps

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${CallToActionBg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
`

export default ({
  title,
  subtitle,
  buttonTitle,
  buttonIcon: IconComponent,
  variant,
}: Props) => {
  return (
    <StyledDiv>
      <VerticalSpacer size={86} />
      <Typography align="center" variant="h1" color="textPrimary">
        {title}
      </Typography>
      <VerticalSpacer size={12} />
      <Typography variant="body1" align="center" color="textPrimary">
        {subtitle}
      </Typography>
      <VerticalSpacer size={42} />
      <ActionButton
        color="primary"
        variant={variant}
        startIcon={IconComponent ? <IconComponent /> : null}
        buttonTitle={buttonTitle}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={142} />
    </StyledDiv>
  )
}
