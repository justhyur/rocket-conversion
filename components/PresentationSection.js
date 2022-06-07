import { ProfilePic, SpecialTitle, Testimonial } from "./Utilities"

export default function PresentationSection() {
  return (
    <section id="presentation" className="section">
        <div className="container">
            <div className="presentation">
                <ProfilePic/>
                <p>Hey — <a href="#">I&apos;m Jack</a>, the creator of Rocket Conversion and the business analyst behind some 7 figures stores.</p>
            </div>
            <p>My typical client averages 250.000 monthly single-users on their website.</p>
            <p>To be profitable with these numbers, your entire eCom structure must be as efficient as possible. I&apos;ve analysed and managed dozens of eCommerce niches, taking notes trough the years of what IS and IS NOT working. I came up with a checklist where I have listed all the nooks and crannies that each one of them has implemented...</p>
            <p className="flexm c-c text-center"><strong>to convert like crazy.</strong></p>
        </div>
        <SpecialTitle 
          pretitle="WITH MY E-COMMERCE ROCKET PROFIT CHECKLIST"
          title="You can drill down your online
          store and find out where
          exactly you&apos;re <strong>leaving YOUR money on the table</strong>"
        />
        <div className="container">
          <p> 
            With my Rocket Conversion checklist you can look at over 
            <strong>100 critical checkpoints</strong> and cover every 
            single nook-and-cranny of your business process.
          </p>
          <p>
            <strong>The checklist will show you all the quick-wins</strong> 
            you can implement right now to significantly increase your profit.
          </p>
          <img src="/images/quick-wins.png"/>
        </div>
        <Testimonial
          stars={5}
          username="@silvdylan"
          date="Feb 20, 2022"
          comment="I&apos;ve seen my fair share of e-commerce checklists during the years, this one takes the cake. Looks super comprehensive and it&apos;s ACTIONABLE. Superb job @JackB"
          imagePath="/images/silvester.jpeg"
          name="Silvester Dylan"
          profession="Marketing Consultant"
        />
        <div className="container"></div>
    </section>
  )
}
