import moment from 'moment';
import 'moment-timezone';
import { ProfilePic, SpecialTitle, PricingTable } from "./Utilities"

export default function PricingSection() {
  const now = new Date();
  const prevDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()-3);
  const latestDate = moment(prevDate).format("MMM Do YYYY");
  return (
    <section id="pricing" className="section">
      <div className="main-title">
        <SpecialTitle 
          pretitle="STOP LEAVING (HEAPS OF) MONEY ON THE TABLE"
          title="Get your Rocket Conversion
          checklist NOW!"
          h={2}
        />
        <div className="price-card">
          <div className="header">
            <div className="title">E-COMMERCE CHECKLIST</div>
            <div className="subtitle">“The most comprehensive conversion list on the planet.”</div>
          </div>
          <div className="body">
            <PricingTable
              original={119.99}
              current={67}
            />
            <div className="title">Get a checklist that covers every single aspects of a succesful Business Structure:</div>
            <ul>
              <li>Funnel</li>
              <li>Google Ads + Google Analytics and GTM</li>
              <li>Facebook and Tik Tok Ads</li>
              <li>Advanced Email Marketing + Sms Marketing</li>
              <li>Checkout page</li>
              <li>Website Optimization</li>
              <li><strong>FREE BONUS</strong> Know your Numbers (CPA calculator and Profit Estimation Calculator)</li>
            </ul>
            <div className="info">
              <p>Included: <strong>70 critical conversion checkpoints</strong></p>
              <p>Checklist last updated: <strong>{latestDate}</strong></p>
              <a className="cta" href="#">
                <span>Buy my Rocket Conversion List Now!</span>
              </a>
            </div>
          </div>
          <div className="footer">
            <p>Do you want to share the Checklist with your clients?</p>
            <p><a className="link" href="#">Purchase the extended license for just $189</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
