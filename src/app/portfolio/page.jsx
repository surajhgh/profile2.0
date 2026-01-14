import Image from 'next/image';
import Link from 'next/link';
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      projectUrl: 'https://www.exoticindiaart.com/',
      title: 'E-commerce Website',
      description: 'A full-featured online store with product catalog, cart, and checkout.',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
      image: '/ecommerce.png'
    },
    {
      id: 2,
      projectUrl: 'https://www.surajthapa007.com.np/',
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for creatives and developers.',
      tags: ['React', 'Framer Motion', 'SCSS'],
      image: '/protfolio.png'
    },
    {
      id: 3,
      projectUrl: 'https://tmetric.com/',
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with team collaboration.',
      tags: ['Firebase', 'React', 'Material UI'],
      image: '/task.png'
    },
    {
      id: 4,
      projectUrl: 'https://www.navatechmedia.com/',
      title: 'NavaTech & Media',
      description: 'Technology and media company providing training, web applications, cloud, and digital marketing solutions across Nepal and Australia.',
      tags: ['SEO', 'Digital Marketing', 'Web Applications'],
      image: '/navatech.png'
    },
    {
      id: 5,
      projectUrl: 'https://www.thatadwala.com/',
      title: 'That Ad Wala',
      description: 'Creative video production and ad agency focused on storytelling, reels, and result-driven commercial content.',
      tags: ['SEO', 'Content Strategy', 'Video Marketing'],
      image: '/thatadwala.png'
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
               <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button >
                    <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View Project →
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
