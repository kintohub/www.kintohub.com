import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Divider from '@material-ui/core/Divider';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CloudIcon from '@material-ui/icons/CloudCircle'
import AccessTimeIcon from '@material-ui/icons/AccessTimeRounded';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplicationsRounded';
import CategoryIcon from '@material-ui/icons/CategoryRounded';
import DatabaseIcon from '@material-ui/icons/DataUsageRounded';
import WebIcon from '@material-ui/icons/WebRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcardRounded';
import ExtrasIcon from '@material-ui/icons/AddToPhotosRounded';
import { Hidden } from '@material-ui/core';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    position: relative;
    min-width: 1180px;

    .right {
      position:absolute;
      right: 0px;
      top: 0px;
      width: 20%;
           
      background-color: ${props => props.theme.palette.secondary.main};      
      height: 100%;
    }    

    .divider {
      margin-left: -16px;
      margin-right: -16px;
    }
    .mobile-divider {
      width: calc(100% + 32px);
      margin-left: -16px;
      opacity: 0.6;
    }
    .main {
      position: relative;
      .right-col {
        padding-left: 32px;        
        text-align: center;
        color: ${props => props.theme.palette.getContrastText(props.theme.palette.secondary.main)};        
      }
      padding: 16px;

      .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;
      }

      .column {
        display: flex;
        flex-direction: column;        
      }
    }

    
  }
  .free-resources {
    position: relative;
    .free-resources-bg {
      position: absolute;
      width: calc(100% + 32px);
      height: calc(100% + 64px);
      margin: -32px -16px;
      background-color: ${props => props.theme.palette.primary.main};
      opacity: 0.1;
    }
    .wrapper {
      position:relative;
    }
  }

  a:hover, a:active, a:visited {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const SizedVBox = styled.div`
  height: auto;
  width: 100%;
`;

const SizedHBox = styled.div`
  width: auto;
`;

const renderService = (Icon, text, color) => {
  return (
    <div className="row">
      <Icon color={color || 'inherit'} />
      <SizedHBox  />
      <Typography variant="h6" color="secondary"> {text}</Typography>
    </div>);
};

const options = {
  memory_optimized: {
    values: [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192],
    title: 'Memory',
    unit: 'mb',
    priceLabel: '$3 per gb /mo',
    unitPrice: 3.0 / 1024.0,
    freeLimit: -1,
    default: 4,
  },
  cpu_optimized: {
    values: [0, 0.1, 0.2, 0.5, 1.0, 1.5, 2.0, 3.0, 4.0],
    title: 'vCPU',
    unit: 'core',
    priceLabel: '$15 per core /mo',
    unitPrice: 15.0,
    freeLimit: -1,
    default: 0
  },
  storage: {
    values: [1024, 2048, 4096, 10240, 20480, 51200, 102400],
    title: 'Storage',
    unit: 'mb',
    priceLabel: '$0.28 per gb /mo',
    unitPrice: 0.28 / 1024.0,
    freeLimit: -1,
    default: 0
  },
  bandwidth: {
    values: [1024, 2048, 4096, 10240, 20480, 51200, 102400],
    title: 'Bandwidth',
    unit: 'mb',
    priceLabel: '$0.1 per gb /mo',
    unitPrice: 0.1 / 1024.0,
    freeLimit: 10240,
    default: 3
  },
  build_time: {
    values: [1000, 2000, 3000, 5000, 10000, 20000, 50000],
    title: 'Build and Deploy Time',
    unit: 'min',
    priceLabel: '$0.001 per min',
    unitPrice: 0.001,
    freeLimit: 3000,
    default: 2
  },
}

const mbToHumanReadableUnit = (value) => {
  if (value >= 1024) {
    return value % 1024 === 0 ?
      `${value / 1024} GB` :
      `${(value / 1024.0).toFixed(1)} GB`;
  } else {
    return `${value} MB`;
  }
}

const renderSlider = (key, values, setValues) => {
  const option = options[key];
  const value = values[key];

  return (
    <div className="row">
      <Grid container xs={12} spacing={2}>
        <Grid item sm={8} xs={12}>
          <div className="column">
            <Typography variant="body2" color="secondary">{option.title}</Typography>
            <Slider value={value} onChange={(evt, v) => {
              setValues({ ...values, [key]: v });
            }}
              aria-labelledby="continuous-slider"

              max={option.values.length - 1}
            />
          </div>
        </Grid>

        <Grid item sm={4} xs={12}>
          <div className="column">
            <Typography variant="h6" color="secondary">
              {option.unit === 'mb' &&
                mbToHumanReadableUnit(option.values[value])
              }
              {option.unit === 'min' &&
                `${option.values[value]} mins`
              }
              {option.unit === 'core' &&
                (option.values[value] === 0 ?
                  'Shared' :
                  `${option.values[value]} Core(s)`)
              }
            </Typography>

            <Typography variant="body1" color="secondary">
              {option.unit === 'core' &&
                option.values[value] === 0 ?
                '$1 /mo' :
                `${option.priceLabel}`}
            </Typography>

          </div>
        </Grid>
        <Hidden smUp>
          <SizedVBox  />
        </Hidden>
      </Grid>
    </div>);
}


const renderPrice = (key, values) => {
  const option = options[key];
  const value = option.values[values[key]];

  return (
    <Typography variant="h6">
      {value <= option.freeLimit ? 'Free' : `$${getCost(key, values).toFixed(1)}`}
    </Typography>)
}

const RightColumns = ({ children }) => {
  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item sm={9} xs={8} container alignContent="center" direction="row">
        {children[0]}
      </Grid>
      <Grid item sm={3} xs={4} container alignContent="center" justify="center" direction="row" className="right-col">
        {children[1]}
      </Grid>
    </Grid>
  );
}

const getCost = (k, values) => {
  const value = options[k].values[values[k]];
  if (value <= options[k].freeLimit) {
    return 0;
  }

  // special handling for shared cpu
  if (options[k].unit === 'core' && value === 0) {
    return 1.0;
  }
  return value * options[k].unitPrice;
}

export default () => {
  const defaultValues = {};
  Object.keys(options).forEach((k) => {
    defaultValues[k] = options[k].default;
  })

  const [values, setValues] = useState(defaultValues);

  return (
  
        <StyledDiv>
          <SizedVBox  />
          <Typography variant="h1">Get full control of your cloud resources.</Typography>
          <SizedVBox  />
          <Typography variant="body1">Configure your app to use the only resources you need.</Typography>
          <SizedVBox  />
          <Card className="card" >
            <div className="right" />
            <div className="main">
              <SizedVBox  />
              <Grid container item xs={12}>
                <Hidden smDown>
                  <Grid item md={3}>
                    <Button color="primary" variant="contained" onClick={() => { setValues(defaultValues) }}>
                      Reset to Free Usage
                  </Button>
                  </Grid>
                </Hidden>
                <Grid item container md={9}>
                  <RightColumns>
                    <Typography variant="h4">Pay-as-you-go Calculator</Typography>
                    <Typography variant="body2">Accounts are billed monthly</Typography>
                  </RightColumns>
                </Grid>
              </Grid>
              <SizedVBox  />
              <Divider className="divider" />
              <SizedVBox />
              <Grid container item xs={12}>
                <Grid item md={3}>
                  
                </Grid>
                <Grid item container md={9}>
                  <RightColumns>
                    <Typography variant="body2" />
                    <Typography variant="h6">Free</Typography>
                  </RightColumns>
                </Grid>
              </Grid>
              <SizedVBox />
              <Divider className="divider" />
              <SizedVBox />
              <Grid container item xs={12}>
                <Hidden smDown>
                  <Grid item md={3}>
                   
                  </Grid>
                </Hidden>
                <Grid item container md={9} xs={12}>
                  <SizedVBox  />
                  <RightColumns>
                    {renderSlider('memory_optimized', values, setValues)}
                    {renderPrice('memory_optimized', values)}
                  </RightColumns>
                  <Hidden smUp>
                    <Divider className="mobile-divider" />
                  </Hidden>
                  <SizedVBox  />
                  <RightColumns>
                    {renderSlider('cpu_optimized', values, setValues)}
                    {renderPrice('cpu_optimized', values)}
                  </RightColumns>
                  <Hidden smUp>
                    <Divider className="mobile-divider" />
                  </Hidden>
                  <SizedVBox />
                  <RightColumns>
                    {renderSlider('storage', values, setValues)}
                    {renderPrice('storage', values)}
                  </RightColumns>
                  <SizedVBox  />
                  {/* <RightColumns>
                    {renderSlider('memory_dedicated', values, setValues)}
                    {renderPrice('memory_dedicated', values)}
                  </RightColumns>
                  <SizedVBox size={12} />
                  <RightColumns>
                    {renderSlider('cpu_dedicated', values, setValues)}
                    {renderPrice('cpu_dedicated', values)}
                  </RightColumns> */}
                  <SizedVBox  />
                </Grid>
              </Grid>

              <SizedVBox />
              <Divider className="divider" />
              <SizedVBox />

              <Grid container item xs={12}>

                <Grid item md={3} xs={12}>
                  <SizedVBox />
                  
                </Grid>

                <Grid item container md={9} xs={12}>
                  <SizedVBox />
                  <RightColumns>
                    {renderSlider('bandwidth', values, setValues)}
                    {renderPrice('bandwidth', values)}
                  </RightColumns>
                  <Hidden smUp>
                    <Divider className="mobile-divider" />
                  </Hidden>
                  <SizedVBox  />
                  <RightColumns>
                    {renderSlider('build_time', values, setValues)}
                    {renderPrice('build_time', values)}
                  </RightColumns>
                  <SizedVBox />
                </Grid>
              </Grid>

              <SizedVBox  />
              <Divider className="divider" />
              <SizedVBox  />


              <div className="free-resources">
                <div className="free-resources-bg" />
                <Grid container item xs={12} className="wrapper">


                  <Grid item md={3} xs={12}>
                    <SizedVBox />
                    {renderService(CardGiftcardIcon, 'Free Resources', 'primary')}
                  </Grid>

                  <Grid item container md={9} xs={12}>
                    <SizedVBox  />
                    <RightColumns>
                      <Typography>
                        Keep your free tier resources with a $5 credit on Pay-as-you-go.
                        <a
                          href="https://docs.kintohub.com/anatomy/billing#pay-as-you-go-benefits"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {' '}See details
                        </a>
                      </Typography>
                      <Typography color="primary" variant="h6">-$5.00</Typography>
                    </RightColumns>
                    <SizedVBox />
                  </Grid>

                </Grid>
              </div>


              <SizedVBox  />
              <Divider className="divider" />
              <SizedVBox />

              <Grid container item xs={12}>
                <Grid item md={3} />
                <Grid item container md={9}>
                  <SizedVBox  />
                  <RightColumns>
                    <></>
                    <div className="column">
                      <Typography variant="body1">Estimated Monthly</Typography>
                      <Typography variant="h6">
                        {`$${
                          Math.max(0, Object
                            .keys(values)
                            .map(k => getCost(k, values))
                            .reduce((c, v) => c + v, -5)
                          ).toFixed(1)}`}
                      </Typography>
                    </div>
                  </RightColumns>
                  <SizedVBox  />
                </Grid>
              </Grid>
            </div>


          </Card>
        </StyledDiv>
  );
}
