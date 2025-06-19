import Link from 'next/link';
import { blogPosts } from '@/app/blog/[slug]/lib/blogData';

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
        
        <div className="space-y-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-green-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">
                  {post.date} · {post.readTime}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group"
              >
                Read full story
                <svg 
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

