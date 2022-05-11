import { Cta, ProfilePic } from '/components/Utilities';

export default function JumboTron() {
  return (
    <section id="jumbo-tron" className="section">
        <div className="extra-bg"></div>
        <div className="container">
            <ProfilePic colored href="#"/>
            <div className="centered-container">
                <img src="/images/product-hunt-badge.svg"/>
            </div>
            <h1>How much money are you leaving on the table right now?</h1>
            <p>Want to start or you already own a multiple figures online store? Get the most comprehensive step to step E-commerce Checklist that will <strong>skyrocket your sales.</strong></p>
            <div className="centered-container">
                <Cta/>
            </div>
            <div className="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/z-6T9lvTwJA?playlist=z-6T9lvTwJA&loop=1&autoplay=1&controls=0" 
                    title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </section>
  )
}
