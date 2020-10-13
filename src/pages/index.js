import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"
import Button from '@material-ui/core/Button';

const CustomBox = styled.div`
  border: 8px solid rgb(0, 143, 104);
  padding: 20px;

  h3 {
    color: rgb(109, 182, 91);
    margin: 0 0 10px;
    padding: 0;
  }
`

class HomePage extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[
            {
              name: "KintoHub",
              content: "Sample page",
            },
          ]}
          title={'Kintohub'}
        />

        <section>
          <h2>Styled Components Demo</h2>

          <CustomBox>
            <h3>New Website</h3>
            <p>This is a sample of styled components.</p>
            <Button variant="contained">Material button works too</Button>
          </CustomBox>
        </section>
      </Layout>
    )
  }
}

export default HomePage
