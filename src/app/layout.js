
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Suraj Thapa | SEO Specialist & Frontend Developer',
  description:
    'Portfolio of Suraj Thapa, an SEO specialist and frontend developer helping businesses grow with on-page SEO, off-page SEO, high-quality backlinks, and conversion-focused web experiences.',
  metadataBase: new URL('https://www.surajthapa007.com.np'),
  openGraph: {
    title: 'Suraj Thapa | SEO Specialist & Frontend Developer',
    description:
      'Explore SEO case studies, web projects, and experience of SEO specialist and frontend developer Suraj Thapa, focused on rankings, traffic growth, and modern, performance-driven web applications.',
    url: 'https://www.surajthapa007.com.np',
    siteName: 'Suraj Thapa Portfolio',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.surajthapa007.com.np',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
