import React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "@material-ui/core/Button"


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

export default ({ buttonTitle, ...props }: Props) => {
  return (
    <StyledButton {...props} color="primary">
      {buttonTitle}
    </StyledButton>
  )
}
