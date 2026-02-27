import { Link } from 'react-router-dom';

const OurWorks = () => {
  const projects = [
    { 
      id: 1, 
      category: 'Commercial', 
      name: 'Sandeep Associates', 
      location: 'Rajahmundry', 
      year: '2024', 
      desc: 'A state-of-the-art cinematic destination that blends advanced acoustics with a luxury boutique aesthetic.', 
      style: 'Acoustic Modernism', 
      scope: 'Architectural & Interiors', 
      img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107965/project1_w8x01s.jpg',
      details: [
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107974/img2_c2atil.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107949/img6_tyaq9m.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107936/img10_p9xrmd.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107959/img5_qzgygu.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107991/img4_eqfspy.jpg'
      ],
      bg: '#fff' 
    },
    { 
      id: 2, 
      category: 'Renders', 
      name: ' Finance Office ', 
      location: 'RavulaPalem', 
      year: '2023', 
      desc: 'A private high-end residence focused on open-plan living and premium material curation.', 
      style: 'Contemporary Chic', 
      scope: 'Bespoke Interiors', 
      img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108025/img1_fkgxy7.jpg',
      details: [
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108004/img5_nzr4tf.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108033/img2_kwa5ue.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108046/img4_cyllbb.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108061/img5_zqccfk.jpg',
        'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108066/img6_dbna5u.jpg'
      ],
      bg: '#f9f9f9' 
    },
    { 
      id: 3, 
      category: 'On Site', 
      name: 'Finance Office', 
      location: 'RavulaPalem', 
      year: '2024', 
      desc: 'A modern finance office combining professional workspace design with on-site construction excellence.', 
      style: 'Modern Professional', 
      scope: 'Commercial & On-site', 
      img: 'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172552/img8_wcmxnn.jpg',
      details: [
        'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172559/img9_p2wzx6.jpg',
        'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172538/img6_c38pnf.jpg',
        'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172440/img6_aurcuq.jpg',
        'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172416/img2_e8zu56.jpg',
        'https://res.cloudinary.com/dokxc6as9/image/upload/v1772172406/img1_rgtzvc.jpg'
      ],
      bg: '#fff' 
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }} className="page-enter">
      {/* Hero Section */}
      <div style={{ width: '100vw', height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(2px)' }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 5%', maxWidth: '900px' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '1rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Our Legacy</p>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1', background: 'linear-gradient(135deg, #fff 0%, #c1a96c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: 'none' }}>Curating<br />Destinations.</h1>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '3rem', color: '#f0f0f0', fontWeight: '400', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>We translate complex requirements into elegant spatial solutions.</p>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.4s ease', boxShadow: '0 10px 30px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 15px 40px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 30px rgba(193, 169, 108, 0.5)'; }}><span>←</span> Return to Home</Link>
        </div>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <div key={project.id} style={{ padding: '6rem 5%', backgroundColor: project.bg }} className="fade-in-up">
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="project-showcase">
            {index % 2 === 0 ? (
              <>
                <div style={{ position: 'relative' }} className="scale-in stagger-1">
                  <img src={project.img} alt={project.name} style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.boxShadow = '0 25px 70px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }} />
                  {project.details.length > 0 && (
                    <div style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', width: '90%', justifyContent: 'center' }}>
                      {project.details.map((detailImg, idx) => (
                        <img key={idx} src={detailImg} alt={`Detail ${idx + 1}`} style={{ flex: '1', maxWidth: '20%', height: '120px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '3px solid #fff', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-10px) scale(1.05)'; e.target.style.boxShadow = '0 15px 40px rgba(193, 169, 108, 0.4)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; }} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="fade-in-right stagger-2">
                  <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.category}</p>
                  <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.name}</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.5rem' }}>{project.location}</p>
                  <p style={{ fontSize: '1rem', color: '#c1a96c', fontWeight: '700', marginBottom: '2rem' }}>{project.year}</p>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>{project.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', backgroundColor: project.bg === '#fff' ? '#f9f9f9' : '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Style</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p></div>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Scope</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p></div>
                  </div>
                  <Link to="/portfolio" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#c1a96c', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Explore Full Portfolio</Link>
                </div>
              </>
            ) : (
              <>
                <div className="fade-in-left stagger-2">
                  <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.category}</p>
                  <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.name}</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.5rem' }}>{project.location}</p>
                  <p style={{ fontSize: '1rem', color: '#c1a96c', fontWeight: '700', marginBottom: '2rem' }}>{project.year}</p>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>{project.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', backgroundColor: project.bg === '#fff' ? '#f9f9f9' : '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Style</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p></div>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Scope</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p></div>
                  </div>
                  <Link to="/portfolio" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#c1a96c', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Explore Full Portfolio</Link>
                </div>
                <div style={{ position: 'relative' }} className="scale-in stagger-1">
                  <img src={project.img} alt={project.name} style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.boxShadow = '0 25px 70px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }} />
                  {project.details.length > 0 && (
                    <div style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', width: '90%', justifyContent: 'center' }}>
                      {project.details.map((detailImg, idx) => (
                        <img key={idx} src={detailImg} alt={`Detail ${idx + 1}`} style={{ flex: '1', maxWidth: '20%', height: '120px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '3px solid #fff', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-10px) scale(1.05)'; e.target.style.boxShadow = '0 15px 40px rgba(193, 169, 108, 0.4)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'; }} />
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 968px) {
          .project-showcase { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 3rem !important; }
          p { font-size: 1rem !important; }
          div[style*="backgroundAttachment: 'fixed'"] { background-attachment: scroll !important; }
        }
      `}</style>
    </div>
  );
};

export default OurWorks;
