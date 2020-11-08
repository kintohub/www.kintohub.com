import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ReactNode } from "react"

const StyledDiv = styled.div`
  a {
    text-decoration: none;
  }
  z-index: 1;
`

interface Props {
  children: ReactNode
  // any other props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <StyledDiv>
      <CssBaseline />
      <main>{children}</main>
    </StyledDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
