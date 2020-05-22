import * as React from "react";
import styles from "./Header.module.scss";


export interface IHeaderProps { }

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <header className={styles.header}>
        <div className={styles.inner}> <a className={styles.logo} href="https://esmsyspvt.sharepoint.com/sites/Almatica/"><img alt="Almatica logo" src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/almatica-logo.svg" /></a>
          <div className={styles.navigation +" "+ styles.main}>
            <div className={styles.navwrap}>
              <ul>
                <li className={styles.alertmenu}><a href="#"><img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/alert.png" alt="" /><span>1</span></a> </li>
                <li className=""> <a href="http://almatica.com/products" className="">News and Events</a>
                  <ul className={styles.disillnavigation}>
                    <li className=""> <a href="http://almatica.com/products/product-overview" className="">Alerts</a> </li>
                    <li className=""> <a href="http://almatica.com/products/pharmacovigilance" className="">News</a> </li>
                    <li className=""> <a href="annoucement.html" className="">Announcements</a> </li>
                    <li className=""> <a href="http://almatica.com/products/pharmacovigilance" className="">Key Events</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "65.5px;" }}></div>
                      <div style={{ width: "264.5px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li className=""> <a href="document-library.html" className="">Document Library</a>
                  <ul className={styles.disillnavigation}>
                    <li className=""> <a href="http://almatica.com/about-us/company-overview" className="">KPI expectations</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/our-management" className="">Business Updates</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Development Resource Centre</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">IC Plans</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Managed Care</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Veeva Reports</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px" }}></div>
                      <div style={{ width: "267px" }}></div>
                    </div>
                  </ul>
                </li>
                <li className=""> <a href="http://almatica.com/about-us" className="">Training</a>
                  <ul className={styles.disillnavigation}>
                    <li className=""> <a href="http://almatica.com/about-us/company-overview" className="">Product</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/our-management" className="">Skills</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Compliance</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">IT</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px;" }}></div>
                      <div style={{ width: "267px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li className={styles.salesdivision}> <a href="http://almatica.com/about-us" className="">Sales Division </a>
                  <ul className={styles.disillnavigation}>
                    <li className=""> <a href="key-contacts-hqlist.html" className="">Key Contacts and HQ List</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/our-management" className="">Leadership Team</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Top Performers</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Organization Policies</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Corporate Benefits 1</a> </li>
                    <div className={styles.cutout}>
                      <div style={{ width: "63px;" }}></div>
                      <div style={{ width: "267px;" }}></div>
                    </div>
                  </ul>
                </li>
                <li className={styles.adminmenu}> <a href="http://almatica.com/about-us" className="">Admin</a>
                  <ul className={styles.disillnavigation}>
                    <li className=""> <a href="http://almatica.com/about-us/company-overview" className="">Veeva Imports</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/our-management" className="">Roster Management</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Metrics</a> </li>
                    <li className=""> <a href="http://almatica.com/about-us/contact-us" className="">Archives</a> </li>
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
          <div className={styles.alertmenu +" "+styles.mobileshow}><a href="#"><img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/alert.png" alt="" /><span>1</span></a> </div>
        </div>
      </header>
    );
  }
}