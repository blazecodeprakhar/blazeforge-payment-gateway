import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-8 py-16 rounded-2xl shadow-xl my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Connect with Me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.instagram.com/iitzprakhar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 text-xl flex items-center gap-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@iitzprakhar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 text-xl flex items-center gap-2"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/prakhar-yadav-0963s8299/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 text-xl flex items-center gap-2"
        >
          <FaLinkedin /> 
        </a>
        <a
          href="mailto:prakharyadav096@gmail.com"
          className="hover:text-green-500 text-xl flex items-center gap-2"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/blazecodeprakhar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 text-xl flex items-center gap-2"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
