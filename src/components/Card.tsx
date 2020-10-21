import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent/CardContent"
import React from "react"
import styled from "styled-components"
import Chip from "@material-ui/core/Chip/Chip"
import Typography from "@material-ui/core/Typography/Typography"
import Avatar from "@material-ui/core/Avatar/Avatar"

const StyledCard = styled(Card)`
  width: 330px;
  height: 245px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);

  .description {
    padding: 25px 25px 0px 25px;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.5px;
    line-height: 24px;
  }

  .avataar {
    width: 50px;
    height: 50px;
    margin: 26px 140px 0px 140px;
  }

  .feature-avataar {
    width: 30px;
    height: 30px;
    margin: 0px 10px;
  }

  .pill {
    width: 50px;
    height: 4px;
    text-align: center;
    border-radius: 16px;
    background-color: #f55555;
    margin: 20px 0px;
  }

  .title {
    color: ();
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    line-height: 30px;
  }

  .feature-description {
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.25px;
    line-height: 20px;
    padding: 0px 10px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
  }

  .category {
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 16px;
    padding: 12px 10px;
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
  }
`

const PricingStyledCard = styled(Card)`
  width: 500px;
  height: 170px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`

type Props = {
  avatarText?: string
  testimonialText?: string
  featureTitle?: string
  featureDescription?: string
  featureCategory?: string
  src?: string
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
    <CardContent>
      <Typography className="title">{featureTitle}</Typography>
      <Chip className="pill" />
      <Typography className="feature-description">
        {featureDescription}
      </Typography>
      <Typography className="category">{featureCategory}</Typography>

      <Avatar className="feature-avataar" variant="square" src={src}></Avatar>
    </CardContent>
  </StyledCard>
)

const TestimonialCard = ({ avatarText, testimonialText }: Props) => (
  <StyledCard>
    <Avatar className="avataar">{avatarText}</Avatar>
    <div className="description">
      <Typography variant="body1" color="textPrimary">
        {testimonialText}
      </Typography>
    </div>
  </StyledCard>
)

const PricingCard = ({
  serviceType,
  allowedUsage,
  serviceDescription,
}: Props) => (
  <PricingStyledCard>
    <Typography variant="h6" color="textPrimary">
      {serviceType}
    </Typography>
    <Typography variant="h2" color="textPrimary">
      {allowedUsage}
    </Typography>
    <Typography variant="subtitle2" color="textPrimary">
      {serviceDescription}
    </Typography>
  </PricingStyledCard>
)

export { FeatureCard, TestimonialCard, PricingCard }
