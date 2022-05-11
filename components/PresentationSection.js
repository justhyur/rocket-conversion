import { ProfilePic, SpecialTitle, Testimonial } from "./Utilities"

export default function PresentationSection() {
  return (
    <section id="presentation" className="section">
        <div className="container">
            <div className="presentation">
                <ProfilePic/>
                <p>Hey — <a href="#">I&apos;m Jack</a>, the creator of Rocket Conversion and the business analyst behind some 7 figures stores.</p>
            </div>
            <p>I&apos;ve analyzed and optimized dozens of eCommerces making them the mosthigh-converting stores in their niches, so I know a little bit about getting your online store to the top. My clients are in the field of expertise are Beauty, Fashion and High-End Food businesses.</p>
            <p className="flexm c-c text-center"><strong>And now they all convert like crazy.</strong></p>
        </div>
        <SpecialTitle 
          pretitle="WITH MY E-COMMERCE CONVERSION CHECKLIST"
          title="You can drill down your online
          store and find out where
          exactly you&apos;re <strong>leaving (heaps
          of) money on the table</strong> and
          what important part you are
          missing out/weren&apos;t aware of"
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
            For each topic, in the action section, there are hyperlink. 
            Those hyperlinks are made-by-me instructionsto follow, in 
            order to increase your profit. Everything that I have written 
            down has already been tested and proven several times, and 
            it works.
          </p>
          <img src="/images/quick-wins.png"/>
        </div>
        <Testimonial
          stars={5}
          username="@boss1"
          date="Jan 22, 2022"
          comment="I&apos;ve seen my fair share of e-commerce checklists during the years, this one
          takes the cake. Looks super comprehensive and it&apos;s ACTIONABLE. Superb job
          @JackB"
          imagePath="/images/boss1.jpeg"
          name="Boss1"
          profession="Marketing Manager/Designer"
        />
        <div className="container"></div>
    </section>
  )
}
