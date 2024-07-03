import React, { Component } from "react";
import icon from "../../commonResource/images/icons/16.png";
import FooterProps from "./FooterProps/FooterProps";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer-wrapper">
        <div class="container">
          <div class="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
              >
                {" "}
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                {" "}
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div class="footer-links-wrapper row">
            {/* <FooterProps
              title="Shop and Learn"
              links={[
                { url: "#", text: "Mac" },
                { url: "#", text: "iPad" },
                { url: "#", text: "iPhone" },
                { url: "#", text: "Watch" },
                { url: "#", text: "TV" },
                { url: "#", text: "Music" },
                { url: "#", text: "AirPods" },
                { url: "#", text: "HomePod" },
                { url: "#", text: "iPod touch" },
                { url: "#", text: "Accessories" },
                { url: "#", text: "Gift Cards" },
              ]}
            />
            <FooterProps
              title1="Services"
              links1={[
                { url: "#", text: "Apple Music" },
                { url: "#", text: "Apple News+" },
                { url: "#", text: "Apple TV+" },
                { url: "#", text: "Apple Arcade" },
                { url: "#", text: "Apple Card" },
                { url: "#", text: "iCloud" },
              ]}
              title2="Account"
              links2={[
                { url: "#", text: "Manage Your Apple ID" },
                { url: "#", text: "Apple Store Account" },
                { url: "#", text: "iCloud.com" },
              ]}
            /> */}


<FooterProps
  title1="Shop and Learn"
  links1={[
    { url: "#", text: "Mac" },
    { url: "#", text: "iPad" },
    { url: "#", text: "iPhone" },
    { url: "#", text: "Watch" },
    { url: "#", text: "TV" },
    { url: "#", text: "Music" },
    { url: "#", text: "AirPods" },
    { url: "#", text: "HomePod" },
    { url: "#", text: "iPod touch" },
    { url: "#", text: "Accessories" },
    { url: "#", text: "Gift Cards" },
  ]}
  title2="Services"
  links2={[
    { url: "#", text: "Apple Music" },
    { url: "#", text: "Apple News+" },
    { url: "#", text: "Apple TV+" },
    { url: "#", text: "Apple Arcade" },
    { url: "#", text: "Apple Card" },
    { url: "#", text: "iCloud" },
  ]}
  title3="Account"
  links3={[
    { url: "#", text: "Manage Your Apple ID" },
    { url: "#", text: "Apple Store Account" },
    { url: "#", text: "iCloud.com" },
  ]}
/>



            <div class="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div class="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
                <li>
                  <a href="#">Apple and Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
              </ul>
              <h3>For Education</h3>
              <ul>
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
              <h3>For Government</h3>
              <ul>
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
            </div>
            <div class="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>
              <h3>About Apple</h3>
              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div class="copyright-wrapper row">
            <div class="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div class="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div class="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div class="flag-wrapper">
                <img src={icon} />
              </div>{" "}
              <div class="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
