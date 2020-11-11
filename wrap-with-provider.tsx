import React from "react"

const AnaylticWrapper = ({ children }) => {
  React.useEffect(() => {
    // https://segment.com/docs/connections/spec/identify/#anonymous-id
    window.analytics && window.analytics.identify({})
  }, [])
  return <>{children}</>
}

export default ({ element }) => {
  
  return <AnaylticWrapper>{element}</AnaylticWrapper>
}
