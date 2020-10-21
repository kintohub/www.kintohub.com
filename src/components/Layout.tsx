import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"

const StyledDiv = styled.div``

const Layout = ({ children }) => {
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
