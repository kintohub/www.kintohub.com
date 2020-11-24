import React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "@material-ui/core/Button"

type Props = {
  buttonTitle: string
  link?: string
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

export default ({ buttonTitle, link, ...props }: Props) => {
  return (
    <a href={link}>
      <StyledButton {...props}>{buttonTitle}</StyledButton>
    </a>
  )
}
