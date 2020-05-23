import * as React from "react";
import styles from "./Header.module.scss";

export interface IHeaderProps {
  siteUrl: string;
}

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render(): React.ReactElement<IHeaderProps> {
    return (
      <header className={styles.header}>
        <div className={styles.inner}> <a className={styles.logo} href={this.props.siteUrl}><img alt="Almatica logo" src={this.props.siteUrl + "/SiteAssets/Images/almatica-logo.svg"} /></a>
          <div className={styles.navigation + " " + styles.main}>
            <div className={styles.navwrap}>
              <ul>
                <li className={styles.alertmenu}><a href="#"><img src={this.props.siteUrl + "/SiteAssets/Images/alert.png"} alt="" /><span>1</span></a> </li>
                <li > <a href="http://almatica.com/products" >News and Events</a>
                  <ul className={styles.disillnavigation}>
                    <li > <a href="http://almatica.com/products/product-overview">Alerts</a> </li>
                    <li > <a href={this.props.siteUrl + "/SitePages/AllNews.aspx"} >News</a> </li>
                    <li > <a href={this.props.siteUrl + "/SitePages/AllAnnouncements.aspx"}>Announcements</a> </li>
                    <li > <a href="" >Key Events</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "65.5px;" }}></div>
                      <div style={{ width: "264.5px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li > <a href="#" >Document Library</a>
                  <ul className={styles.disillnavigation}>
                    <li > <a href={this.props.siteUrl + "/KPIExpectations"} >KPI expectations</a> </li>
                    <li > <a href={this.props.siteUrl + "/BusinessUpdates"} >Business Updates</a> </li>
                    <li > <a href={this.props.siteUrl + "/DevelopmentResourceCentre"} >Development Resource Centre</a> </li>
                    <li > <a href={this.props.siteUrl + "/ICPlanOverview"}>IC Plans</a> </li>
                    <li > <a href={this.props.siteUrl + "/ManagedCareUpdates"}>Managed Care</a> </li>
                    <li > <a href={this.props.siteUrl + "/Veeva"}>Veeva Reports</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px" }}></div>
                      <div style={{ width: "267px" }}></div>
                    </div>
                  </ul>
                </li>
                <li > <a href="http://almatica.com/about-us" >Training</a>
                  <ul className={styles.disillnavigation}>
                    <li > <a href="http://almatica.com/about-us/company-overview" >Product</a> </li>
                    <li > <a href="http://almatica.com/about-us/our-management" >Skills</a> </li>
                    <li > <a href="http://almatica.com/about-us/contact-us" >Compliance</a> </li>
                    <li > <a href="http://almatica.com/about-us/contact-us" >IT</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px;" }}></div>
                      <div style={{ width: "267px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li className={styles.salesdivision}> <a href="" >Sales Division </a>
                  <ul className={styles.disillnavigation}>
                    <li > <a href={this.props.siteUrl + "/SitePages/CorporateLeadership.aspx"}>Corporate Leadership and HQ List</a></li>
                    <li > <a href={this.props.siteUrl + "/SitePages/LeadershipTeam.aspx"} >Leadership Team</a> </li>
                    <li > <a href={this.props.siteUrl + "/SitePages/TopPerformance.aspx"}>Top Performers</a> </li>
                    <li > <a href={this.props.siteUrl + "/KeyOrganizationalPolicies"}>Organization Policies</a> </li>
                    <li > <a href="http://almatica.com/about-us/contact-us" >Corporate Benefits 1</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px;" }}></div>
                      <div style={{ width: "267px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li className={styles.adminmenu}> <a href="http://almatica.com/about-us" >Admin</a>
                  <ul className={styles.disillnavigation}>
                    <li > <a href={this.props.siteUrl + "/Veeva"} >Veeva Imports</a> </li>
                    <li > <a href="http://almatica.com/about-us/our-management" >Roster Management</a> </li>
                    <li > <a href="http://almatica.com/about-us/contact-us" >Metrics</a> </li>
                    <li > <a href={this.props.siteUrl + "/Archives"} >Archives</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px;" }}></div>
                      <div style={{ width: "267px;" }}></div>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <a href="#" className={styles.sidenavtoggle}><i className={styles.iconmenu}></i></a>
          <div className={styles.alertmenu + " " + styles.mobileshow}><a href="#"><img src={this.props.siteUrl + "/SiteAssets/Images/alert.png"} alt="" /><span>1</span></a> </div>
        </div>
      </header>
    );
  }
}