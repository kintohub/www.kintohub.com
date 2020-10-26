import React from "react"
import styled from "styled-components"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import MapIcon from "@material-ui/icons/Map"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import { CallToActionButton } from "./Button"
import { VerticalSpacer } from "./Spacer"
import { bps } from "../../plugins/custom-mui-theme/theme"

const ComparisonTable = () => {
  const StyledTableContainer = styled(TableContainer)`
    background-color: #fff;
    color: #000;
    width: 70%;
    margin: 0px auto 50px auto;
    border-radius: 8px;
    padding: 0px 16px;
    ${bps.down("md")} {
      width:80%
    }
    ${bps.down("xs")} {
      width:90%
    }
  `

  const StyledTableCell = styled(TableCell)`
    color: #000;
    height: 40px;
  `

  function createData(
    Features: string,
    KintoHub: any,
    Heroku: any,
    Netlify: any,
    Vercel: any
  ) {
    return { Features, KintoHub, Heroku, Netlify, Vercel }
  }

  const rows = [
    createData(
      "Free Static Web Hosting",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />
    ),
    createData(
      "Automated Let's Encrypt SSL",
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />
    ),
    createData(
      "Support Websockets",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Compatible with Other CDNs",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Web Services",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      "Lambda",
      "Lambda"
    ),
    createData(
      "Cron Jobs",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Background Workers",
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Postgres, Redis",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "MongoDB, S3 Cloud Storage, MySQL",
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Dedicated Resources and Scaling",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "Environments (Service Grouping)",
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />,
      <CloseIcon />
    ),
    createData(
      "On-Prem and Private Cloud Licensing",
      <CheckIcon color="primary" />,
      <CloseIcon />,
      <CloseIcon />,
      <CloseIcon />
    ),
  ]

  return (
    <StyledTableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell>FEATURES</StyledTableCell>
            <StyledTableCell align="center">
              <b>KintoHub</b>
            </StyledTableCell>
            <StyledTableCell align="center">Heroku</StyledTableCell>
            <StyledTableCell align="center">Netlify</StyledTableCell>
            <StyledTableCell align="center">Vercel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Features}>
              <StyledTableCell component="th" scope="row">
                {row.Features}
              </StyledTableCell>
              <StyledTableCell align="center">{row.KintoHub}</StyledTableCell>
              <StyledTableCell align="center">{row.Heroku}</StyledTableCell>
              <StyledTableCell align="center">{row.Netlify}</StyledTableCell>
              <StyledTableCell align="center">{row.Vercel}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const StyledDiv = styled.div`
  height: auto;
  background-color: #111111;
  width: 100%;
  height:auto;
  padding-top: 70px;

  a {
    text-decoration: none;
  }

  link {
    margin-bottom: 16px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <Typography align="center" variant="h1" color="textPrimary">
        Get more features with KintoHub
      </Typography>
      <VerticalSpacer size={14}/>
      <Typography
        
        align="center"
        variant="subtitle1"
        color="textPrimary"
      >
        Don't sacrifice your app's stack due to the platform you choose.
        KintoHub empowers choice.
      </Typography>
      <VerticalSpacer size={20}/>
      <ComparisonTable />
      <VerticalSpacer size={24}/>
      <a href="https://kintohub.com">
        <Typography align="center">
          <CallToActionButton
          variant="contained"
            startIcon={<MapIcon />}
            buttonTitle={"View Roadmap"}
          />
        </Typography>
      </a>
      <VerticalSpacer size={38}/>
    </StyledDiv>
  )
}
