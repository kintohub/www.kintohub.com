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
import ActionButton from "components/Button"
import { VerticalSpacer } from "components/Spacer"
import { bps } from "theme/index"

const StyledTableContainer = styled(TableContainer)`
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.text.hint};
  width: 70%;
  margin: 0px auto 50px auto;
  border-radius: 8px;
  padding: 0px 16px;
  ${bps.down("md")} {
    width: 80%;
  }
  ${bps.down("xs")} {
    width: 90%;
  }
`

const StyledTableCell = styled(TableCell)`
  color: ${props => props.theme.palette.text.hint};
  height: 40px;
`

const ComparisonTable = () => {
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
      <CloseIcon color="action" />,
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />
    ),
    createData(
      "Support Websockets",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "Compatible with Other CDNs",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
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
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "Background Workers",
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "Postgres, Redis",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "MongoDB, S3 Cloud Storage, MySQL",
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "Dedicated Resources and Scaling",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "Environments (Service Grouping)",
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
    createData(
      "On-Prem and Private Cloud Licensing",
      <CheckIcon color="primary" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />,
      <CloseIcon color="action" />
    ),
  ]

  return (
    <StyledTableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">FEATURES</StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle1">KintoHub</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2">Heroku</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2">Netlify</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="subtitle2">Vercel</Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Features}>
              <StyledTableCell align="left" component="th" scope="row">
                <Typography variant="subtitle1">{row.Features}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle2">{row.KintoHub}</Typography>{" "}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle2">{row.Heroku}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle2">{row.Netlify}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="subtitle2">{row.Vercel}</Typography>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const StyledDiv = styled.div`
  height: auto;
  background-color: ${props => props.theme.palette.secondary.default};
  width: 100%;
  padding:0px 16px;

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
      <VerticalSpacer size={70} />
      <Typography align="center" variant="h1" color="textPrimary">
        Get more features with KintoHub
      </Typography>
      <VerticalSpacer size={14} />
      <Typography align="center" variant="subtitle1" color="textPrimary">
        Don't sacrifice your app's stack due to the platform you choose.
        KintoHub empowers choice.
      </Typography>
      <VerticalSpacer size={26} />
      <ComparisonTable />
      <VerticalSpacer size={24} />
      <Typography align="center">
        <ActionButton
          variant="contained"
          startIcon={<MapIcon />}
          buttonTitle={"View Roadmap"}
          link={"https://feedback.kintohub.com"}
        />
      </Typography>
      <VerticalSpacer size={38} />
    </StyledDiv>
  )
}
