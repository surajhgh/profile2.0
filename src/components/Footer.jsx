export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">MyPortfolio</h3>
            <p className="text-gray-400 mt-2">
              © {new Date().getFullYear()} Suraj Thapa. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2">
              Member of{" "}
              <a
                href="https://www.navatechmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
              >
                NavaTech &amp; Media
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-400">Connect with me</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-gray-600 hover:border-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-gray-600 hover:border-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-gray-600 hover:border-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-gray-600 hover:border-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-gray-600 hover:border-indigo-400 hover:text-indigo-300 text-sm transition"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
