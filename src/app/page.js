import Link from 'next/link'
import Image from 'next/image';
export default function Home() {
  return (
    <div className="py-12">
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-sm font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">
              Portfolio Of
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Hi, I am <span className="text-indigo-600">Suraj Thapa</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              SEO Specialist & Frontend Developer
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              I help businesses grow online with strategic SEO and modern web
              development. From keyword research to technical SEO, on-page
              optimization, and speed-focused React and Next.js builds, I align
              your website with real business goals.
            </p>
            <p className="text-base mb-8 text-gray-600">
              I work on complete SEO strategies, including on-page SEO, off-page
              SEO, content planning, and building high-quality, relevant backlinks
              that support long-term rankings and brand trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-sm">
                View Selected Projects
              </Link>
              <Link href="/contact" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Request a Consultation
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden relative shadow-lg">
              <Image
                src="/suraj.webp"
                alt="Professional portrait of Suraj Thapa"
                fill
                className="object-cover"
                quality={85}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Core Skills & Tools</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            I work across the full front-end stack, from design handoff to deployment,
            using frameworks and tools that are production-ready and business focused.
          </p>
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
