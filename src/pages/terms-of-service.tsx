import Footer from "components/Footer"
import NavBar from "components/NavBar"
import SEO from "components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "components/Layout"
import { Card, MuiThemeProvider, Typography } from "@material-ui/core"
import { VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"

const StyledHeader = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.palette.primary.light};
`
const Header = () => {
  return (
    <StyledHeader>
      <VerticalSpacer size={150} />
      <Typography variant="h2" align="center">
        Terms of Service
      </Typography>
    </StyledHeader>
  )
}

const StyledTosContainer = styled.div`
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

const TermsOfService = () => {
  return (
    <Layout>
      <SEO
        title="Terms Of Service"
        keywords={[`kintohub`, `terms of service`, `TOS`]}
      />
      <StyledTosContainer>
        <MuiThemeProvider theme={textThemeDark}>
          <Header />
          <Card className="card">
            <div>
              <div>
                <p>
                  THE TERMS AND CONDITIONS (“TERMS”) HEREIN ARE A LEGAL, BINDING
                  AGREEMENT BETWEEN KINTOHUB (“KINTOHUB” OR “WE”), AND YOU, THE
                  USER OF THE SERVICES FROM US OR VIA OUR WEBSITE (“USER” OR
                  “YOU”). ACCEPTANCE OF THE TERMS HEREIN IS A CONDITION TO YOUR
                  USE OF THE WEBSITE AND ANY OF OUR SERVICES, AND TO OUR
                  PROVISION OF THE SERVICES TO YOU. YOU ACCEPT THAT EACH
                  INTERACTION BETWEEN YOU AND THE WEBSITE, AND EACH REQUEST FOR
                  OR DELIVERY OF OUR SERVICES IS SUBJECT TO THE TERMS HEREIN. IF
                  YOU DISAGREE WITH ANY OR ALL OF THE TERMS HEREIN YOU MAY NOT
                  USE OUR SERVICES OR ACQUIRE ANY OF OUR SERVICES FROM US AND
                  SHOULD NOT ACCESS OUR WEBSITE.
                </p>
                <VerticalSpacer size={8} />{" "}
                <div>
                  <h2>Eligibility to Use the Site</h2>
                  <p>
                    You may be able to view the Content on the Site without
                    registering, but as to access or use some parts of the
                    Services, you may have to register on the Site and set up an
                    account. This process involves selecting a username and a
                    password. When creating an account, you warrant that:{" "}
                  </p>
                  <ul>
                    <li>
                      <p>
                        (a) all information you submit is correct, current, and
                        complete;
                      </p>
                    </li>
                    <li>
                      <p>
                        (b) your use of the Services doesn't violate any
                        applicable law, rule or regulation; and
                      </p>
                    </li>
                    <li>
                      <p>
                        (c) you're at least 13 years old (or the legal age in
                        your jurisdiction) or have gotten parental consent and
                        supervision before using the Services, and your parent
                        or legal guardian have also agreed to be bound by this
                        Agreement and agreed to be responsible for your use of
                        the Services.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Based on sole discretion, we retain the right to suspend or
                    terminate your account, and your use of the Site at any
                    time, for any reason.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Accessing our Site</h2>
                  <p>
                    Access to our Site is allowed on only a temporary basis.
                    KintoHub retains every right to withdraw, suspend or modify
                    the Site (as well as any products and/or services obtainable
                    on it) without any form of notice. From time to time,
                    KintoHub updates its Site, and may change the content at any
                    time without any form of notice to you. KintoHub will not be
                    liable in any way if for any reason our Site or any aspect
                    of it becomes unavailable at any time.
                  </p>
                  <p>
                    You are completely responsible for making all necessary
                    arrangements required to access and view the Site. You are
                    completely responsible for ensuring that anyone accessing
                    our Site via your internet connection is aware of the Terms.
                  </p>
                  <p>
                    KintoHub specifically retains the right to withdraw access
                    to its Site and/or cancel any order if that you fail any
                    credit or fraud prevention check, or where we reasonably
                    suspect fraud or money laundering by you or anyone using
                    your account.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Network Access and Devices</h2>
                  <p>
                    You are responsible for getting the data network access you
                    need to use the Site. Your mobile network’s data and
                    messaging rates and fees may be applicable if you access or
                    use the Site from a wireless-enabled device, and you shall
                    be responsible for any such rates and fees. You are
                    completely responsible for obtaining and updating compatible
                    hardware or devices you need to access and use the Site and
                    any updates thereto. We do not guarantee that the Site, or
                    any aspect thereof, will function on any particular hardware
                    or devices. Additionally, the Site may be subject to
                    malfunctions and delays inherent in the use of the Internet
                    and electronic communications.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Electronic Communications</h2>
                  <p>
                    By using the Services, you agree to get electronic
                    communications including with no limitation to notifications
                    as regards the Services. The electronic communication is a
                    part of your relationship with us.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Your Use of Content</h2>
                  <p>
                    Aside from the general restrictions above, the following
                    restrictions and conditions apply in particular to your use
                    of Content.
                  </p>
                  <p>
                    The Content on the Services, and the trademarks, service
                    marks and logos ("Marks") on the Service, are owned by or
                    licensed to KintoHub, subject to copyright and other
                    intellectual property rights under the appropriate law.
                  </p>
                  <p>
                    You shall not copy, distribute, reproduce, transmit,
                    display, broadcast, sell, re-sell, license, or otherwise
                    exploit any Content for any other purposes without any prior
                    written permission of KintoHub or the respective licensors
                    of the Content. KintoHub and its licensors retain the rights
                    not expressly granted in and to the Services and the
                    Content.
                  </p>
                  <p>
                    You agree not to disable, circumvent or otherwise hamper
                    security-related features of the Services or features that
                    limit or impede using or copying of any Content or implement
                    limitations on the use of the Services or the Content
                    within.
                  </p>
                  <p>
                    You understand that when you use the Services, you will be
                    exposed to Content from different sources, and that KintoHub
                    is not responsible for the correctness, safety, usefulness,
                    or intellectual property rights of or regarding such
                    Content. Also, you understand that you may be exposed to
                    Content that is incorrect, indecent, offensive, or
                    objectionable, and you agree to waive all legal or equitable
                    rights or remedies you may have against KintoHub with
                    respect to it, and, to the extent permitted by appropriate
                    law, agree to indemnify and hold harmless KintoHub, its
                    owners, operators, licensors, affiliates, and licensees to
                    the highest extent permitted by law as regards all matters
                    in connection to your use of the Services.
                  </p>
                </div>{" "}
                <VerticalSpacer size={8} />
                <div>
                  <h2>Limitation of Use</h2>
                  <ul>
                    <li>
                      <p>
                        Sending unsolicited messages or use the Site or Services
                        to send unsolicited messages (also known as junk mail or
                        SPAM).
                      </p>
                    </li>

                    <li>
                      <p>
                        The renting, leasing, loaning, or selling of access to,
                        or otherwise attempting to transfer any right in the
                        Site (which includes its software and documentation) to
                        a third party, through framing or any other method.
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to reverse engineer, reverse assemble, or
                        otherwise attempt to discover any programming code used
                        in or with the Services or Site (where reverse
                        engineering is permitted by applicable law getting such
                        information as is necessary to achieve interoperability
                        with our services, you agree to first requested such
                        information from us).
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to modify, make derivative works based on or
                        in any way commercially exploit the Site or Services, in
                        whole or in part.
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to interfere with or disrupt the Services or
                        Site or any part thereof, or create an undue burden on
                        the site or the networks or services connected to the
                        Site.
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to introduce software or automated agents or
                        scripts into the Site in order to produce multiple
                        accounts, generate automated searches, requests or
                        queries, or to strip or mine content or data from the
                        Site.
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to perform any benchmark tests or analyses
                        relating to Site or Services without express permission
                        of KintoHub.
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to access the Site using automated methods,
                        and any other use of robots or other computer code
                      </p>
                    </li>

                    <li>
                      <p>
                        Any attempt to undermine the security or integrity of
                        computing systems or networks of KintoHub, its partners,
                        or any other person
                      </p>
                    </li>

                    <li>
                      <p>Any attempt to gain unauthorized access.</p>
                    </li>
                  </ul>
                  <p>
                    Violations by you or anyone or entity acting under your
                    account of the terms of this Agreement will, alongside any
                    other remedies including criminal prosecution, lead to the
                    termination of your access to the Site and removal (taking
                    down) of all projects.
                  </p>
                </div>{" "}
                <VerticalSpacer size={8} />
                <div>
                  <h2>Warranties & Disclaimer</h2>
                  <p>
                    THE SITE AND ALL CONTENT, SOFTWARE AND SERVICES OFFERED VIA
                    IT ARE MADE AVAILABLE TO YOU “AS IS” AND “AS AVAILABLE”, AND
                    KINTOHUB EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS
                    OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PRECISE PURPOSE, AND NON-INFRINGEMENT.
                    KINTOHUB DOES NOT WARRANT THAT THE SITE OR SERVICES WILL BE
                    UNINTERRUPTED OR ERROR-FREE; NOR DOES KINTOHUB MAKE ANY
                    WARRANTY AS TO THE RESULTS THAT MAY BE ACQUIRED FROM USE OF
                    THE SITE OR ITS CONTENT OR THE SERVICES. KINTOHUB HAS NO
                    OBLIGATION TO MONITOR, CONTROL, OR SCRUTINISE USER CONTENT
                    OR DATA, AND KINTOHUB MAKES NO CLAIMS OR WARRANTIES ABOUT
                    THE QUALITY, CORRECTNESS, OR RELIABILITY OF THE SITE
                    CONTENT, SOFTWARE AND SOLUTIONS PROVIDED VIA THE SITE, ITS
                    SAFETY OR SECURITY, OR THE SITE’S INTEROPERABILITY,
                    UNAVAILABILITY OR SECURITY VULNERABILITIES.
                  </p>
                  <p>
                    SOME JURISDICTIONS MAY DISALLOW A DISCLAIMER OF WARRANTIES
                    AND YOU MAY HAVE OTHER RIGHTS THAT DIFFER FROM JURISDICTION
                    TO JURISDICTION.
                  </p>
                </div>{" "}
                <VerticalSpacer size={8} />
                <div>
                  <h2>Indemnification</h2>
                  <p>
                    You agree to indemnify, defend and hold harmless KintoHub
                    and its members, affiliates, officers, directors, assigns
                    and successors from and against all liabilities, costs,
                    damages and expenses (including reasonable attorney’s fees)
                    arising out of a third party claim or investigation
                    regarding your, your affiliates’, or your or their
                    employees’, agents’ or contractors’ activities pertaining to
                    the use of the Site or Services.
                  </p>
                </div>{" "}
                <VerticalSpacer size={8} />
                <div>
                  <h2>Disclaimer and Limitations of Liability</h2>
                  <p>
                    AS A CONDITION TO PROVIDING YOU WITH OUR SERVICES, WE BOTH
                    AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, KINTOHUB
                    WILL NOT BE LIABLE TO YOU, YOUR AFFILIATES OR RESPECTIVE
                    AGENTS OR CONTRACTORS OR ANY THIRD PARTY, NOTWITHSTANDING
                    THE ACTION OR CAUSE, FOR: (i) ANY INDIRECT, SPECIAL,
                    EXEMPLARY, CONSEQUENTIAL OR RELIANCE DAMAGES ARISING FROM
                    ANY SERVICES, ANY INFORMATION WE OFFER YOU IN CONNECTION
                    THEREWITH, THE TERMS HEREIN OR ANY MATTERS RELATING THERETO,
                    INCLUDING WITH NO LIMITATION TO LOSS OF REVENUES, BUSINESS
                    OPPORTUNITY, DATA OR PROFITS, EVEN IF EARLIER ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES; OR (ii) ANY DAMAGES OF ANY
                    KIND, IN THE AGGREGATE AT ANY TIME, IN EXCESS OF THE AMOUNT
                    PAID BY YOU TO US FOR THE SERVICES UNDER THE TERMS HEREIN IN
                    THE MOST RECENT THREE (3) MONTH PERIOD. THE LIMITATIONS AND
                    EXCLUSIONS OF LIABILITY HERE SHALL APPLY EQUALLY FOR THE
                    BENEFIT OF KINTOHUB’S OFFICERS, EMPLOYEES, CONTRACTORS,
                    REPRESENTATIVES AND AFFILIATES WHEN ACTING IN LINE WITH THE
                    SUBJECT MATTER OF THE TERMS HEREIN.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Termination</h2>
                  <p>
                    Either party may terminate this relationship at any time by
                    discontinuing any of the services. These terms will survive
                    termination for any reason, and continue to apply
                    indefinitely regarding all matters about services or their
                    use, including with no limitation to the use restrictions,
                    indemnification, warranties and limitation of liability,
                    mandatory arbitration provided here.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Mandatory Arbitration</h2>
                  <p>
                    The terms here are governed by the laws of the United
                    States. You and we agree to settle any disputes regarding
                    the terms, any services exclusively by binding arbitration,
                    before a single arbitrator, in line with the rules of the
                    American Arbitration Association. The seat of the
                    arbitration will be within the jurisdiction where the
                    defending party resides. The arbitrator shall be chosen in
                    line with the AAA rules, or otherwise as mutually agreed by
                    both parties. To initiate the arbitration process, a party
                    must create a written demand therefor. The decision of the
                    arbitrator may be implemented in any relevant court of
                    competent jurisdiction.
                  </p>
                </div>
                <VerticalSpacer size={8} />
                <div>
                  <h2>Miscellaneous</h2>
                  <p>
                    We don’t recommend or endorse the products or/and services
                    of any third party. KintoHub isn’t responsible for any
                    products or services you may purchase or obtain from the
                    third parties who receive your information.
                  </p>

                  <p>
                    We are an independent contractor; this means that you and we
                    are not by this agreement in a relationship of joint
                    venturers, agency or partners, and neither party has the
                    power to bind or obligate the other in any kind of way. If
                    any stipulation of this agreement is deemed to be illegal,
                    invalid or unenforceable, in part or in whole, the legality,
                    validity and enforceability of any of the remaining
                    stipulations of this agreement shall not in any manner be
                    affected or impaired thereby and this agreement shall
                    nonetheless be binding between the parties, and such
                    stipulation shall be considered to be restated to show as
                    nearly as possible the original intensions of the parties in
                    line with relevant law, and the remainder of the agreement
                    shall be and remain in full force and effect.
                  </p>
                  <p>
                    You may not assign nor transfer the services or the terms
                    herein, without KintoHub’s prior written permission, and any
                    attempted assignment or transfer without such permission
                    shall be null and void.
                  </p>
                  <p>
                    KintoHub reserves the right to update or modify the terms
                    herein at any time based on sole discretion. You are advised
                    to constantly check this page for any modifications
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <VerticalSpacer size={100} />
        </MuiThemeProvider>
      </StyledTosContainer>
    </Layout>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet htmlAttributes={{ lang: "en" }} title={"Kintohub"} />
        <NavBar />
        <TermsOfService />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
