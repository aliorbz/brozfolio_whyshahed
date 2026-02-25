import React from 'react';

// Define the Project interface to ensure 'link' and other properties are correctly typed
interface Project {
  id: number;
  title: string;
  year: string;
  tags: { name: string; color: string; }[];
  image: string;
  fullWidth?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AlphaBroz Community',
    year: '2025-26',
    tags: [
      { name: 'CMO', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'Moderator', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: '/media/alphabroz.png',
    fullWidth: true
  },
  {
    id: 2,
    title: 'Dawn network',
    year: '2026',
    tags: [
      { name: 'Head Regional MOD', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      
    ],
    image: '/media/dawn.png'
  },
  {
    id: 3,
    title: 'Linera',
    year: '2026',
    tags: [
      { name: 'Regional Moderator', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      
    ],
    image: '/media/linera.png'
  },
  {
    id: 4,
    title: 'Citrea',
    year: '2025-26',
    tags: [
      { name: 'Country Supervision', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      
    ],
    image: '/media/citrea.png'
  },
  {
    id: 5,
    title: 'ZAMA',
    year: '2025-26',
    tags: [
      { name: 'Volunteer', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      
    ],
    image: '/media/zama.png'
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section className="scroll-reveal bg-[#f9f5f2] rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:px-16 lg:py-20 overflow-visible shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 relative items-start">
        
        {/* Left Column - Title Part (Takes 2/5 of the grid space) */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4 lg:sticky lg:top-40 h-fit pt-10 lg:pt-0 pr-4">
          <div className="max-w-full">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[0.95] tracking-tighter mb-4">
              Involvements
            </h2>
            <p className="text-black font-bold text-base sm:text-lg lg:text-xl leading-snug opacity-70">
              Explore my Involvements on this web3 space...
            </p>
          </div>
        </div>

        {/* Right Column - Cards Part (Takes 3/5 of the grid space) */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.fullWidth ? 'md:col-span-2' : 'md:col-span-1'} group flex flex-col`}
            >
              {/* Correctly checking for link property after adding it to the Project interface */}
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 bg-white aspect-[16/10] relative border border-gray-100 block shadow-sm"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </a>
              ) : (
                <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 bg-white aspect-[16/10] relative border border-gray-100 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              )}

              <div className="flex justify-between items-center px-1 mb-3">
                <h3 className="text-sm sm:text-base font-black text-[#1a1a1a] tracking-tight uppercase">
                  {project.title}
                </h3>
                <span className="text-xs sm:text-sm font-black text-black/50">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 px-0.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`${tag.color} px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest leading-none shadow-sm`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;