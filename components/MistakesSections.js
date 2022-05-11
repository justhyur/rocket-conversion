import { Cta, SpecialTitle, Testimonial } from "./Utilities"

export default function MistakesSections() {
  return (<>
    <section id="mistakes1" className="section">
        <SpecialTitle 
          size="m"
          imagePath="/images/pc-problem.png"
          title="The <strong>3 biggest mistakes</strong> most
          online stores make"
        />
        <div className="container">
          <p>Working as a Business analyst for the past 5 years, I&apos;ve learned that most
          business-killing mistakes comes from missing out very important and
          unknown procedures. By analyzing dozens of businesses I will disclose to
          you 3 main errors.</p>
          <p>If you lacks time, and try to do too many things by yourself without
          knowing exactly what to do, then your business it&apos;s not going to reach
          its full potential in terms of sales and profits.</p>
          <p>Far from it, in fact.</p>
          <p>After analyzing and optimizing dozens of online businesses I&apos;ve noticed
          that almost ALL of them are making the same 3 business-killing
          mistakes.</p>
        </div>
    </section>
    <section id="mistakes2" className="section">
        <div className="box red">
          <h3>Here are the 3 biggest mistakes:</h3>
          <ul>
            <li>They make their checkout process <strong>needlessly complicated and confusing.</strong></li>
            <li>Their product pages <strong>don&apos;t include all of the crucial, must-have sales elements.</strong></li>
            <li>They don&apos;t offer a great and <strong>effortless mobile shopping experience.</strong></li>
          </ul>
        </div>
        <div className="container">
          <p>These things matter — because they are actively preventing you from
          truly scaling your business.</p>
        </div>
        <div className="box white">
          <SpecialTitle 
            size="m"
            pretitle="ASK YOURSELF"
            title="How much faster would you be able
            to grow if you would knew these
            things?"
          />
          <p>You could be just three easy steps away from reaching another 100…
          200… 1000 sales per day.</p>
          <p>All you need to do is click the button below and buy the most
          comprehensive money-focused e-commerce checklist on the planet. A
          little investement now can really make the difference in the near future.</p>
          <Cta/>
        </div>
        <div className="margined">
          <Testimonial
            stars={5}
            username="@boss2"
            date="Feb 5, 2022"
            comment="This is great! From now on all I need is that spreadsheet to show my
            customers what&apos;s their current status and what they need to do! I LOVE IT!"
            imagePath="/images/boss2.jpeg"
            name="Boss2"
            profession="Marketing Ad Specialists"
          />
        </div>
        <div className="box black">
          <div className="title-container">
            <div className="icon"><img src="/images/fire-copy.svg"/></div>
            <h3>Worried about the <strong>rising costs of advertising?</strong></h3>
            <div className="icon"><img src="/images/fire-copy.svg"/></div>
          </div>
          <p>Here&apos;s a crazy thing:</p>
          <p>Almost every store I&apos;ve audited recently seemed to be facing the exact same problem:</p>
          <p><strong>A steady increase in customer acquisition costs</strong></p>
          <p>All of these store owners (or their teams) were spending hundreds
            of hours every month optimizing their ad campaigns... yet every
            single year — without fail! — it&apos;s been getting more and more
            expensive to get customers and more and more difficult to be
            profitable</p>
        </div>
        <div className="margined">
          <SpecialTitle 
            size="m"
            title="In the list I cover every secret I
            found out in my 5 years
            experience to increase your
            customers&apos; CLTV and decrease
            CPA"
          />
          <div className="container m margin-auto">
            <p>The job of your ads is to bring clicks to your website</p>
            <p><strong>The job of your whole setup is to convert them into loyal customers.</strong></p>
          </div>
        </div>
        <div className="box green">
          <SpecialTitle 
            size="m"
            imagePath="/images/solution.svg"
            title="This is where <strong>Rocket Conversion</strong> comes into play"
            noPadding
        />
          <p>Every 1 dollar that you invest in improvements for your business today
            will make you $100 over the next 12 months... and then another $100
            the year after that… and then another $100 the year after that.</p>
          <p>With a properly set up structure you&apos;re going to see a sharp
          and <strong>immediate drop in customer acquisition costs</strong>, coupled with a
          significant <strong>increase of your average order value and CLTV</strong>. Now, both
          of these effects combined will make your ad campaigns truly profitable
          for you</p>
          <Cta/>
        </div>
        <div className="margined m">
          <SpecialTitle 
            size="m"
            title="Findthe lowest-hanging
            fruiton your online store"
          />
          <div className="container m margin-auto">
            <p>Now, first things first… If you decide to buy my Rocket Conversion
            listand you&apos;re left with a useless and difficult-to-understand checklist,
            then you are no closer to your goals than you were before</p>
            <p><strong>Instead, I&apos;ve made it my mission to make things as clear as possible
            for you.</strong></p>
          </div>
        </div>
        <div className="box white">
          <SpecialTitle 
            size="m"
            pretitle="HERE IS MY PROMISE"
            title="The checklist will give you clear, actionable steps that will:"
            noPadding
            h={3}
          />
          <ul>
            <li><strong>Decrease the cost per acquisition of your customers</strong></li>
            <li><strong>Increase your customers&apos; retention rate and CLTV</strong></li>
            <li><strong>Skyrocket your Profit.</strong></li>
          </ul>
          <p>With my Rocket Conversion list you&apos;ll be able to drill down into every
          aspect of your business, armed with a list of over 100 important
          checkpoints and 5+ years of my business analyst experience, so you are
          going to <strong>squeeze every last drop of conversions from your business.</strong></p>
          <p>And finally, the checklist will tell you exactly which steps you need to
          take, so you will be able to implement the changes that require the least
          amount of effort and deliver the biggest improvement right off the bat.
          </p>
          <Cta/>
        </div>
        <div className="margined">
          <Testimonial
            stars={5}
            username="@boss3"
            date="Mar 7, 2022"
            comment="Bravo @jakasmid - absolutely amazing resource: the added value here is off
            the charts! Keep the good work!"
            imagePath="/images/boss2.jpeg"
            name="Boss3"
            profession="Co-founder of cloverlabs.io"
          />
        </div>
        <SpecialTitle 
          size="m"
          title="Preview of the checklist
          (34 out of 300 checkpoints)"
        />
        <div className="full-image">
          <img src="/images/example.png"/>
        </div>
        <div className="margined m">
          <SpecialTitle 
            title="Why should you trust me?"
          />
          <div className="container m margin-auto">
            <p>As I mentioned above, I&apos;ve analysed and optimized dozens of stores. I&apos;ve
            helped <strong>online store owners bring in 6 figures of additional profits in the
            last year alone.</strong></p>
            <p>I&apos;m a deeply analytical guy at heart and during all of my 5+ years in this
            industry, I&apos;ve remained obsessed with what truly works and what doesn&apos;t
            in the real world. Which changes have an actual effect on the business.
            What elements increase sales and profits, and how.
            </p>
            <p>Bottom line is, I have a deep understanding of what affects conversions
            — and I&apos;m happy to share all of this knowledge and experience with you.</p>
          </div>
        </div>
          <SpecialTitle 
            h={3}
            title="“Alright, I&apos;m sold — how does
            this work?”"
          />
          <div className="numbered-list">
            <ul>
              <li><span>1</span><a className="link" href="#pricing">Buy the most comprehensive E-commerce Checklist on the planet.</a></li>
              <li><span>2</span>Go over every each one of the checkpoints and evaluate your business</li>
              <li><span>3</span>Implement the tasks, starting with those that require the least amount of effort and bring the biggest effect</li>
              <li><span>4</span>Once you&apos;re done with your tasks, start enjoying looking at the increased revenue that my list brought to you.</li>
            </ul>
          </div>

    </section>
  </>)
}
