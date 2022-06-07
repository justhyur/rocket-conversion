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
            <h1>The Ultimate Checklist to convert visitors into Loyal Customers</h1>
            <p>I help e-Commerces to grow their profit with in-depth <strong>business analysis</strong>.</p>
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
