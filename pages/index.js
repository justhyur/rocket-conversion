import JumboTron from "/components/JumboTron";7
import PresentationSection from "/components/PresentationSection";
import MistakesSections from "/components/MistakesSections";
import PricingSection from "/components/PricingSection";
import SatisfactionSection from "/components/SatisfactionSection";
import FooterSection from "/components/FooterSection";
import Head from "next/head";

export default function HomePage() {
  return (<>
    <Head>
      <title>Rocket Profit Checklist</title>
    </Head>
    <div className="page">
        <JumboTron/>
        <PresentationSection/>
        <MistakesSections/>
        <PricingSection/>
        <SatisfactionSection/>
        <FooterSection/>
    </div>
  </>
  )
}
