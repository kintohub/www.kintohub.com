import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent/CardContent"
import React from "react"
import styled, { AnyStyledComponent, ThemeProvider } from "styled-components"
import Chip from "@material-ui/core/Chip/Chip"
import Typography from "@material-ui/core/Typography/Typography"
import Avatar from "@material-ui/core/Avatar/Avatar"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"
import { VerticalSpacer } from "./Spacer"
import { CardHeader, MuiThemeProvider } from "@material-ui/core"

const StyledCard = styled(Card)`
  width: 350px;
  height: 252px;
  margin: 16px;
  padding: 0px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  .avataar {
    height: 50px;
    width: 50px;
  }

  .feature-avataar {
    width: 30px;
    height: 30px;
    margin: 0px 10px;
  }

  .pill-wrapper {
    text-align: center;
  }

  .pill {
    width: 50px;
    height: 4px;
    border-radius: 16px;
    text-align: center;
    background-color: #f55555;
  }
`

type Props = {
  avatarText?: string
  testimonialText?: string
  featureTitle?: string
  featureDescription?: string
  featureCategory?: string
  src?: any
  serviceType?: string
  allowedUsage?: string
  serviceDescription?: string
}


const FeatureCard = ({
  featureTitle,
  featureDescription,
  featureCategory,
  src,
}: Props) => (
  <StyledCard>
    <MuiThemeProvider theme={textThemeDark}>
      <CardContent>
        <Typography variant="h3" color="textPrimary" align="center">
          {featureTitle}
        </Typography>
        <VerticalSpacer size={10} />
        <div className="pill-wrapper">
          <Chip className="pill" />
        </div>

        <VerticalSpacer size={10} />
        <Typography variant="body2" color="textSecondary" align="left">
          {featureDescription}
        </Typography>
        <VerticalSpacer size={10} />

        <Typography variant="overline" color="textSecondary" align="left">
          {featureCategory}
        </Typography>
        <VerticalSpacer size={10} />
        <Avatar className="feature-avataar" variant="square" src={src}></Avatar>
      </CardContent>
    </MuiThemeProvider>
  </StyledCard>
)

const TestimonialCard = ({ avatarText, testimonialText }: Props) => (
  <StyledCard>
    <ThemeProvider theme={textThemeDark}>
      <VerticalSpacer size={16} />
      <Avatar aria-label="recipe" className="avataar">
        {avatarText}
      </Avatar>
      <VerticalSpacer size={18} />
      <Typography variant="body1" color="textPrimary">
        {testimonialText}
      </Typography>
    </ThemeProvider>
  </StyledCard>
)

export { FeatureCard, TestimonialCard }
