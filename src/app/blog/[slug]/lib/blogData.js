  export const blogPosts = [
    {
      id: 1,
      slug: 'nextjs-for-beginners',
      title: 'Next.js for Beginners',
      excerpt: 'Learn how to get started with Next.js in this comprehensive guide',
      date: 'June 10, 2023',
      readTime: '8 min read',
      category: 'Web Development',
      content: `
        <h2>Why Choose Next.js?</h2>
        <p>Next.js has become one of the most popular React frameworks because it combines the best of static site generation and server-side rendering with React's component model.</p>
        
        <h2>Core Features</h2>
        <ul>
          <li><strong>Server-side rendering</strong> out of the box for better SEO</li>
          <li><strong>File-based routing</strong> - just add files to the pages directory</li>
          <li><strong>API routes</strong> - build your API alongside your frontend</li>
          <li><strong>Built-in CSS and Sass support</strong> - including CSS Modules</li>
        </ul>
        
        <h2>Getting Started</h2>
        <a  text-blue-400 href="https://nextjs.org/">start next.js</a>
        <p>To create a new Next.js project, run:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>
        <p>Then navigate to your project folder and start the development server:</p>
        <pre><code>cd my-app\nnpm run dev</code></pre>
      `
    },
  
    {
      id: 2,
      slug: 'tailwind-css-tips',
      title: 'Tailwind CSS Tips and Tricks',
      excerpt: 'Boost your productivity with these Tailwind CSS techniques',
      date: 'May 25, 2023',
      readTime: '6 min read',
      category: 'CSS',
      content: `
        <h2>Why Tailwind CSS?</h2>
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup without ever leaving your HTML.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Use @apply sparingly</strong> - only for truly repeated utility combinations</li>
          <li><strong>Organize classes consistently</strong> - group related utilities together</li>
          <li><strong>Leverage the config file</strong> - customize colors, spacing, etc.</li>
          <li><strong>Use JIT mode</strong> - for faster builds and smaller bundles</li>
        </ul>
        
        <h2>Pro Tips</h2>
        <pre><code>hover:scale-105 transition-transform duration-300</code></pre>
        <p>This combination creates a nice hover effect that slightly scales up elements.</p>
      `
    },

    {
      id: 3,
      slug: 'story-time',
      title: ': The Rules of Sam',
      excerpt: 'a short loving story, that may be happen in past or may be in future',
      date: 'jan 25, 2024',
      readTime: '6 min read',
      category: 'uncertain love',
      content: `
        <h2>Chapter 1: A Man of Principles</h2>
        <p>Sam was a man molded by discipline. Raised in a strict household, he inherited a list—a mental ledger of qualities that his life partner must have. Same caste. Fair skin. A particular height. A demeanor of politeness and courage. These weren’t preferences—they were laws he etched into his identity. Sam didn't 
        see them as constraints, but as a way to maintain the perfection he believed life needed to have.</p>


        <br>


        <h2>Chapter 2: The Unlikely Spark</h2>
        <p>Then came her. Her name started with P—let's call her Priya. She wasn’t from his caste. Her skin was dusky and her height shorter than his desired measure. But there was something about her—maybe the way her eyes twinkled when she laughed, or how she challenged his thoughts, or simply the energy of youth. 
        Whatever it was, Sam fell in love, not by choice but by emotion.</p>
    <br>


              <h2>Chapter 3: The Proposal</h2>
        <p>Sam fought the attraction at first, tried to silence the voice in his head that whispered, "She’s not on the list." But love isn’t logical. He proposed. Priya, with no idea about Sam’s rules, accepted with joy. For her, Sam was the man she would do anything for. For Sam, Priya was the
        exception he never expected to make.</p>

    <br>

              <h2>Chapter 4: Love in the Shadow of Rules</h2>
        <p>Four years passed. Their relationship bloomed. Priya became everything Sam didn’t expect—bold, beautiful, selfless, kind. Yet, Sam’s rules never left him. Every day he was reminded—by family, by the mirror, by his own voice—that Priya wasn’t who he said he would marry.
        The guilt ate at him. He wasn’t at peace.</p>

    <br>

              <h2>Chapter 5: The Goodbye</h2>
        <p>One evening, Sam sat beside Priya under the moonlit sky and told her it was over. No scandal. No betrayal. Just a slow and cold goodbye. She cried, not because he left, but because she knew 
        he still loved her—just not enough to defy himself.</p>

    <br>

              <h2>Chapter 6: The Silence Between Them</h2>
        <p>Sam moved on. Or at least pretended to. He buried his feelings beneath the routine. Priya couldn’t. Her love wasn’t logical either. It was real, raw, and committed. She didn’t understand how someone who once loved her so deeply could walk away so easily.
        But Sam hadn’t walked away easily. He walked away obediently—to himself.</p>

        

          <br>

      
        <p>Chapter 7: The Crossroads</p><br>
        <p>What should happen next?</p>
        <ul>
          <li>•	Should Priya rise, rebuild herself, and let go of Sam completely?</li>
          <li>•	Should Sam realize his error and fight against the rules he once worshipped?</li>
          <li>•	Should Priya confront him and shake him out of his constructed idealism?.</li>
          <li>•	Or should a new character enter—someone who sees Priya for all that she is?</li>
        </ul>
        
        <h2>You decide.</h2>
        <pre><code>Because sometimes, the end of one story is the beginning of another, and love—true love—deserves to be fought for, 
        redefined, and set free from rules that chain the heart.</code></pre>
      
      `
    },

    {
      id: 4,
      slug: 'on-page-seo-fundamentals',
      title: 'On-Page SEO Fundamentals for Service Websites',
      excerpt: 'Learn how to optimize your pages for keywords, users, and Google.',
      date: 'January 10, 2026',
      readTime: '9 min read',
      category: 'SEO',
      content: `
        <h2>What Is On-Page SEO?</h2>
        <p>On-page SEO is everything you do directly on your website to help search engines understand your content and to give users a better experience.</p>

        <h2>Core On-Page Elements</h2>
        <ul>
          <li><strong>Title tags</strong> that include your primary keyword and clear value.</li>
          <li><strong>Meta descriptions</strong> that invite clicks and explain your offer.</li>
          <li><strong>H1 and subheadings</strong> that structure the content logically.</li>
          <li><strong>Clean URLs</strong> that are short, readable, and keyword-rich.</li>
          <li><strong>Internal links</strong> that connect related pages and help crawling.</li>
        </ul>

        <h2>Content That Matches Search Intent</h2>
        <p>Before writing, understand what users really want when they search your keyword. For example, someone searching "SEO specialist in Nepal" wants services, trust, and proof of results, not just definitions.</p>

        <h2>Technical Touches</h2>
        <p>Improve page speed, mobile responsiveness, and core web vitals. A fast site keeps users engaged and supports better rankings.</p>
      `
    },

    {
      id: 5,
      slug: 'off-page-seo-and-link-building',
      title: 'Off-Page SEO and Smart Link Building Strategies',
      excerpt: 'How to build authority with safe, long-term off-page SEO.',
      date: 'January 11, 2026',
      readTime: '8 min read',
      category: 'SEO',
      content: `
        <h2>What Is Off-Page SEO?</h2>
        <p>Off-page SEO includes all activities done outside your website to increase your authority and trust in the eyes of search engines.</p>

        <h2>Why Backlinks Matter</h2>
        <p>Backlinks are links from other sites to yours. When relevant, trustworthy sites link to you, they act like votes of confidence for your content.</p>

        <h2>Safe Link Building Ideas</h2>
        <ul>
          <li><strong>Guest posting</strong> on relevant blogs with real audiences.</li>
          <li><strong>Business directories</strong> and local listings that match your niche.</li>
          <li><strong>Partnerships</strong> with brands where you already collaborate in real life.</li>
          <li><strong>Content collaborations</strong> like interviews, case studies, or roundups.</li>
        </ul>

        <h2>Avoid These Mistakes</h2>
        <p>Do not buy random backlinks or use spammy automation. Focus on quality, relevance, and real relationships. Your off-page SEO should look natural and support your brand for years.</p>
      `
    },

    {
      id: 6,
      slug: 'building-backlinks-for-nepali-businesses',
      title: 'Building Backlinks for Nepali Businesses',
      excerpt: 'Practical backlink ideas for businesses in Nepal and abroad.',
      date: 'January 12, 2026',
      readTime: '7 min read',
      category: 'SEO',
      content: `
        <h2>Backlinks for Local and International Visibility</h2>
        <p>For Nepali businesses targeting local and global audiences, backlinks help your brand appear on the right searches and build trust beyond social media.</p>

        <h2>Backlink Opportunities</h2>
        <ul>
          <li><strong>Local news sites</strong> and blogs that cover business stories.</li>
          <li><strong>Industry partners</strong> such as training academies, agencies, and SaaS tools you use.</li>
          <li><strong>Client case studies</strong> where you show the results you delivered.</li>
          <li><strong>Portfolio links</strong> from platforms that feature your work.</li>
        </ul>

        <h2>Focusing on Quality Over Quantity</h2>
        <p>A few strong backlinks from trusted, relevant domains are more powerful than hundreds of weak links. Always choose relevance, authority, and real relationships over shortcuts.</p>
      `
    }
  ];
