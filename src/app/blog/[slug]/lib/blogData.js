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
    }
  ];