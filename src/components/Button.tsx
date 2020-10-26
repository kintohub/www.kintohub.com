import React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "@material-ui/core/Button"
import { render } from "react-dom"

type Props = {
  buttonTitle: string
} & ButtonProps

const StyledButton = styled(Button)`
  text-transform: none;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 16px;
  border-radius: 8px;
`

const CallToActionButton = ({ buttonTitle, ...props }: Props) => {
  return (
    <StyledButton {...props} color="primary">
      {buttonTitle}
    </StyledButton>
  )
}

export { CallToActionButton }
