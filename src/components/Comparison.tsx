import React from "react"
import styled from "styled-components"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import MapIcon from "@material-ui/icons/Map"
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import { VerticalSpacer } from "components/Spacer"
import { bps } from "theme/index"

const StyledTableContainer = styled(TableContainer)`
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.text.hint};
  border-radius: 8px;
  width: 60%;
  margin: 0 auto;
  padding: 0px 8px;
  ${bps.down("md")} {
    width: 80%;
  }
  ${bps.down("xs")} {
    width: 90%;
  }

  .closeIcon {
    color: #cecece;
  }
`

const StyledTableCell = styled(TableCell)`
  color: ${props => props.theme.palette.text.hint};
  height: 40px;
`

const ComparisonTable = () => {
  function createData(
    Features: string,
    KintoHub: React.ReactNode,
    Heroku: React.ReactNode,
    Netlify: React.ReactNode,
    Vercel: React.ReactNode
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
      <CloseIcon className="closeIcon" />,
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />
    ),
    createData(
      "Support Websockets",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "Compatible with Other CDNs",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
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
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "Background Workers",
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "Postgres, Redis",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "MongoDB, S3 Cloud Storage, MySQL",
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "Dedicated Resources and Scaling",
      <CheckIcon color="primary" />,
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "Environments (Service Grouping)",
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
    createData(
      "On-Prem and Private Cloud Licensing",
      <CheckIcon color="primary" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />,
      <CloseIcon className="closeIcon" />
    ),
  ]

  return (
    <StyledTableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              <Typography variant="overline">FEATURES</Typography>
            </StyledTableCell>
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
                <Typography variant="subtitle2">{row.KintoHub}</Typography>
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
  margin: 0 auto;
  padding: 0px 16px;

  a {
    text-decoration: none;
  }

  link {
    margin-bottom: 16px;
  }

  .btn {
    color: ${props => props.theme.palette.primary.dark};
    text-transform: capitalize;
  }

  .roadmap {
    margin-left: 8px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <VerticalSpacer size={50} />
      <Typography align="center" variant="h1" color="textPrimary">
        Get more features with KintoHub
      </Typography>
      <VerticalSpacer size={14} />
      <Typography align="center" variant="subtitle1" color="textSecondary">
        Don't sacrifice your app's stack due to the platform you choose.
        KintoHub empowers choice.
      </Typography>
      <VerticalSpacer size={26} />
      <ComparisonTable />
      <VerticalSpacer size={10} />
      <VerticalSpacer size={44} />
      <Typography align="center">
        <Button className="btn">
          <MapIcon color="secondary" />
          <Typography className="roadmap" align="center" variant="subtitle1">
            View Roadmap
          </Typography>
        </Button>
      </Typography>
      <VerticalSpacer size={44} />
    </StyledDiv>
  )
}
