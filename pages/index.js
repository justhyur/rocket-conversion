import JumboTron from "/components/JumboTron";7
import PresentationSection from "/components/PresentationSection";
import MistakesSections from "/components/MistakesSections";
import PricingSection from "/components/PricingSection";

export default function HomePage() {
  return (
    <div className="page">
        <JumboTron/>
        <PresentationSection/>
        <MistakesSections/>
        <PricingSection/>
    </div>
  )
}
