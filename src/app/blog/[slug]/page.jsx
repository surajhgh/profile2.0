import Link from 'next/link';
import { blogPosts } from './lib/blogData';


export default function BlogPost({ params }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">
                {post.date} · {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          </div>
          
          <div 
            className="prose prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group"
            >
              <svg 
                className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}