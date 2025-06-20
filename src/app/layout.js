
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
// import Clouds from '../components/Clouds';

export const metadata = {
  title: 'My Portfolio',
  description: 'Professional portfolio showcasing my work and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* <Clouds /> */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}