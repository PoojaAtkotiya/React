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
                        <div className={styles.grid + " " + styles.gutter + " " + styles.collapse720}>

                            <div className={styles.col + " " + styles.s1of2}>
                                <div className={styles.footerLeft}>
                                    <div>
                                        <ul>
                                            <li><a href="http://almatica.com/about-us/contact-us/">Contact Almatica</a></li>
                                            <li><a href="http://almatica.com/terms-of-use/">Terms of use</a></li>
                                            <li><a href="http://almatica.com/privacy-policy/">Privacy policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.col + " " + styles.s1of2}>
                                <div className={styles.footerRight}>

                                    <div>
                                        <p><img src="images/almatica-pharma-logo-white-margin.jpg" alt="" data-description="" width="274" /></p>
                                        <p>© Almatica Pharma LLC is an affiliate of Alvogen Malta Operations Ltd. <br />© 2020 Alvogen Malta Operations Ltd. All rights reserved. ALM-WWW-002</p>
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