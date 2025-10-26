'use client'

import { useState, useEffect } from 'react'


export default function AstrologyPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    place: '', 
    date: '', 
    time: '' 
  })
  const [submitted, setSubmitted] = useState(false)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=1920&q=80',
      title: 'ज्योतिष विज्ञान | Astrology Readings',
      subtitle: 'अपनी जन्म कुंडली का विश्लेषण करें | Share your birth details for personalized Vedic analysis'
    },
    {
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80',
      title: 'नक्षत्र ज्योतिष | Nakshatra Science',
      subtitle: '27 नक्षत्रों का रहस्य | Discover the secrets of 27 Nakshatras'
    },
    {
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80',
      title: 'दशा और भविष्यवाणी | Dasha Predictions',
      subtitle: 'जानें अपने भविष्य का मार्ग | Know your future path through Vedic wisdom'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('User data collected:', form)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <main className="main-container">
        {/* Hero Section */}
        <section className="hero-section">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-image-wrapper">
                <div className="slide-image">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="slide-overlay"></div>
                
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  
                  <div className="hero-badges">
                    <span className="badge">नक्षत्र Nakshatra</span>
                    <span className="badge">दशा Dasha</span>
                    <span className="badge">होरा Hora</span>
                  </div>

                  <a href="#form" className="cta-button">Get Your Reading</a>
                </div>
              </div>
            </div>
          ))}

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="form-section">
          <div className="container">
            <h2 className="section-title">अपनी जानकारी दें | Get Your Reading</h2>
            <p className="section-subtitle">Fill your birth details for personalized Vedic astrology analysis</p>

            {submitted && (
              <div className="success-message">
                धन्यवाद {form.name}! आपकी जानकारी प्राप्त हो गई है। हम जल्द ही आपसे संपर्क करेंगे।
                <br />
                Thanks! Your query will be answered within a short period of time.
              </div>
            )}

            <form onSubmit={handleSubmit} className="form-card">
              <div className="form-group">
                <label htmlFor="name">पूरा नाम | Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  value={form.name}
                  onChange={handleChange}
                  required 
                  placeholder="आपका नाम"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">ईमेल | Email Address</label>
                <input 
                  id="email" 
                  type="email"
                  name="email" 
                  value={form.email}
                  onChange={handleChange}
                  required 
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">फोन नंबर | Phone Number</label>
                <input 
                  id="phone" 
                  type="tel"
                  name="phone" 
                  value={form.phone}
                  onChange={handleChange}
                  required 
                  placeholder="+91 98765 43210"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="place">जन्म स्थान | Place of Birth</label>
                <input 
                  id="place" 
                  name="place" 
                  value={form.place}
                  onChange={handleChange}
                  required 
                  placeholder="शहर, राज्य"
                  className="form-input"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">जन्म तिथि | Date of Birth</label>
                  <input 
                    id="date" 
                    type="date" 
                    name="date" 
                    value={form.date}
                    onChange={handleChange}
                    required 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">जन्म समय | Time of Birth</label>
                  <input 
                    id="time" 
                    type="time" 
                    name="time" 
                    value={form.time}
                    onChange={handleChange}
                    required 
                    className="form-input"
                  />
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                जानकारी भेजें | Submit Details
              </button>
            </form>
          </div>
        </section>

        {/* Nakshatra Section */}
        <section className="content-section white-bg">
          <div className="container-large">
            <h2 className="section-title">नक्षत्र विज्ञान | Understanding Nakshatras</h2>
            
            <div className="content-intro">
              <h3 className="content-subtitle">नक्षत्र क्या है? | What is Nakshatra?</h3>
              <p className="content-text">
                नक्षत्र वैदिक ज्योतिष की आधारशिला है। आकाश में 27 नक्षत्र होते हैं, जो चंद्रमा की यात्रा को 27 भागों में विभाजित करते हैं। 
                प्रत्येक नक्षत्र 13 अंश 20 कला का होता है और इसका अपना स्वामी ग्रह होता है।
              </p>
              <p className="content-text">
                The 27 Nakshatras are lunar mansions that divide the zodiac into equal segments of 13°20'. Each Nakshatra is ruled by one of the nine planets and represents specific qualities, energies, and karmic patterns that influence your personality and life path.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card purple-card">
                <div className="feature-icon">🌟</div>
                <h4 className="feature-title">जन्म नक्षत्र | Janma Nakshatra</h4>
                <p className="feature-text">
                  चंद्रमा जिस नक्षत्र में जन्म के समय होता है, वह आपका जन्म नक्षत्र कहलाता है। यह आपके मन, भावनाओं और स्वभाव को निर्धारित करता है।
                </p>
              </div>
              <div className="feature-card pink-card">
                <div className="feature-icon">🎯</div>
                <h4 className="feature-title">नक्षत्र पाद | Nakshatra Pada</h4>
                <p className="feature-text">
                  Each Nakshatra is divided into 4 padas (quarters) of 3°20' each, corresponding to the four navamsa divisions, refining predictions about career, relationships, and spiritual growth.
                </p>
              </div>
              <div className="feature-card indigo-card">
                <div className="feature-icon">⚡</div>
                <h4 className="feature-title">नक्षत्र शक्ति | Nakshatra Power</h4>
                <p className="feature-text">
                  हर नक्षत्र की अपनी शक्ति, देवता और प्रतीक होता है। यह आपकी ताकत, कमजोरियां और जीवन उद्देश्य को प्रकट करता है।
                </p>
              </div>
            </div>

            <div className="nakshatra-list-card">
              <h4 className="list-title">27 नक्षत्र और उनके स्वामी | 27 Nakshatras & Lords</h4>
              <div className="nakshatra-grid">
                {[
                  'अश्विनी (Ketu)', 'भरणी (Venus)', 'कृत्तिका (Sun)', 'रोहिणी (Moon)', 
                  'मृगशिरा (Mars)', 'आर्द्रा (Rahu)', 'पुनर्वसु (Jupiter)', 'पुष्य (Saturn)',
                  'अश्लेषा (Mercury)', 'मघा (Ketu)', 'पूर्वाफाल्गुनी (Venus)', 'उत्तराफाल्गुनी (Sun)',
                  'हस्त (Moon)', 'चित्रा (Mars)', 'स्वाति (Rahu)', 'विशाखा (Jupiter)',
                  'अनुराधा (Saturn)', 'ज्येष्ठा (Mercury)', 'मूला (Ketu)', 'पूर्वाषाढ़ा (Venus)',
                  'उत्तराषाढ़ा (Sun)', 'श्रवण (Moon)', 'धनिष्ठा (Mars)', 'शतभिषा (Rahu)',
                  'पूर्वाभाद्रपद (Jupiter)', 'उत्तराभाद्रपद (Saturn)', 'रेवती (Mercury)'
                ].map((nak, index) => (
                  <div key={index} className="nakshatra-item">{nak}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dasha System */}
        <section className="content-section purple-bg">
          <div className="container-large">
            <h2 className="section-title">दशा प्रणाली | Dasha System</h2>
            
            <div className="content-intro">
              <h3 className="content-subtitle">विंशोत्तरी दशा | Vimshottari Dasha</h3>
              <p className="content-text">
                दशा शब्द संस्कृत के "दश" धातु से आया है जिसका अर्थ है "अवस्था" या "काल"। विंशोत्तरी दशा वैदिक ज्योतिष की सबसे महत्वपूर्ण भविष्यवाणी प्रणाली है। 
                यह 120 वर्षों का एक चक्र है जो 9 ग्रहों में विभाजित है।
              </p>
              <p className="content-text">
                The Vimshottari Dasha system provides exact timing of life events based on your Moon's Nakshatra at birth. It unfolds in cycles showing when specific planets activate their karmic results in your life. This 120-year cycle is divided among nine planets in specific sequences.
              </p>
            </div>

            <div className="dasha-card">
              <h4 className="list-title">ग्रह दशा अवधि | Planetary Period Duration</h4>
              <div className="dasha-grid">
                {[
                  { planet: 'सूर्य Sun', years: '6 वर्ष', color: 'orange' },
                  { planet: 'चंद्र Moon', years: '10 वर्ष', color: 'blue' },
                  { planet: 'मंगल Mars', years: '7 वर्ष', color: 'red' },
                  { planet: 'राहु Rahu', years: '18 वर्ष', color: 'purple' },
                  { planet: 'गुरु Jupiter', years: '16 वर्ष', color: 'yellow' },
                  { planet: 'शनि Saturn', years: '19 वर्ष', color: 'gray' },
                  { planet: 'बुध Mercury', years: '17 वर्ष', color: 'green' },
                  { planet: 'केतु Ketu', years: '7 वर्ष', color: 'indigo' },
                  { planet: 'शुक्र Venus', years: '20 वर्ष', color: 'pink' }
                ].map((item, index) => (
                  <div key={index} className={`dasha-item ${item.color}-border`}>
                    <span className="dasha-planet">{item.planet}</span>
                    <span className="dasha-years">{item.years}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dasha-info-grid">
              <div className="info-card purple-info">
                <h4 className="info-title">महादशा | Mahadasha</h4>
                <p className="info-text">
                  यह मुख्य ग्रह काल है जो 6 से 20 वर्षों तक चलता है। महादशा आपके जीवन के बड़े अध्यायों को निर्धारित करती है - करियर, शादी, स्वास्थ्य आदि।
                </p>
              </div>
              <div className="info-card pink-info">
                <h4 className="info-title">अंतर्दशा | Antardasha</h4>
                <p className="info-text">
                  The sub-period within Mahadasha lasting months to years. Antardasha brings specific events and opportunities, accounting for about 30% of the overall effects during that time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hora Section */}
        <section className="content-section white-bg">
          <div className="container-large">
            <h2 className="section-title">होरा शास्त्र | Hora Astrology</h2>
            
            <div className="content-intro">
              <h3 className="content-subtitle">होरा क्या है? | What is Hora?</h3>
              <p className="content-text">
                होरा शब्द "अहोरात्र" से लिया गया है, जिसका अर्थ है "दिन और रात"। होरा ज्योतिष में दिन के प्रत्येक घंटे पर एक विशेष ग्रह का शासन होता है। 
                यह प्रणाली मुहूर्त चुनने और दैनिक भविष्यवाणी के लिए अत्यंत उपयोगी है।
              </p>
              <p className="content-text">
                Hora divides each day into 24 hours, with each hour ruled by one of the seven classical planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn). The ruling planet of the hour influences the nature of activities undertaken during that time.
              </p>
            </div>

            <div className="hora-card">
              <h4 className="list-title orange-text">होरा का महत्व | Importance of Hora</h4>
              <ul className="hora-list">
                {[
                  { title: 'शुभ मुहूर्त:', desc: 'महत्वपूर्ण कार्यों के लिए सही समय चुनना - विवाह, गृहप्रवेश, व्यापार आरंभ' },
                  { title: 'Daily Planning:', desc: 'Choose favorable hours for meetings, travel, investments based on planetary hora' },
                  { title: 'प्रश्न ज्योतिष:', desc: 'होरा प्रश्न कुंडली में विशेष प्रश्नों के उत्तर देने में सहायक' },
                  { title: 'Remedial Measures:', desc: 'Perform planetary remedies during the specific hora of that planet for maximum benefit' }
                ].map((item, index) => (
                  <li key={index} className="hora-list-item">
                    <span className="hora-bullet">✦</span>
                    <p className="hora-content">
                      <strong>{item.title}</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Basic Astrology */}
        <section className="content-section purple-light-bg">
          <div className="container-large">
            <h2 className="section-title">ज्योतिष के मूल तत्व | Foundations of Astrology</h2>
            
            <div className="foundation-grid">
              {[
                {
                  title: 'राशि | Zodiac Signs',
                  desc: '12 राशियां हैं - मेष से मीन तक। प्रत्येक राशि 30 अंश की होती है और विशेष गुणों का प्रतिनिधित्व करती है। सूर्य, चंद्र और लग्न राशि मिलकर आपका मूल व्यक्तित्व बनाते हैं।',
                  colors: 'purple-pink'
                },
                {
                  title: 'भाव | Houses',
                  desc: 'The 12 houses represent different life areas - 1st house (self), 2nd (wealth), 7th (marriage), 10th (career), etc. Planets placed in houses activate those life domains during their periods.',
                  colors: 'blue-indigo'
                },
                {
                  title: 'ग्रह | Planets',
                  desc: '9 ग्रह - सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु। प्रत्येक ग्रह विशेष कारक है - गुरु ज्ञान का, शुक्र प्रेम का, शनि कर्म का।',
                  colors: 'green-teal'
                },
                {
                  title: 'योग | Yogas',
                  desc: 'Planetary combinations that create special results - Raja Yoga (royal combination), Dhana Yoga (wealth), Gaja Kesari Yoga (wisdom and prosperity). These enhance life outcomes significantly.',
                  colors: 'yellow-orange'
                }
              ].map((item, index) => (
                <div key={index} className={`foundation-card ${item.colors}-card`}>
                  <h4 className="foundation-title">{item.title}</h4>
                  <p className="foundation-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panchang Section */}
        <section className="content-section white-bg">
          <div className="container-large">
            <h2 className="section-title">पंचांग | Panchang Elements</h2>
            
            <div className="panchang-grid">
              {[
                { icon: '📅', title: 'तिथि | Tithi', desc: 'Lunar day based on Moon-Sun angle. 30 tithis in a lunar month.' },
                { icon: '⭐', title: 'वार | Vara', desc: 'Day of the week, each ruled by a specific planet.' },
                { icon: '🌙', title: 'नक्षत्र | Nakshatra', desc: "Moon's position in one of 27 lunar mansions." },
                { icon: '🔗', title: 'योग | Yoga', desc: '27 yogas formed by Sun-Moon relationship.' },
                { icon: '⚡', title: 'करण | Karana', desc: 'Half of a tithi, 11 karanas repeated twice in a month.' }
              ].map((item, index) => (
                <div key={index} className="panchang-card">
                  <div className="panchang-icon">{item.icon}</div>
                  <h4 className="panchang-title">{item.title}</h4>
                  <p className="panchang-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h3 className="cta-title">अपना विश्लेषण प्राप्त करें | Get Your Analysis</h3>
            <p className="cta-text">
              जन्म कुंडली, दशा विश्लेषण, नक्षत्र फल और व्यक्तिगत परामर्श के लिए ऊपर फॉर्म भरें। 
              <br />
              Fill the form above for complete birth chart analysis, dasha predictions, and personalized consultation.
            </p>
            <a href="#form" className="cta-button-secondary">Get Started Now</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">&copy; 2025 Cosmic Insights. All rights reserved.</p>
            <p className="footer-subtext">Professional Vedic Astrology Services | ज्योतिष सेवाएं</p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .main-container {
          min-height: 100vh;
          background-color: #f9fafb;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .slide-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide-image {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(88, 28, 135, 0.8), rgba(67, 56, 202, 0.7), rgba(126, 34, 206, 0.8));
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1rem;
          z-index: 10;
          color: white;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.45));
        }

        .hero-subtitle {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 48rem;
          line-height: 1.75;
          opacity: 0.95;
          filter: drop-shadow(0 10px 15px rgb(0 0 0 / 0.3));
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .badge {
          padding: 0.5rem 1.25rem;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.875rem;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
        }

        .cta-button {
          display: inline-block;
          background-color: white;
          color: #7c3aed;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
        }

        .cta-button:hover {
          background-color: #faf5ff;
          transform: scale(1.05);
        }

        .slide-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 20;
        }

        .indicator {
          height: 0.75rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.5);
          width: 0.75rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .indicator.active {
          background-color: white;
          width: 2.5rem;
        }

        /* Form Section */
        .form-section {
          padding: 5rem 0;
          background: linear-gradient(to bottom, white, #faf5ff);
        }

        .container {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .container-large {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: #111827;
        }

        .section-subtitle {
          text-align: center;
          color: #4b5563;
          margin-bottom: 2.5rem;
          font-size: 1.125rem;
        }

        .success-message {
          background-color: #d1fae5;
          border: 2px solid #6ee7b7;
          color: #065f46;
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
          font-weight: 600;
          line-height: 1.75;
        }

        .form-card {
          background-color: white;
          border: 2px solid #e5e7eb;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: #1f2937;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #d1d5db;
          border-radius: 0.75rem;
          font-size: 1rem;
          color: #111827;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(to right, #7c3aed, #4f46e5);
          color: white;
          padding: 1rem;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          margin-top: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        .submit-button:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
        }

        /* Content Sections */
        .content-section {
          padding: 5rem 0;
        }

        .white-bg {
          background-color: white;
        }

        .purple-bg {
          background: linear-gradient(to bottom, #faf5ff, white);
        }

        .purple-light-bg {
          background: linear-gradient(to bottom, #faf5ff, #e0e7ff);
        }

        .content-intro {
          max-width: 56rem;
          margin: 0 auto 3rem;
        }

        .content-subtitle {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .content-text {
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          border: 2px solid;
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          transform: translateY(-0.5rem);
        }

        .purple-card {
          background: linear-gradient(to bottom right, #faf5ff, #e0d1f7);
          border-color: #d8b4fe;
        }

        .pink-card {
          background: linear-gradient(to bottom right, #fce7f3, #faf5ff);
          border-color: #fbcfe8;
        }

        .indigo-card {
          background: linear-gradient(to bottom right, #e0e7ff, #faf5ff);
          border-color: #c7d2fe;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .feature-text {
          color: #4b5563;
          line-height: 1.75;
        }

        .nakshatra-list-card {
          background: linear-gradient(to bottom right, #f3e8ff, #e0e7ff, #f3e8ff);
          border: 2px solid #c084fc;
          border-radius: 1.5rem;
          padding: 3rem 2rem;
        }

        .list-title {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          color: #7c3aed;
        }

        .nakshatra-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .nakshatra-item {
          background-color: white;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 600;
          font-size: 0.875rem;
          color: #374151;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          transition: all 0.3s ease;
        }

        .nakshatra-item:hover {
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2);
        }

        /* Dasha Section */
        .dasha-card {
          background-color: white;
          border: 2px solid #e5e7eb;
          border-radius: 1.5rem;
          padding: 3rem 2rem;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          margin-bottom: 3rem;
        }

        .dasha-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .dasha-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: linear-gradient(to right, #f9fafb, #f3f4f6);
          border-radius: 0.75rem;
          border-left: 4px solid;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .orange-border { border-color: #f97316; }
        .blue-border { border-color: #60a5fa; }
        .red-border { border-color: #ef4444; }
        .purple-border { border-color: #a855f7; }
        .yellow-border { border-color: #eab308; }
        .gray-border { border-color: #6b7280; }
        .green-border { border-color: #10b981; }
        .indigo-border { border-color: #6366f1; }
        .pink-border { border-color: #ec4899; }

        .dasha-planet {
          font-weight: 700;
          color: #1f2937;
        }

        .dasha-years {
          font-weight: 700;
          font-size: 1.125rem;
          color: #7c3aed;
        }

        .dasha-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .info-card {
          border: 2px solid;
          border-radius: 1rem;
          padding: 2rem;
        }

        .purple-info {
          background: linear-gradient(to bottom right, #f3e8ff, #ddd6fe);
          border-color: #c084fc;
        }

        .pink-info {
          background: linear-gradient(to bottom right, #fce7f3, #f3e8ff);
          border-color: #f9a8d4;
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .info-text {
          color: #374151;
          line-height: 1.75;
        }

        /* Hora Section */
        .hora-card {
          background: linear-gradient(to bottom right, #fff7ed, #fef3c7, #fff7ed);
          border: 2px solid #fcd34d;
          border-radius: 1.5rem;
          padding: 3rem 2rem;
        }

        .orange-text {
          color: #c2410c;
        }

        .hora-list {
          list-style: none;
          padding: 0;
        }

        .hora-list-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .hora-bullet {
          color: #f97316;
          font-size: 1.5rem;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .hora-content {
          color: #374151;
          line-height: 1.75;
        }

        .hora-content strong {
          color: #111827;
        }

        /* Foundation Section */
        .foundation-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .foundation-card {
          border: 2px solid;
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .foundation-card:hover {
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          transform: translateY(-0.5rem);
        }

        .purple-pink-card {
          background: linear-gradient(to bottom right, #f3e8ff, #fce7f3);
          border-color: #c084fc;
        }

        .blue-indigo-card {
          background: linear-gradient(to bottom right, #dbeafe, #e0e7ff);
          border-color: #93c5fd;
        }

        .green-teal-card {
          background: linear-gradient(to bottom right, #d1fae5, #ccfbf1);
          border-color: #6ee7b7;
        }

        .yellow-orange-card {
          background: linear-gradient(to bottom right, #fef3c7, #fed7aa);
          border-color: #fcd34d;
        }

        .foundation-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .foundation-text {
          color: #374151;
          line-height: 1.75;
        }

        /* Panchang Section */
        .panchang-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .panchang-card {
          background: linear-gradient(to bottom right, #f9fafb, #faf5ff);
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .panchang-card:hover {
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          transform: translateY(-0.5rem);
        }

        .panchang-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .panchang-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }

        .panchang-text {
          font-size: 0.875rem;
          color: #4b5563;
          line-height: 1.75;
        }

        /* CTA Section */
        .cta-section {
          padding: 5rem 0;
          background: linear-gradient(to right, #7c3aed, #4f46e5, #7c3aed);
          color: white;
        }

        .cta-container {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.125rem;
          line-height: 1.75;
          opacity: 0.95;
          margin-bottom: 2rem;
        }

        .cta-button-secondary {
          display: inline-block;
          background-color: white;
          color: #7c3aed;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
        }

        .cta-button-secondary:hover {
          background-color: #faf5ff;
          transform: scale(1.05);
        }

        /* Footer */
        .footer {
          background-color: #111827;
          color: #d1d5db;
          padding: 3rem 0;
        }

        .footer-content {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }

        .footer-text {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .footer-subtext {
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .badge {
            font-size: 1rem;
          }

          .section-title {
            font-size: 3rem;
          }

          .form-card {
            padding: 2.5rem;
          }

          .form-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .nakshatra-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .dasha-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dasha-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .foundation-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .panchang-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .cta-text {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 3.75rem;
          }

          .content-subtitle {
            font-size: 2.25rem;
          }

          .container {
            padding: 0 2rem;
          }

          .container-large {
            padding: 0 2rem;
          }

          .nakshatra-grid {
            grid-template-columns: repeat(5, 1fr);
          }

          .dasha-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .panchang-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </>
  )
}
