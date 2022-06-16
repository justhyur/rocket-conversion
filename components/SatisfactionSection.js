import { Testimonial, SpecialTitle, Question } from "./Utilities"

export default function SatisfactionSection() {
  const questions = [
    {
      title: 'Our store makes less than 6 figures (less than $100,000). Will this be valuable for me?',
      p1: `A: It sure will. This is especially 
      important for newer stores that <strong>can&apos;t afford to waste their 
      ad budget</strong> running A/B tests to figure out what works and what doesn&apos;t`,
      p2: `My Checklist will save you both money and time that you&apos;d spend trying to figure these things out for yourself.`,
    },
    {
      title: 'I&apos;ve bought a conversion checklist before. How is this different?',
      p1: `A: That&apos;s a great question! And the answer is, I&apos;m in a position where I can offer a unique perspective on your online store and the things that actually matter.`,
      p2: `<strong>I&apos;ve managed multi-million dollar business</strong> and created some of the <strong>best-performing strategies</strong> I&apos;ve added <strong>6 figures in extra profits</strong> to my clients&apos; online businesses in the past 12 months alone. And after <strong>years of experience and dozens of improved eComs</strong>, I&apos;m confident that I can give you all of the right tool that will increase your profit as soon as you implement them.`,
    },
    {
      title: 'I&apos;ve still got some questions...',
      p1: `A: Well, let me take care of that! Simply send me an email (email) and I&apos;ll be happy to answer any of your questions.`,
    },
  ]
  return (
    <section id="satisfaction" className="section">
      <div className="box testimonial guarantee">
        <img src="/images/guarantee.png"/>
        <div className="content">
          <h3>100% 14-Day Money Back Guarantee</h3>
          <p>After your purchase, you have 14 days to ensure the Rocket Checklist is valuable for you. 
            If you&apos;re not completely satisfied and don&apos;t find value in it, 
            I will refund your payment, guaranteed!</p>
        </div>
      </div>
      <div className="main-title">
        <SpecialTitle 
          title="Why more than 3300+ satisfied customers just ❤️ the Rocket Profit Checklist"
          h={2}
        />
      </div>
      <div className="photo-reviews">
        <img src="/images/tweets/01.png"/>
        <img src="/images/tweets/02.png"/>
        <img src="/images/tweets/03.png"/>
        <img src="/images/tweets/04.png"/>
        <img src="/images/tweets/05.png"/>
        <img src="/images/tweets/06.png"/>
        <img src="/images/tweets/07.png"/>
        <img src="/images/tweets/08.png"/>
        <img src="/images/tweets/09.png"/>
        <img src="/images/tweets/10.png"/>
        <img src="/images/tweets/11.jpg"/>
        <img src="/images/tweets/12.jpg"/>
        <Testimonial
          stars={5}
          username="@elanne"
          date="Jan 14, 2022"
          comment="I&apos;m very grateful to Jack for making this list. 
          It&apos;s very thorough and therefore very useful for everyone 
          who needs to make an audit of their online store and everyone who 
          wants to make the store more efficient. It can also be used as a 
          learning tool, as every position on the list has a link to an article 
          with more information and examples of usage. Great stuff! I was planning 
          to prepare such a list myself for my own work, but never had enough time 
          to do it. So it was a no-brainer for me to buy the list."
          imagePath="/images/ela.jpg"
          name="Ela Babić"
          profession="E-commerce UX Designer"
        />
        <Testimonial
          stars={5}
          username="@sergioruz"
          date="May 02, 2022"
          comment="This checklist by Jack is like your CRO bible; 
          you should keep it with you at all costs while optimizing your business for conversions; 
          the level of detail is far beyond
           extraordinary for a fraction of the price! I am currently using this 
           checklist to optimize my freelance client&apos;s webstore, and he was astonished 
           by the detail level! Thank you, Jack, for saving many e-commerce entrepreneurs&apos; lives!"
          imagePath="/images/dario.jfif"
          name="Sergio Ruz"
          profession="E-commerce Specialist | Conversion Copywriter | Content Writer"
        />
        <Testimonial
          stars={5}
          username="@mathedez"
          date="May 08, 2022"
          comment="This consolidated list is simply awesome. 
          Most of the so call training, conferences, webinars etc., 
          provide only education. Yours is straight to the point 
          and the whole list is nothing than actions."
          imagePath="/images/matthew.jpg"
          name="Matthew Dezy"
          profession="E-commerce Store owner"
        />
        <Testimonial
          stars={5}
          username="@vladaskalov"
          date="May 12, 2022"
          comment="This checklist is the most comprehensive 
          checklist I have ever come across! It's so detailed,
            there are tons of elements that work for basically any kind of business!"
          imagePath="/images/vladimir.jpg"
          name="Vladimir Daskalov"
          profession="E-commerce Store owner"
        />
      </div>
      <div className="box white">
          <SpecialTitle 
            size="m"
            pretitle="AS I SAID"
            title="The checklist will give you clear, actionable steps that will:"
            noPadding
            h={3}
          />
          <ul>
            <li><strong>Decrease your customer acquisition costs</strong></li>
            <li><strong>Increase your average order value/Customer LTV</strong></li>
            <li><strong>Skyrocket your Profit.</strong></li>
          </ul>
          <a className="cta" href="#prices">
            <span>Grab your copy now!</span>
          </a>
      </div>
      <div className="questions-container">
        <SpecialTitle 
          size="m"
          title="Got some remaining questions?"
          noPadding
          h={3}
        />
        <div className="paragraph-container">
          <p>That&apos;s completely normal. 😃</p>
          <p>That&apos;s why I put together a list of common questions and answers that will help you get started.</p>
        </div>
        <div className="questions">
          {questions.map((question, index)=>(
            <Question
              key={`question${index}`}
              total={questions.length}
              num={index}
              title={question.title}
              p1={question.p1}
              p2={question.p2}
            />
          ))}
        </div>
      </div>
      <div className="box white">
          <SpecialTitle 
            size="m"
            pretitle="AND IF YOU&apos;RE ALL CAUGHT-UP…"
            title="It&apos;s time for you to improve your profit today:"
            noPadding
            h={3}
          />
          <a className="cta" href="#prices">
            <span>Get my Checklist now!</span>
          </a>
      </div>
    </section>
  )
}
