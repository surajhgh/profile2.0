import Link from 'next/link'

export default function Home() {
  return (
    <div className="py-12">
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-indigo-600">Suraj Thapa</span></h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Developer</h2>
            <p className="text-lg mb-8 text-gray-600">
              I create beautiful, responsive websites with modern technologies like Next.js and Tailwind CSS.
            </p>
            <div className="flex space-x-4">
              <Link href="/portfolio" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                View My Work
              </Link>
              <Link href="/contact" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img className='h-80 w-3xl' src='/suraj.webp' alt='suraj portfolio picture'></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Figma', 'Git'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold">{skill.charAt(0)}</span>
                </div>
                <h3 className="font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}