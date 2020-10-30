import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent/CardContent"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Chip from "@material-ui/core/Chip/Chip"
import Typography from "@material-ui/core/Typography/Typography"
import Avatar from "@material-ui/core/Avatar/Avatar"
import { bps, textThemeDark } from "theme/index"
import { VerticalSpacer } from "components/Spacer"
import { Grid, MuiThemeProvider } from "@material-ui/core"

const StyledTechStackCard = styled(Card)`
  width: 350px;
  height: 245px;
  margin: 16px;
  padding: 0px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  ${bps.down("md")} {
    max-width: 600px;
    width: auto;
    height: auto;
  }

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 9px;
  }

  .pill-wrapper {
    text-align: center;
  }

  .pill {
    width: 50px;
    height: 4px;
    border-radius: 16px;
    text-align: center;
    background-color: ${props => props.theme.palette.primary.main};
  }
`

type TechStackCardprops = {
  TechStackTitle?: string
  TechStackDescription?: string
  Category?: string
  AvatarSrc?: string[]
}

const TechStackCard = ({
  TechStackTitle,
  TechStackDescription,
  Category,
  AvatarSrc,
}: TechStackCardprops) => (
  <StyledTechStackCard>
    <MuiThemeProvider theme={textThemeDark}>
      <CardContent>
        <Typography variant="h3" color="textPrimary" align="center">
          {TechStackTitle}
        </Typography>
        <VerticalSpacer size={10} />
        <div className="pill-wrapper">
          <Chip className="pill" />
        </div>
        <VerticalSpacer size={10} />
        <Typography variant="body2" color="textSecondary" align="left">
          {TechStackDescription}
        </Typography>
        <VerticalSpacer size={10} />
        <Typography variant="overline" color="textSecondary" align="left">
          {Category}
        </Typography>
        <VerticalSpacer size={12} />

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {AvatarSrc &&
            AvatarSrc.map((item, index) => (
              <Avatar
                className="avatar"
                variant="square"
                src={item}
                key={index}
              />
            ))}
        </Grid>
      </CardContent>
      <VerticalSpacer size={16} />
    </MuiThemeProvider>
  </StyledTechStackCard>
)

const StyledTestimonialCard = styled(Card)`
  width: 350px;
  height: 240px;
  margin: 16px;
  padding: 0px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${bps.down("md")} {
    max-width: 600px;
    width: auto;
  }

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  .avatar {
    width: 50px;
    height: 50px;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.secondary.main};
  }
`

type TestimonialCardProps = {
  avatarText?: string
  testimonialText?: string
}

const TestimonialCard = ({
  avatarText,
  testimonialText,
}: TestimonialCardProps) => (
  <StyledTestimonialCard>
    <ThemeProvider theme={textThemeDark}>
      <VerticalSpacer size={16} />
      <Avatar className="avatar">{avatarText}</Avatar>
      <VerticalSpacer size={18} />
      <Typography align="center" variant="body1" color="textPrimary">
        {testimonialText}
      </Typography>
      <VerticalSpacer size={18} />
    </ThemeProvider>
  </StyledTestimonialCard>
)

export { TechStackCard, TestimonialCard }
