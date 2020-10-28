import styled from "styled-components"

interface SpacerProps {
  size: number
}

export const VerticalSpacer = styled.div<SpacerProps>`
  height: ${props => props.size}px;
`
export const AutoExpandSpacer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const AutoGrowSpacer = styled.div<SpacerProps>`
  display: flex;
  flex-grow: ${props => props.size};
`
export const HorizontalSpacer = styled.div<SpacerProps>`
  width: ${props => props.size}px;
`
