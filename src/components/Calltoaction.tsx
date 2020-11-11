import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import ActionButton from "components/Button"
import { ButtonProps } from "@material-ui/core/Button/Button"
import CallToActionBg from "resources/background/calltoaction.svg"

import { VerticalSpacer } from "components/Spacer"

type Props = {
  title: string
  subtitle: string
  buttonTitle: string
  variant: string
  buttonIcon?: React.ComponentType
} & ButtonProps

