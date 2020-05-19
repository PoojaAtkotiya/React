import * as React from "react";
import styles from "./Header.module.scss";


export interface IHeaderProps { }

export default class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <header>
        <div className={styles.inner}>
          {/* <a className={styles.logo} href="https://esmsyspvt.sharepoint.com/sites/Almatica/"><img alt="Almatica logo" src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/__sitelogo__Almatica Pharma Logo.jpg" /></a> */}
          <div className={styles.navigation + " " + styles.main}>
            <div className={styles.navwrap}>
              <ul>
                <li className="">
                  <a href="http://almatica.com/products" className="">Products</a>
                  <ul className="disill-navigation" >
                    <li className="">
                      <a href="http://almatica.com/products/product-overview" className="">Product Overview</a>
                    </li>
                    <li className="">
                      <a href="http://almatica.com/products/pharmacovigilance" className="">Pharmacovigilance</a>
                    </li>
                    <div className="cutout"><div style={{ width: "65.5px" }}></div><div style={{ width: "264.5px" }}>
                    </div>
                    </div>
                  </ul>
                </li>
                <li className="">
                  <a href="http://almatica.com/about-us" className="">About us</a>


                  <ul className="disill-navigation" >
                    <li className="">
                      <a href="http://almatica.com/about-us/company-overview" className="">Company overview</a>
                    </li>
                    <li className="">
                      <a href="http://almatica.com/about-us/our-management" className="">Meet our management</a>
                    </li>
                    <li className="">
                      <a href="http://almatica.com/about-us/contact-us" className="">Contact us</a>
                    </li>
                    <div className={styles.cutout}><div style={{ width: "63px" }}></div><div style={{ width: "267px;" }}></div></div></ul>
                </li>
                <li className="">
                  <a href="http://almatica.com/pipeline" className="">Pipeline</a>
                </li>
                <li className="">
                  <a href="http://almatica.com/patient-resources" className="">Patient resources</a>
                </li>
                <li className="">
                  <a href="http://almatica.com/partnering" className="">Partnering</a>
                </li>
              </ul>

            </div>
          </div>


          <a href="http://almatica.com/#" className="sidenav-toggle"><i className="icon-menu"></i></a>
        </div>

      </header>
    );
  }
}