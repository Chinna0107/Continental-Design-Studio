import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107965/project1_w8x01s.jpg', span: 'tall' },
    { id: 2, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107974/img2_c2atil.jpg', span: 'wide' },
    { id: 3, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107949/img6_tyaq9m.jpg', span: 'normal' },
    { id: 4, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107936/img10_p9xrmd.jpg', span: 'normal' },
    { id: 5, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107959/img5_qzgygu.jpg', span: 'tall' },
    { id: 6, category: 'Commercial', name: 'Sandeep Associates', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772107991/img4_eqfspy.jpg', span: 'wide' },
    { id: 7, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108025/img1_fkgxy7.jpg', span: 'normal' },
    { id: 8, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108004/img5_nzr4tf.jpg', span: 'big' },
    { id: 9, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108033/img2_kwa5ue.jpg', span: 'normal' },
    { id: 10, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108046/img4_cyllbb.jpg', span: 'tall' },
    { id: 11, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108061/img5_zqccfk.jpg', span: 'normal' },
    { id: 12, category: 'Interior', name: 'Finance Office', img: 'https://res.cloudinary.com/dgyykbmt6/image/upload/v1772108066/img6_dbna5u.jpg', span: 'wide' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f8f8', paddingTop: '100px' }} className="page-enter">
      <div style={{ padding: '2rem 5%', textAlign: 'center', backgroundColor: '#fff' }} className="fade-in-up">
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: '1.2' }}>Portfolio <span style={{ color: '#c1a96c' }}>Iconic Spaces.</span></h1>
        <p style={{ fontSize: '1rem', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>A curated selection of our most prestigious architectural and interior projects in Rajahmundry.</p>
      </div>

      <div style={{ padding: '3rem 5%', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }} className="fade-in-up stagger-1">
        {['All', 'Commercial', 'Interior', 'Architectural'].map(filter => (
          <button key={filter} onClick={() => setActiveFilter(filter)} style={{ padding: '1rem 2.5rem', backgroundColor: activeFilter === filter ? '#c1a96c' : 'transparent', color: activeFilter === filter ? '#fff' : '#1a1a1a', border: `2px solid ${activeFilter === filter ? '#c1a96c' : '#ddd'}`, borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: activeFilter === filter ? '0 8px 25px rgba(193, 169, 108, 0.4)' : 'none' }} onMouseOver={(e) => { if (activeFilter !== filter) { e.target.style.borderColor = '#c1a96c'; e.target.style.color = '#c1a96c'; }}} onMouseOut={(e) => { if (activeFilter !== filter) { e.target.style.borderColor = '#ddd'; e.target.style.color = '#1a1a1a'; }}}>{filter}</button>
        ))}
      </div>

      <div style={{ padding: '2rem 5% 6rem', maxWidth: '1600px', margin: '0 auto' }} className="fade-in-up stagger-2">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridAutoRows: '250px', gap: '1.5rem', gridAutoFlow: 'dense' }} className="masonry-grid">
          {filteredProjects.map(project => (
            <div key={project.id} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'all 0.4s ease', cursor: 'pointer', backgroundColor: '#fff', gridRow: project.span === 'tall' ? 'span 2' : project.span === 'big' ? 'span 2' : 'span 1', gridColumn: project.span === 'wide' ? 'span 2' : project.span === 'big' ? 'span 2' : 'span 1' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'; }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
                <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#c1a96c', color: '#fff', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '20px', marginBottom: '0.5rem', width: 'fit-content' }}>{project.category}</span>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>{project.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .masonry-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 1.8rem !important; }
          .masonry-grid { grid-template-columns: 1fr !important; grid-auto-rows: 300px !important; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
