import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, category: 'Commercial', name: 'Akshara Theatre', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80', span: 'tall' },
    { id: 2, category: 'Interior', name: 'Luxury Residence', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', span: 'wide' },
    { id: 3, category: 'Architectural', name: 'Modern Villa', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', span: 'normal' },
    { id: 4, category: 'Commercial', name: 'Tech Hub Office', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', span: 'normal' },
    { id: 5, category: 'Interior', name: 'Penthouse Suite', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80', span: 'tall' },
    { id: 6, category: 'Architectural', name: 'Corporate HQ', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', span: 'wide' },
    { id: 7, category: 'Commercial', name: 'Retail Complex', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', span: 'normal' },
    { id: 8, category: 'Interior', name: 'Boutique Hotel', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', span: 'big' },
    { id: 9, category: 'Architectural', name: 'Residential Tower', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', span: 'normal' },
    { id: 10, category: 'Commercial', name: 'Shopping Mall', img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80', span: 'tall' },
    { id: 11, category: 'Interior', name: 'Executive Office', img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80', span: 'normal' },
    { id: 12, category: 'Architectural', name: 'Urban Complex', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', span: 'wide' },
    { id: 13, category: 'Interior', name: 'Minimalist Loft', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', span: 'normal' },
    { id: 14, category: 'Commercial', name: 'Business Center', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', span: 'tall' },
    { id: 15, category: 'Architectural', name: 'Glass Pavilion', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', span: 'wide' },
    { id: 16, category: 'Interior', name: 'Contemporary Living', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', span: 'normal' },
    { id: 17, category: 'Commercial', name: 'Flagship Store', img: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80', span: 'normal' },
    { id: 18, category: 'Architectural', name: 'Skyline Tower', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80', span: 'tall' },
    { id: 19, category: 'Interior', name: 'Designer Kitchen', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80', span: 'wide' },
    { id: 20, category: 'Commercial', name: 'Co-Working Space', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', span: 'normal' },
    { id: 21, category: 'Architectural', name: 'Heritage Restoration', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', span: 'big' },
    { id: 22, category: 'Interior', name: 'Master Bedroom Suite', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', span: 'normal' },
    { id: 23, category: 'Commercial', name: 'Restaurant Design', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', span: 'wide' },
    { id: 24, category: 'Architectural', name: 'Waterfront Complex', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', span: 'tall' }
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
