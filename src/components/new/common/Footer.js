import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.footerContent}>
            <div>
              <div className={styles.branding}>
                <Image
                  height={20}
                  width={20}
                  src="https://placehold.co/40x40"
                  alt="Logo"
                  className={styles.logo}
                />
                <span className={styles.title1}>CadetUI</span>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    height={20}
                    width={20}
                    src="/static/Facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    height={20}
                    width={20}
                    src="/static/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    height={20}
                    width={20}
                    src="/static/twitter.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <Image
                    height={20}
                    width={20}
                    src="/static/linkdin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
            <div className={`${styles.links} ${styles.sports}`}>
              <h4>SPORTS</h4>
              <ul>
                <li>
                  <a href="#">Cricket</a>
                </li>
                <li>
                  <a href="#">Football</a>
                </li>
                <li>
                  <a href="#">WWE</a>
                </li>
                <li>
                  <a href="#" className={styles.new}>
                    Hockey
                  </a>
                </li>
                <li>
                  <a href="#">Kabaddi</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.links} ${styles.shop}`}>
              <h4>ONCRIC SHOP</h4>
              <ul>
                <li>
                  <a href="#">Brands</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Equipments</a>
                </li>
                <li>
                  <a href="#" className={styles.new}>
                    Sports Leagues
                  </a>
                </li>
                <li>
                  <a href="#">IPL</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.links} ${styles.support}`}>
              <h4>SUPPORT</h4>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Email Support</a>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Phone Support</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.links} ${styles.support}`}>
              <h4>ABOUT</h4>
              <ul>
                <li>
                  <a href="#">Company Info</a>
                </li>
                <li>
                  <a href="#">Brand Guidelines</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.legalLinks}>
              <a href="#">English</a>
              <span>•</span>
              <a href="#">Privacy</a>
              <span>•</span>
              <a href="#">Legal</a>
            </div>
            <div className={styles.copyright}>
              © 2023 ONCRIC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
