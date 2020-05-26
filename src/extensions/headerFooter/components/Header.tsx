import * as React from "react";
//import styles from "./Header.module.scss";

export interface IHeaderProps {
  siteUrl: string;
}

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div className="pagewrap">

        <header className="header">
          <div className="inner"> <a className="logo" href={this.props.siteUrl}><img alt="Almatica logo" src={this.props.siteUrl + "/SiteAssets/Images/almatica-logo.svg"} /></a>
            <div className="navigation main">
              <div className="navwrap">
                <ul>
                  <li className="alertmenu"><a href="#"><img src={this.props.siteUrl + "/SiteAssets/Images/alert.png"} alt="" /><span>1</span></a> </li>
                  <li > <a href="http://almatica.com/products" >News and Events</a>
                    <ul className="disillnavigation">
                      <li > <a href="http://almatica.com/products/product-overview">Alerts</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllNews.aspx"} >News</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllAnnouncements.aspx"}>Announcements</a> </li>
                      <li > <a href="" >Key Events</a> </li>
                      <div className="cutout">
                        <div style={{ width: "65.5px" }}></div>
                        <div style={{ width: "264.5px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Document Library</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages/KPIExpectations.aspx?"} >KPI expectations</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/BusinessUpdates.aspx"} >Business Updates</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/DevelopmentResourceCentre.aspx"} >Development Resource Centre</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/ICPlanOverview.aspx"}>IC Plans</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/ManagedCareUpdates.aspx"}>Managed Care</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/Veeva.aspx"}>Veeva Reports</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="http://almatica.com/about-us" >Training</a>
                    <ul className="disillnavigation">
                      <li > <a href="http://almatica.com/about-us/company-overview" >Product</a> </li>
                      <li > <a href="http://almatica.com/about-us/our-management" >Skills</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Compliance</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >IT</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li className="salesdivision"> <a href="" >Sales Division </a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages/CorporateLeadership.aspx"}>Corporate Leadership and HQ List</a></li>
                      <li > <a href={this.props.siteUrl + "/SitePages/LeadershipTeam.aspx"} >Leadership Team</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/TopPerformance.aspx"}>Top Performers</a> </li>
                      <li > <a href={this.props.siteUrl + "/KeyOrganizationalPolicies"}>Organization Policies</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Corporate Benefits 1</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li className="adminmenu"> <a href="http://almatica.com/about-us" >Admin</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages//Veeva.aspx"} >Veeva Imports</a> </li>
                      <li > <a href="http://almatica.com/about-us/our-management" >Roster Management</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Metrics</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/Archives.aspx"} >Archives</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#" className="sidenavtoggle"><i className="icon-menu"></i></a>
            <div className="alertmenu mobileshow"><a href="#"><img src={this.props.siteUrl + "/SiteAssets/Images/alert.png"} alt="" /><span>1</span></a> </div>
          </div>
        </header>



        <aside className="sidebar" style={{ height: "576px" }}>
          <div className="nano has_scrollbar">
            <div className="content" style={{ right: "-17px" }}>
              <div className="top"> <a className="logo" href="index.html"><img alt="Almatica logo" src="images/almatica-logo.svg" /></a> </div>
              <nav className="sidenav">
                <ul className="disillnavigation">
                  <li> <a href="#">News & Events </a>
                    <ul className="disillnavigation" >
                      <li > <a href="alert.html" >Alerts</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllNews.aspx"} >News</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllAnnouncements.aspx"} >Announcements</a> </li>
                      <li > <a href="#" >Key Events</a> </li>
                      <div className="cutout">
                        <div style={{ width: "65.5px" }}></div>
                        <div style={{ width: "264.5px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Document Library</a>
                    <ul className="disillnavigation" >
                      <li > <a href={this.props.siteUrl + "/SitePages/KPIExpectations.aspx?"} >KPI expectations</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/BusinessUpdates.aspx"} >Business Updates</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/DevelopmentResourceCentre.aspx"} >Development Resource Centre</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/ICPlanOverview.aspx"}>IC Plans</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/ManagedCareUpdates.aspx"}>Managed Care</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/Veeva.aspx"}>Veeva Reports</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Training</a>
                    <ul className="disillnavigation" >
                      <li > <a href="http://almatica.com/about-us/company-overview" >Product</a> </li>
                      <li > <a href="http://almatica.com/about-us/our-management" >Skills</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Compliance</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >IT</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Sales Division</a>
                    <ul className="disillnavigation" >
                      <li > <a href={this.props.siteUrl + "/SitePages/CorporateLeadership.aspx"}>Corporate Leadership and HQ List</a></li>
                      <li > <a href={this.props.siteUrl + "/SitePages/LeadershipTeam.aspx"} >Leadership Team</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/TopPerformance.aspx"}>Top Performers</a> </li>
                      <li > <a href={this.props.siteUrl + "/KeyOrganizationalPolicies"}>Organization Policies</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Corporate Benefits 1</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" className="adminmenu">Admin</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages/Veeva.aspx"} >Veeva Imports</a> </li>
                      <li > <a href="http://almatica.com/about-us/our-management" >Roster Management</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Metrics</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/Archives.aspx"} >Archives</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="pane" style={{ display: "none" }}>
              <div className="slider" style={{ height: "20px" }}></div>
            </div>
          </div>

        </aside>


      </div>

    );
  }
}