import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialMediaProfile() {
  return (
    <div className="fixed top-4 right-4 flex flex-col space-y-3">
      <Link
        href="https://www.instagram.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
      <Link
        href="https://github.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/your_username"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
    </div>
  );
}
