import * as React from "react";
import styles from "./Header.module.scss";


export interface IFooterProps { }

export default class Footer extends React.Component<IFooterProps> {
    constructor(props: IFooterProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <footer className={styles.footer}>
                <section className={styles.section + " " + styles.blue}>
                    <div className={styles.inner}>
                        <div className={styles.grid + " " + styles.collapse720 +" " + styles.footertwocolumn}>
                            <div className={styles.s1of2 + " " +styles.footerleftnew}>
                                <div className={styles.footerLeft}>
                                    <div className={styles.footerLeftTop}>
                                        <div>
                                        <ul>
                                            <li><a href="#"><i className="far fa-envelope"></i> ALMATICA</a></li>
                                            <li><a href="#"><i className="far fa-envelope"></i> IT HELP</a></li>
                                        </ul>
                                            {/* <ul>
                                                <li><a href="http://almatica.com/about-us/contact-us/">Contact Almatica</a></li>
                                                <li><a href="http://almatica.com/terms-of-use/">Terms of use</a></li>
                                                <li><a href="http://almatica.com/privacy-policy/">Privacy policy</a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    {/* <div className={styles.footerLeftBottom}>
                                        <h5>CONTACT</h5>
                                        <ul>
                                            <li><a href="#"><i className="far fa-envelope"></i> ALMATICA</a></li>
                                            <li><a href="#"><i className="far fa-envelope"></i> IT HELP</a></li>
                                        </ul>

                                    </div> */}
                                </div>
                            </div>
                            <div className={styles.s1of2 + " " + styles.footerrightnew }>
                                <div className={styles.footerRight}>
                                    <div>
                                        {/* <p><img src="https://esmsyspvt.sharepoint.com/sites/Almatica/SiteAssets/Images/almatica-pharma-logo-white-margin.jpg" alt="" data-description="" width="274" /></p> */}
                                        Please note that Yellow Pages contains proprietary and confidential information owned by Almatica. Unauthorized disclosures and other misuse of company owned information may result in sanctions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>


        );
    }
}