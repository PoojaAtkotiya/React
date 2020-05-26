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
                  <li > <a href="#" >News and Events</a>
                    <ul className="disillnavigation">
                      <li > <a href="http://almatica.com/products/product-overview">Alerts</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllNews.aspx"} >News</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllAnnouncements.aspx"}>Announcements</a> </li>
                      <li > <a href={this.props.siteUrl + "/_layouts/15/Events.aspx"} >Key Events</a> </li>
                      <div className="cutout">
                        <div style={{ width: "77.5px" }}></div>
                        <div style={{ width: "162.5px" }}></div>
                      </div>
                      <div className="cutout">
                        <div style={{ width: "77.5px" }}></div>
                        <div style={{ width: "162.5px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#">Document Library</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/KPIExpectations/Forms/AllItems.aspx"} >KPI expectations</a> </li>
                      <li > <a href={this.props.siteUrl + "/BusinessUpdates/Forms/AllItems.aspx"} >Business Updates</a> </li>
                      <li > <a href={this.props.siteUrl + "/DevelopmentResourceCentre/Forms/AllItems.aspx"} >Development Resource Centre</a> </li>
                      <li > <a href={this.props.siteUrl + "/ICPlanOverview/Forms/AllItems.aspx"}>IC Plans</a> </li>
                      <li > <a href={this.props.siteUrl + "/ManagedCareUpdates/Forms/AllItems.aspx"}>Managed Care</a> </li>
                      <li > <a href={this.props.siteUrl + "/Veeva/Forms/AllItems.aspx"}>Veeva Reports</a> </li>
                      <div className="cutout">
                        <div style={{ width: "89px" }}></div>
                        <div style={{ width: "151px" }}></div>
                      </div>
                      <div className="cutout">
                        <div style={{ width: "89px" }}></div>
                        <div style={{ width: "151px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Training</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/ProductTraining/Forms/AllItems.aspx"} >Product</a> </li>
                      <li > <a href={this.props.siteUrl + "/SkillsTraining/Forms/AllItems.aspx"}>Skills</a> </li>
                      <li > <a href={this.props.siteUrl + "/ComplianceTraining/Forms/AllItems.aspx"} >Compliance</a> </li>
                      <li > <a href={this.props.siteUrl + "/ITTraining/Forms/AllItems.aspx"}>IT</a> </li>
                      <div className="cutout">
                        <div style={{ width: "53px" }}></div>
                        <div style={{ width: "187px" }}></div>
                      </div>
                      <div className="cutout">
                        <div style={{ width: "53px" }}></div>
                        <div style={{ width: "187px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li className="salesdivision"> <a href="#" >Sales Division </a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages/CorporateLeadership.aspx"}>Corporate Leadership and HQ List</a></li>
                      <li > <a href={this.props.siteUrl + "/SitePages/LeadershipTeam.aspx"} >Leadership Team</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/TopPerformance.aspx"}>Top Performers</a> </li>
                      <li > <a href={this.props.siteUrl + "/KeyOrganizationalPolicies"}>Organization Policies</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Corporate Benefits 1</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63.5px" }}></div>
                        <div style={{ width: "176.5px" }}></div>
                      </div>
                      <div className="cutout">
                        <div style={{ width: "63.5px" }}></div>
                        <div style={{ width: "176.5px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li className="adminmenu"> <a href="#" >Admin</a>
                    <ul className="disillnavigation">
                      <li > <a href={this.props.siteUrl + "/SitePages/Veeva.aspx"} >Veeva Imports</a> </li>
                      <li > <a href="http://almatica.com/about-us/our-management" >Roster Management</a> </li>
                      <li > <a href="http://almatica.com/about-us/contact-us" >Metrics</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/Archives.aspx"} >Archives</a> </li>
                      <div className="cutout">
                        <div style={{ width: "207.5px" }}></div>
                        <div style={{ width: "32.5px" }}></div>
                      </div>
                      <div className="cutout">
                        <div style={{ width: "207.5px" }}></div>
                        <div style={{ width: "32.5px" }}></div>
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
              <div className="top"> <a className="logo" href="index.html"><img alt="Almatica logo" src={this.props.siteUrl + "/SiteAssets/Images/almatica-logo.svg"} /></a> </div>
              <nav className="sidenav">
                <ul className="disillnavigation">
                  <li> <a href="#">News & Events </a>
                    <ul className="disillnavigation" >
                      <li > <a href="alert.html" >Alerts</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllNews.aspx"} >News</a> </li>
                      <li > <a href={this.props.siteUrl + "/SitePages/AllAnnouncements.aspx"} >Announcements</a> </li>
                      <li > <a href={this.props.siteUrl + "/_layouts/15/Events.aspx"} >Key Events</a> </li>
                      <div className="cutout">
                        <div style={{ width: "65.5px" }}></div>
                        <div style={{ width: "264.5px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Document Library</a>
                    <ul className="disillnavigation" >
                      <li > <a href={this.props.siteUrl + "/KPIExpectations/Forms/AllItems.aspx"} >KPI expectations</a> </li>
                      <li > <a href={this.props.siteUrl + "/BusinessUpdates/Forms/AllItems.aspx"} >Business Updates</a> </li>
                      <li > <a href={this.props.siteUrl + "/DevelopmentResourceCentre/Forms/AllItems.aspx"} >Development Resource Centre</a> </li>
                      <li > <a href={this.props.siteUrl + "/ICPlanOverview/Forms/AllItems.aspx"}>IC Plans</a> </li>
                      <li > <a href={this.props.siteUrl + "/ManagedCareUpdates/Forms/AllItems.aspx"}>Managed Care</a> </li>
                      <li > <a href={this.props.siteUrl + "/Veeva/Forms/AllItems.aspx"}>Veeva Reports</a> </li>
                      <div className="cutout">
                        <div style={{ width: "63px" }}></div>
                        <div style={{ width: "267px" }}></div>
                      </div>
                    </ul>
                  </li>
                  <li > <a href="#" >Training</a>
                    <ul className="disillnavigation" >
                      <li > <a href={this.props.siteUrl + "/ProductTraining/Forms/AllItems.aspx"} >Product</a> </li>
                      <li > <a href={this.props.siteUrl + "/SkillsTraining/Forms/AllItems.aspx"}>Skills</a> </li>
                      <li > <a href={this.props.siteUrl + "/ComplianceTraining/Forms/AllItems.aspx"} >Compliance</a> </li>
                      <li > <a href={this.props.siteUrl + "/ITTraining/Forms/AllItems.aspx"}>IT</a> </li>
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