import React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "@material-ui/core/Button"
import { render } from "react-dom";

type Props = {
  buttonIcon?: React.ComponentType;
  buttonTitle: string;
} & ButtonProps;

const StyledButton = styled(Button)`
  text-transform: none;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 16px;
  border-radius: 8px;
`


const SimpleButton = ({ buttonTitle }: Props) => {
  return (
    <StyledButton variant="contained" color="primary">
      {buttonTitle}
    </StyledButton>
  )
}

const CallToActionButton = ({ buttonIcon: Component, buttonTitle }: Props) => {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      startIcon={Component ? <Component /> : null}
    >
      {buttonTitle}
    </StyledButton>
  )
}

export { SimpleButton, CallToActionButton }
