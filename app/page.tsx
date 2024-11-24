import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (

    <div className="relative">
      <Script 
        src="/assets/scrollAnimation.js"
        strategy="afterInteractive"
      />
      {/* Background Image with Overlay */}
      <div 
        data-scroll-background
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: 'url(/image/Cloud.png)',
        }}
      />
        <title>pisuto-dev</title>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black"
        style={{
          opacity: 0.7
        }}
      />

      <main className="flex-grow">
        {/* First Section (Hero) */}
        <section 
          data-scroll-hero
          className="relative min-h-screen flex items-center justify-center sticky top-0"
          style={{
            zIndex: 10
          }}
        >
          
          <div className="w-full max-w-6xl mx-auto p-8">
            <div className="flex items-center justify-between p-8 rounded-lg flex flex-col-reverse md:flex-row items-center">
              <div className=" p-6 rounded-lg">
                <dt className="sr-only">Title</dt>
                <dd className="text-black font-bold font-family: text-5xl dark:text-white">
                  Pisit Jinanikorn
                </dd>
                <dl className="mt-5">
                  IT student passionate about Web and Mobile Applications, Network Systems, and IoT & Embeded System.
                </dl>
              </div>
              <div className="p-4 rounded-lg">
                <div className="relative w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px]">
                  <Image
                    className="bg-transparent object-contain"
                    src="/image/me.png"
                    alt="It's me"
                    fill
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section (Skills) */}
        <section 
          data-scroll-skills
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 sticky top-0"
          style={{
            zIndex: 20
          }}
        >
          <div className="w-full max-w-6xl mx-auto p-8 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    React.js / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Laravel Framework & PHP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Node.js
                  </li>
                </ul>
              </div>

              <div 
                className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Flutter
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Kotlin
                  </li>
                </ul>
              </div>

              <div 
                className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Network Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Network Configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Security Protocols
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    System Administration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cloud Services
                  </li>
                </ul>
              </div>
              
              <div 
                className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">IoT & Embedded Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Arduino
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Raspberry Pi
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Sensor Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Embedded Systems
                  </li>
                </ul>
              </div>
              
            </div>
              <div className="mt-16 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="flex flex-col gap-4">
                  <p className="text-lg">
                    Interested in working together? Feel free to reach out!
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity"
                    >
                      Email Me
                    </a>
                    <a 
                      href="#" 
                      className="px-6 py-3 border border-black dark:border-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
              <div>
                {/* Footer */}
                <footer className="w-full flex mt-5 justify-center items-center py-4">
                  © 2024 pisuto-dev
                </footer>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}