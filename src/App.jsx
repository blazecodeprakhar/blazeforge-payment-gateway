import AboutSection from './components/AboutSection';
import DonateSection from './components/DonateSection';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-black text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
          <a
            href="https://blazecodeprakhar.github.io/blazeforge/"
            className="text-2xl font-bold hover:text-yellow-400"
          >
            ⚡BlazeForge
          </a>
          <nav className="space-x-4">
            <span className="text-sm">👻</span>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <AboutSection />
        <DonateSection />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;