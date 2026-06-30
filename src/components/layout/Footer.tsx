export default function Footer() {
  return (
    <footer id="foot" className="bg-sky-950 p-3 text-white shadow-sky-200">
      <div className="container mx-auto text-center px-1">
        <div className="py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 ">Let's get in touch!</h1>
          <h2 className="text-xl md:text-2xl max-w-4xl mx-auto">I'm currently based in Batam, Indonesia. Feel free to reach out and let's collaborate to achieve great things together.</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-3 mt-3 text-xl md:text-3xl">
          <a href="mailto:fanni.kharisma88@gmail.com?subject=Opportunity" className="rounded-lg font-semibold border-2 p-4">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/fanni-kharisma/" className="rounded-lg font-semibold border-2 p-4">
            LinkedIn
          </a>
        </div>
        <div className="py-10">
          <p className="copyright">&copy; 2026 Attaya IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
