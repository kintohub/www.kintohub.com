import Footer from "components/Footer"
import NavBar from "components/NavBar"
import SEO from "components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "components/Layout"
import Grid from "@material-ui/core/Grid/Grid"
import { Card, MuiThemeProvider, Typography } from "@material-ui/core"
import { VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"

const StyledHeader = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.palette.primary.dark};
`
const Header = () => {
  return (
    <StyledHeader>
      <VerticalSpacer size={150} />
      <Typography variant="h2" align="center">
        Privacy Policy
      </Typography>
    </StyledHeader>
  )
}

const StyledPrivacyContainer = styled.div`
  width: 100%;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.contrastText};

  .card {
    border-radius: 16px;
    max-width: 75%;
    margin-top: -120px;
    ${bps.down("sm")} {
      max-width: 90%;
    }

    padding: 48px;
  }
`

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            name: "KintoHub",
            content: "Privacy Policy",
          },
        ]}
        title={"Privacy Policy"}
      />
      <StyledPrivacyContainer>
        <MuiThemeProvider theme={textThemeDark}>
          <Header />
          <Card className="card">
            <div>
              <p>
                We understand the significance of your privacy, which we are
                committed to protecting via our compliance with this Privacy
                Policy.
              </p>
              <p>
                Carefully read this Privacy Policy to understand our policies
                and practices concerning your information and how we will treat
                it. If you disagree with the Privacy Policy, don't register
                with, or use the Services. By registering with, or using the
                Services, you agree to this Privacy Policy. This Policy may be
                modified at any time, and your continued use of the Services
                after any modification will be deemed to be acceptance of those
                modifications, so ensure you check the Privacy Policy
                periodically for updates.
              </p>
            </div>
            <div>
              <VerticalSpacer size={8} />
              <h2>Personal identification information</h2>
              <p>
                We may receive personal identification information from Users
                via various methods, such as when a User visits the site,
                register, makes an order, and in line with other activities,
                services, features or resources that are available on our Site.
                When making an order, a User may be asked to submit his/her
                name, email address, phone number, mailing address, credit card
                information. However, a User may visit our Site anonymously. We
                will obtain personal identification information from Users only
                when they deliberately submit such information to us. Users are
                always free to refuse to provide personal identification
                information; however, in such a situation, that they may be
                prevented from engaging in some specific Site related
                activities.
              </p>
            </div>
            <VerticalSpacer size={8} />
            <div>
              <h2>How we use collected information</h2>
              <p>
                The various mailing lists, registration forms, special offers,
                downloads, contests, and surveys available on the Site may
                request that you provide us with contact information like your
                name, mailing and/or e-mail address, as well as demographic
                information like your gender and age, and even personal
                preference information like your preferred interests. All
                information submitted will be used by KintoHub only when
                necessary for its legitimate business interests, including with
                no limitation to the improvement of our products, services and
                the contents available on or through the Site.
              </p>
              <p>
                We may collect and use personal information for the purposes
                stated below:
              </p>
              <p>
                <strong>For payments processing</strong>
              </p>
              <p>
                We may use the information Users submit about themselves when
                making an order only to render service so as to fulfill that
                order. We don’t share, transmit or distribute the information we
                get to any third party unless to the degree necessary to render
                the service.
              </p>
              <p>
                <strong>For sending periodic emails</strong>
              </p>
              <p>
                We may use the email address submitted to send User information
                and any updates concerning orders or our products and services.
                Also, it may be used to send feedback to any inquiry, question,
                and/or other requests.
              </p>
              <p>
                <strong>For login</strong>
              </p>
              <p>
                We may use the information Users submit for any login to access
                and engage in digital courses.
              </p>
            </div>
            <VerticalSpacer size={8} />
            <div>
              <h2>How we safeguard your information</h2>
              <p>
                We employ proper data collection, storage and processing methods
                and security measures to safeguard against unauthorized access,
                change, disclosure or damage of your personal information (which
                includes your username, password, transaction information), and
                any data stored and secured on the Site.
              </p>
            </div>
            <VerticalSpacer size={8} />
            <div>
              <h2>Disclosure</h2>
              <p>
                We may disclose personal data about you to others for the
                following reasons: (a) if you offer us your valid consent to do
                so; (b) to comply with an appropriate subpoena, court order,
                legal order, legal process, or any legal obligation; (c) to
                implement any of our terms or policies.
              </p>
              <p>
                Also, we may transfer your personal data to an affiliate, a
                subsidiary or a third party during any merger, reorganization,
                sale, joint venture, assignment, transfer or other disposition
                of any aspect of our business, assets or stock, including with
                no limitation, in line with any bankruptcy or related
                proceeding, given that any such entity that we transfer any
                personal data to will not be allowed to process your personal
                data except as stated in this Policy without giving you notice
                and, if compelled by applicable laws, getting your consent.
              </p>
            </div>
            <VerticalSpacer size={8} />
            <div>
              <h2>Cookies Policy</h2>
              <p>
                Our Site may use “cookies” to improve the User experience.
                User’s web browser inserts cookies on their hard drive for the
                sake of record-keeping and sometimes to track information on
                them. The user may decide to set their web browser to reject
                cookies, or to inform them when cookies are being sent. If they
                do so, note that some aspects of the Site may not function
                properly.
              </p>
            </div>
            <VerticalSpacer size={8} />
            <div>
              <h2>Links</h2>
              <p>
                The Site may regularly contain links to the sites of our partner
                networks, affiliates and advertisers. If you click on any link
                to any of these sites, never forget that these sites have their
                own privacy policies (and even terms and conditions), and that
                we don’t accept any form of responsibility or liability for
                these sites or their policies. Kindly check the policies of
                these sites before you submit any personal data to the sites.
              </p>
            </div>
            <VerticalSpacer size={8} />{" "}
            <div>
              <h2>
                Access or Change Your Personal Data and Data Subject Rights
              </h2>
              <p>
                KintoHub understands that you may want to change, access or
                delete your Personal Data. You may do so by accessing your
                profile or by contacting us. To protect your privacy and
                security, we will verify your identity before accepting a
                request, granting access or making changes to your Personal
                Data. Any request to access your Personal Data will be answered
                within 30 days of verifying your request. If you have created a
                profile on any of the services available on our Site, your
                e-mail address and password are required so as to access your
                profile information.
              </p>
              <p>
                You may have particular rights under local legislation to: (i)
                request access to your Personal Data; (ii) request correction of
                your Personal Data; (iii) request erasure of your Personal Data;
                (iv) request limitation of processing of your Personal Data; (v)
                request data portability; (vi) object to the processing of your
                Personal Data.
              </p>
              <p>
                We will retain your information for as long as your account is
                active or as required to offer you the services. Additionally,
                we will retain and use your information as necessary to comply
                with our legal obligations, settle disputes, and implement our
                agreements.
              </p>
            </div>
            <VerticalSpacer size={8} />{" "}
            <div>
              <h2>Changes to this privacy policy</h2>
              <p>
                We reserve the right to update or modify this privacy policy at
                any time based on sole discretion. When we do, we will modify
                the updated date at the bottom of this page. We advise Users to
                constantly check this page for any modifications to stay updated
                on how we protect the personal information we get. You accept
                that it is your sole responsibility to go through this privacy
                policy regularly and become aware of any changes.
              </p>
            </div>
          </Card>
          <VerticalSpacer size={100} />
        </MuiThemeProvider>
      </StyledPrivacyContainer>
    </Layout>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet htmlAttributes={{ lang: "en" }} title={"Kintohub"} />
        <NavBar />
        <PrivacyPolicy />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
