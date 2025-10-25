// src/pages/astrologer/index.jsx
import { useState } from 'react';


export default function AstrologerPage() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    place: '', 
    date: '', 
    time: '' 
  });
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form data is collected, you can process it as needed
    console.log('User data collected:', form);
  };


  return (
    <main className="astrology-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="title">ज्योतिष विज्ञान | Astrology Readings</h1>
          <p className="subtitle">
            अपनी जन्म कुंडली का विश्लेषण करें | Share your birth details for personalized Vedic analysis
          </p>
        </div>
        <div className="hero-badges">
          <div className="badge">नक्षत्र Nakshatra</div>
          <div className="badge">दशा Dasha</div>
          <div className="badge">होरा Hora</div>
        </div>
      </section>


      {/* Form Section - Moved to top */}
      <section className="section form-section">
        <h2 className="section-title">अपनी जानकारी दें | Get your reading</h2>


        {submitted && (
          <div className="alert alert-success">
            धन्यवाद {form.name}! आपकी जानकारी प्राप्त हो गई है। हम जल्द ही आपसे संपर्क करेंगे।
            <br />
            Thanks! Your query will be answered within a short period of time.
          </div>
        )}


        <form className="astro-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label" htmlFor="name">पूरा नाम | Full Name</label>
            <input 
              id="name" 
              className="form-input" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              required 
              placeholder="आपका नाम"
            />
          </div>
          
          <div className="form-row">
            <label className="form-label" htmlFor="email">ईमेल | Email Address</label>
            <input 
              id="email" 
              className="form-input" 
              type="email"
              name="email" 
              value={form.email}
              onChange={handleChange}
              required 
              placeholder="your@email.com"
            />
          </div>
          
          <div className="form-row">
            <label className="form-label" htmlFor="phone">फोन नंबर | Phone Number</label>
            <input 
              id="phone" 
              className="form-input" 
              type="tel"
              name="phone" 
              value={form.phone}
              onChange={handleChange}
              required 
              placeholder="+91 98765 43210"
            />
          </div>
          
          <div className="form-row">
            <label className="form-label" htmlFor="place">जन्म स्थान | Place of Birth</label>
            <input 
              id="place" 
              className="form-input" 
              name="place" 
              value={form.place}
              onChange={handleChange}
              required 
              placeholder="शहर, राज्य"
            />
          </div>
          
          <div className="form-row form-row-two">
            <div>
              <label className="form-label" htmlFor="date">जन्म तिथि | Date of Birth</label>
              <input 
                id="date" 
                className="form-input" 
                type="date" 
                name="date" 
                value={form.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label className="form-label" htmlFor="time">जन्म समय | Time of Birth</label>
              <input 
                id="time" 
                className="form-input" 
                type="time" 
                name="time" 
                value={form.time}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <button className="submit-btn" type="submit">
            जानकारी भेजें | Submit Details
          </button>
        </form>
      </section>


      {/* Nakshatra Detailed Section */}
      <section className="section section-alt">
        <h2 className="section-title">नक्षत्र विज्ञान | Understanding Nakshatras</h2>
        
        <div className="content-block">
          <h3 className="h3">नक्षत्र क्या है? | What is Nakshatra?</h3>
          <p className="para">
            नक्षत्र वैदिक ज्योतिष की आधारशिला है। आकाश में 27 नक्षत्र होते हैं, जो चंद्रमा की यात्रा को 27 भागों में विभाजित करते हैं। 
            प्रत्येक नक्षत्र 13 अंश 20 कला का होता है और इसका अपना स्वामी ग्रह होता है।
          </p>
          <p className="para">
            The 27 Nakshatras are lunar mansions that divide the zodiac into equal segments of 13°20'. Each Nakshatra is ruled by one of the nine planets and represents specific qualities, energies, and karmic patterns that influence your personality and life path.
          </p>
        </div>


        <div className="grid-3">
          <div className="info-card">
            <div className="card-icon">🌟</div>
            <h4 className="card-subtitle">जन्म नक्षत्र | Janma Nakshatra</h4>
            <p className="card-text">
              चंद्रमा जिस नक्षत्र में जन्म के समय होता है, वह आपका जन्म नक्षत्र कहलाता है। यह आपके मन, भावनाओं और स्वभाव को निर्धारित करता है।
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">🎯</div>
            <h4 className="card-subtitle">नक्षत्र पाद | Nakshatra Pada</h4>
            <p className="card-text">
              Each Nakshatra is divided into 4 padas (quarters) of 3°20' each, corresponding to the four navamsa divisions, refining predictions about career, relationships, and spiritual growth.
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">⚡</div>
            <h4 className="card-subtitle">नक्षत्र शक्ति | Nakshatra Power</h4>
            <p className="card-text">
              हर नक्षत्र की अपनी शक्ति, देवता और प्रतीक होता है। यह आपकी ताकत, कमजोरियां और जीवन उद्देश्य को प्रकट करता है।
            </p>
          </div>
        </div>


        <div className="highlight-box">
          <h4 className="highlight-title">27 नक्षत्र और उनके स्वामी | 27 Nakshatras & Lords</h4>
          <div className="nakshatra-grid">
            <div className="nak-item">अश्विनी (Ketu)</div>
            <div className="nak-item">भरणी (Venus)</div>
            <div className="nak-item">कृत्तिका (Sun)</div>
            <div className="nak-item">रोहिणी (Moon)</div>
            <div className="nak-item">मृगशिरा (Mars)</div>
            <div className="nak-item">आर्द्रा (Rahu)</div>
            <div className="nak-item">पुनर्वसु (Jupiter)</div>
            <div className="nak-item">पुष्य (Saturn)</div>
            <div className="nak-item">अश्लेषा (Mercury)</div>
            <div className="nak-item">मघा (Ketu)</div>
            <div className="nak-item">पूर्वाफाल्गुनी (Venus)</div>
            <div className="nak-item">उत्तराफाल्गुनी (Sun)</div>
            <div className="nak-item">हस्त (Moon)</div>
            <div className="nak-item">चित्रा (Mars)</div>
            <div className="nak-item">स्वाति (Rahu)</div>
            <div className="nak-item">विशाखा (Jupiter)</div>
            <div className="nak-item">अनुराधा (Saturn)</div>
            <div className="nak-item">ज्येष्ठा (Mercury)</div>
            <div className="nak-item">मूला (Ketu)</div>
            <div className="nak-item">पूर्वाषाढ़ा (Venus)</div>
            <div className="nak-item">उत्तराषाढ़ा (Sun)</div>
            <div className="nak-item">श्रवण (Moon)</div>
            <div className="nak-item">धनिष्ठा (Mars)</div>
            <div className="nak-item">शतभिषा (Rahu)</div>
            <div className="nak-item">पूर्वाभाद्रपद (Jupiter)</div>
            <div className="nak-item">उत्तराभाद्रपद (Saturn)</div>
            <div className="nak-item">रेवती (Mercury)</div>
          </div>
        </div>
      </section>


      {/* Dasha System */}
      <section className="section">
        <h2 className="section-title">दशा प्रणाली | Dasha System</h2>
        
        <div className="content-block">
          <h3 className="h3">विंशोत्तरी दशा | Vimshottari Dasha</h3>
          <p className="para">
            दशा शब्द संस्कृत के "दश" धातु से आया है जिसका अर्थ है "अवस्था" या "काल"। विंशोत्तरी दशा वैदिक ज्योतिष की सबसे महत्वपूर्ण भविष्यवाणी प्रणाली है। 
            यह 120 वर्षों का एक चक्र है जो 9 ग्रहों में विभाजित है।
          </p>
          <p className="para">
            The Vimshottari Dasha system provides exact timing of life events based on your Moon's Nakshatra at birth. It unfolds in cycles showing when specific planets activate their karmic results in your life. This 120-year cycle is divided among nine planets in specific sequences.
          </p>
        </div>


        <div className="dasha-timeline">
          <h4 className="timeline-title">ग्रह दशा अवधि | Planetary Period Duration</h4>
          <div className="timeline-grid">
            <div className="timeline-item">
              <span className="planet-name">सूर्य Sun</span>
              <span className="planet-years">6 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">चंद्र Moon</span>
              <span className="planet-years">10 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">मंगल Mars</span>
              <span className="planet-years">7 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">राहु Rahu</span>
              <span className="planet-years">18 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">गुरु Jupiter</span>
              <span className="planet-years">16 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">शनि Saturn</span>
              <span className="planet-years">19 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">बुध Mercury</span>
              <span className="planet-years">17 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">केतु Ketu</span>
              <span className="planet-years">7 वर्ष</span>
            </div>
            <div className="timeline-item">
              <span className="planet-name">शुक्र Venus</span>
              <span className="planet-years">20 वर्ष</span>
            </div>
          </div>
        </div>


        <div className="grid-2">
          <div className="info-card accent">
            <h4 className="card-subtitle">महादशा | Mahadasha</h4>
            <p className="card-text">
              यह मुख्य ग्रह काल है जो 6 से 20 वर्षों तक चलता है। महादशा आपके जीवन के बड़े अध्यायों को निर्धारित करती है - करियर, शादी, स्वास्थ्य आदि।
            </p>
          </div>
          <div className="info-card accent">
            <h4 className="card-subtitle">अंतर्दशा | Antardasha</h4>
            <p className="card-text">
              The sub-period within Mahadasha lasting months to years. Antardasha brings specific events and opportunities, accounting for about 30% of the overall effects during that time.
            </p>
          </div>
        </div>
      </section>


      {/* Hora System */}
      <section className="section section-alt">
        <h2 className="section-title">होरा शास्त्र | Hora Astrology</h2>
        
        <div className="content-block">
          <h3 className="h3">होरा क्या है? | What is Hora?</h3>
          <p className="para">
            होरा शब्द "अहोरात्र" से लिया गया है, जिसका अर्थ है "दिन और रात"। होरा ज्योतिष में दिन के प्रत्येक घंटे पर एक विशेष ग्रह का शासन होता है। 
            यह प्रणाली मुहूर्त चुनने और दैनिक भविष्यवाणी के लिए अत्यंत उपयोगी है।
          </p>
          <p className="para">
            Hora divides each day into 24 hours, with each hour ruled by one of the seven classical planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn). The ruling planet of the hour influences the nature of activities undertaken during that time.
          </p>
        </div>


        <div className="hora-box">
          <h4 className="highlight-title">होरा का महत्व | Importance of Hora</h4>
          <ul className="feature-list">
            <li><strong>शुभ मुहूर्त:</strong> महत्वपूर्ण कार्यों के लिए सही समय चुनना - विवाह, गृहप्रवेश, व्यापार आरंभ</li>
            <li><strong>Daily Planning:</strong> Choose favorable hours for meetings, travel, investments based on planetary hora</li>
            <li><strong>प्रश्न ज्योतिष:</strong> होरा प्रश्न कुंडली में विशेष प्रश्नों के उत्तर देने में सहायक</li>
            <li><strong>Remedial Measures:</strong> Perform planetary remedies during the specific hora of that planet for maximum benefit</li>
          </ul>
        </div>
      </section>


      {/* Basic Astrology */}
      <section className="section">
        <h2 className="section-title">ज्योतिष के मूल तत्व | Foundations of Astrology</h2>
        
        <div className="grid-2">
          <div className="info-card">
            <h4 className="card-subtitle">राशि | Zodiac Signs</h4>
            <p className="card-text">
              12 राशियां हैं - मेष से मीन तक। प्रत्येक राशि 30 अंश की होती है और विशेष गुणों का प्रतिनिधित्व करती है। सूर्य, चंद्र और लग्न राशि मिलकर आपका मूल व्यक्तित्व बनाते हैं।
            </p>
          </div>
          <div className="info-card">
            <h4 className="card-subtitle">भाव | Houses</h4>
            <p className="card-text">
              The 12 houses represent different life areas - 1st house (self), 2nd (wealth), 7th (marriage), 10th (career), etc. Planets placed in houses activate those life domains during their periods.
            </p>
          </div>
          <div className="info-card">
            <h4 className="card-subtitle">ग्रह | Planets</h4>
            <p className="card-text">
              9 ग्रह - सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु। प्रत्येक ग्रह विशेष कारक है - गुरु ज्ञान का, शुक्र प्रेम का, शनि कर्म का।
            </p>
          </div>
          <div className="info-card">
            <h4 className="card-subtitle">योग | Yogas</h4>
            <p className="card-text">
              Planetary combinations that create special results - Raja Yoga (royal combination), Dhana Yoga (wealth), Gaja Kesari Yoga (wisdom and prosperity). These enhance life outcomes significantly.
            </p>
          </div>
        </div>
      </section>


      {/* Panchang Section */}
      <section className="section section-alt">
        <h2 className="section-title">पंचांग | Panchang Elements</h2>
        
        <div className="panchang-grid">
          <div className="panchang-card">
            <div className="panchang-icon">📅</div>
            <h4 className="panchang-title">तिथि | Tithi</h4>
            <p className="panchang-text">Lunar day based on Moon-Sun angle. 30 tithis in a lunar month.</p>
          </div>
          <div className="panchang-card">
            <div className="panchang-icon">⭐</div>
            <h4 className="panchang-title">वार | Vara</h4>
            <p className="panchang-text">Day of the week, each ruled by a specific planet.</p>
          </div>
          <div className="panchang-card">
            <div className="panchang-icon">🌙</div>
            <h4 className="panchang-title">नक्षत्र | Nakshatra</h4>
            <p className="panchang-text">Moon's position in one of 27 lunar mansions.</p>
          </div>
          <div className="panchang-card">
            <div className="panchang-icon">🔗</div>
            <h4 className="panchang-title">योग | Yoga</h4>
            <p className="panchang-text">27 yogas formed by Sun-Moon relationship.</p>
          </div>
          <div className="panchang-card">
            <div className="panchang-icon">⚡</div>
            <h4 className="panchang-title">करण | Karana</h4>
            <p className="panchang-text">Half of a tithi, 11 karanas repeated twice in a month.</p>
          </div>
        </div>
      </section>


      {/* Closing CTA */}
      <section className="section cta-section">
        <div className="cta-box">
          <h3 className="cta-title">अपना विश्लेषण प्राप्त करें | Get Your Analysis</h3>
          <p className="cta-text">
            जन्म कुंडली, दशा विश्लेषण, नक्षत्र फल और व्यक्तिगत परामर्श के लिए ऊपर फॉर्म भरें। 
            <br />
            Fill the form above for complete birth chart analysis, dasha predictions, and personalized consultation.
          </p>
        </div>
      </section>


      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .astrology-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', sans-serif;
          line-height: 1.6;
        }
        
        .hero {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          text-align: center;
          padding: 4rem 1.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(255,255,255,0.1), transparent);
          transform: rotate(-15deg);
        }
        
        .hero-content {
          max-width: 900px;
          z-index: 1;
        }
        
        .title {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          margin: 0 0 1rem;
          font-weight: 900;
          line-height: 1.1;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        }
        
        .subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          opacity: 0.95;
          line-height: 1.6;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
        }
        
        .hero-badges {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          z-index: 1;
          justify-content: center;
        }
        
        .badge {
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.4);
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem;
        }
        
        .section-alt {
          background: linear-gradient(to bottom, #f8f9ff, #fff);
          width: 100%;
        }
        
        .section-title {
          font-size: 2rem;
          margin: 0 0 2rem;
          font-weight: 800;
          color: #1a202c;
          text-align: center;
        }
        
        .h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem;
          font-weight: 700;
          color: #2d3748;
        }
        
        .para {
          margin: 0 0 1.5rem;
          line-height: 1.8;
          color: #4a5568;
          font-size: 1.05rem;
        }
        
        .content-block {
          margin-bottom: 3rem;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        @media (min-width: 768px) {
          .grid-2 { grid-template-columns: 1fr 1fr; }
          .grid-3 { grid-template-columns: repeat(3, 1fr); }
        }
        
        .info-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .info-card.accent {
          background: linear-gradient(135deg, #667eea15, #764ba215);
          border-color: #667eea50;
        }
        
        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .card-subtitle {
          font-size: 1.25rem;
          margin: 0 0 0.75rem;
          font-weight: 700;
          color: #2d3748;
        }
        
        .card-text {
          line-height: 1.7;
          color: #4a5568;
        }
        
        .highlight-box {
          background: linear-gradient(135deg, #667eea10, #764ba210);
          border: 2px solid #667eea40;
          border-radius: 20px;
          padding: 2rem;
          margin: 3rem 0;
        }
        
        .highlight-title {
          font-size: 1.4rem;
          margin: 0 0 1.5rem;
          font-weight: 700;
          color: #5a67d8;
          text-align: center;
        }
        
        .nakshatra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }
        
        .nak-item {
          background: #fff;
          padding: 0.75rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
          color: #4a5568;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .dasha-timeline {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        
        .timeline-title {
          font-size: 1.3rem;
          margin: 0 0 1.5rem;
          font-weight: 700;
          color: #2d3748;
          text-align: center;
        }
        
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        
        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }
        
        .planet-name {
          font-weight: 700;
          color: #2d3748;
        }
        
        .planet-years {
          font-weight: 600;
          color: #667eea;
          font-size: 1.1rem;
        }
        
        .hora-box {
          background: #fff;
          border: 2px solid #f7931e40;
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
        }
        
        .feature-list li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.7;
          color: #4a5568;
        }
        
        .feature-list li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #f7931e;
          font-weight: bold;
        }
        
        .panchang-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .panchang-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 3px 15px rgba(0,0,0,0.05);
        }
        
        .panchang-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        
        .panchang-title {
          font-size: 1.1rem;
          margin: 0 0 0.5rem;
          font-weight: 700;
          color: #2d3748;
        }
        
        .panchang-text {
          font-size: 0.9rem;
          color: #718096;
          line-height: 1.5;
        }
        
        /* Form Styles */
        .form-section {
          background: linear-gradient(to bottom, #fff, #f8f9ff);
        }
        
        .astro-form {
          background: #fff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .form-row {
          margin-bottom: 1.5rem;
        }
        
        .form-row-two {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .form-row-two { grid-template-columns: 1fr 1fr; }
        }
        
        .form-label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #2d3748;
          font-size: 1rem;
        }
        
        .form-input {
          width: 100%;
          padding: 0.9rem 1.1rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s;
          background: #fff;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }
        
        .submit-btn {
          width: 100%;
          padding: 1.1rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102,126,234,0.4);
        }
        
        .alert {
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          font-weight: 600;
          line-height: 1.6;
        }
        
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 2px solid #c3e6cb;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          text-align: center;
        }
        
        .cta-box {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-size: 2rem;
          margin: 0 0 1rem;
          font-weight: 800;
        }
        
        .cta-text {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.95;
        }
      `}</style>
    </main>
  );
}
