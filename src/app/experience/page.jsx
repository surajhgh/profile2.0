export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'SEO Specialist',
      company: 'NavaTech & Media',
      period: '2025 - Present',
      description: 'Planning and executing on-page and off-page SEO strategies, keyword research, and backlink campaigns to grow organic traffic for clients in Nepal and beyond.',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'WebSolutions',
      period: '2018 - 2020',
      description: 'Developed responsive web applications using React and implemented UI components.',
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2016 - 2018',
      description: 'Assisted in developing and maintaining company websites and web applications.',
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Experience</h1>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              <div className="hidden md:block md:w-1/2"></div>
              
              <div className="flex items-start w-full md:w-1/2">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  {exp.id}
                </div>
                
                <div className={`ml-4 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-indigo-600 mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
