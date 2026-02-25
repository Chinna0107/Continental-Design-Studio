import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true
  };

  const slides = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80'
  ];

  return (
    <div style={{ width: '100vw', overflow: 'hidden' }} className="page-enter">
      <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ maxWidth: '900px', padding: '0 3rem', textAlign: 'center', color: '#fff' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2', color: '#fff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
                      Defining the<br />Future Cityscape.
                    </h1>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '3rem', color: '#f0f0f0', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
                      At Continental Design Studio, we merge structural logic with poetic design to create spaces that breathe, inspire, and endure for generations.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link to="/portfolio" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.5)'; }}>
                        Explore Portfolio
                      </Link>
                      <Link to="/contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: 'transparent', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', border: '2px solid #fff', boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.4)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)'; }}>
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <style>{`
          .slick-slider { height: 100vh; }
          .slick-list { height: 100vh; }
          .slick-track { height: 100vh; }
          .slick-slide > div { height: 100vh; }
          .slick-dots { bottom: 40px !important; z-index: 10; }
          .slick-dots li button:before { font-size: 12px; color: #fff; opacity: 0.5; }
          .slick-dots li.slick-active button:before { color: #c1a96c; opacity: 1; }
          .slick-prev, .slick-next { z-index: 10; width: 50px; height: 50px; }
          .slick-prev { left: 30px; }
          .slick-next { right: 30px; }
          .slick-prev:before, .slick-next:before { font-size: 40px; color: #c1a96c; opacity: 0.7; }
          .slick-prev:hover:before, .slick-next:hover:before { opacity: 1; }
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem !important; }
            p { font-size: 1rem !important; }
          }
        `}</style>
      </div>

      {/* Philosophy Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="philosophy-grid">
          <div className="scale-in">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
          </div>
          <div className="fade-in-right">
            <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Our Philosophy</p>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.2' }}>Architectural Curation.<br />Human Environments.</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#c1a96c', marginBottom: '1.5rem' }}>Design Philosophy</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>Every line drawn must serve a purpose—both functional and emotional. We don't just build structures; we curate the backdrop of your most meaningful moments.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>Precision</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Micro-detailed planning from foundation to finish.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>Materiality</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Sourcing unique textures that tell a story.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>Bespoke</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Tailored designs that reflect your identity.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem' }}>Reliability</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Timeline-driven execution without compromises.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>What we do</p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.2' }}>Crafting the Impossible.</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>A holistic approach to architecture, interior curation, and master planning, executed with surgical precision.</p>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="services-grid">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-1" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" alt="Architectural Planning" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>Architectural Planning</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>01</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>Strategic blueprints that harmonize structural integrity with aesthetic vision.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• BIM Modeling</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Blueprints</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Structural Analysis</li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-2" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Interior Curation" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>Interior Curation</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>02</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>Immersive interior environments tailored to modern lifestyle and comfort.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• 3D Rendering</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Bespoke Carpentry</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Lighting Design</li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-3" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" alt="Master Planning" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>Master Planning</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>03</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>Comprehensive urban design solutions for large-scale developments.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Site Analysis</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Zoning Studies</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Urban Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>The Methodology</p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2' }}>Our Four-Phase<br />Design Integrity.</h2>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="methodology-grid">
          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-1" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>01</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Concept Discovery</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>We dive into your vision, lifestyle, and site context to define the core DNA of the project.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Client Briefing</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Site Analysis</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Initial Sketches</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-2" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>02</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Surgical Design</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>Translating concepts into technical blueprints with structural logic and artistic expression.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• 3D Visualization</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Material Boards</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Technical Systems</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-3" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>03</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Active Creation</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>Executing the vision with curated materials and precision-led engineering oversight.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Project Management</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Vendor Coordination</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Quality Control</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-4" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>04</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Final Curation</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>The transition from structure to space. Every detail polished for immediate inspiration.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Interiors Fit-out</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Lighting Tuning</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Project Handover</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', height: '500px', backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#fff', maxWidth: '800px', padding: '0 2rem' }} className="fade-in-up">
            <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Let's talk about your project</p>
            <h2 style={{ fontSize: '4rem', fontWeight: '800', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2' }}>Create The<br />Extraordinary.</h2>
            <Link to="/contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c', marginTop: '1rem' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.5)'; }}>Start Your Journey</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .methodology-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
