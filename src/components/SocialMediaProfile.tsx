import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

export default function SocialMediaProfile() {
  return (
    <div className="fixed top-4 right-4 flex flex-col space-y-3">
      <Link
        href="https://www.instagram.com/gogetsomesleepplz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
      >
        <FaDiscord className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
      <Link
        href="https://x.com/adeadspider"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
      <Link
        href="https://github.com/spidercupcake"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
      <Link
        href="https://pk.linkedin.com/in/hamzazain2003"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
      </Link>
    </div>
  );
}
