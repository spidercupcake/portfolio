import Image from "next/image";

const technologies = [
  { name: "HTML5", icon: "/assets/icons/html5-color.svg" },
  { name: "CSS3", icon: "/assets/icons/css3-color.svg" },
  { name: "JavaScript", icon: "/assets/icons/javascript-color.svg" },
  { name: "TypeScript", icon: "/assets/icons/typescript-color.svg" },
  { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss-color.svg" },
  { name: "Node.js", icon: "/assets/icons/nodedotjs-color.svg" },
  { name: "React", icon: "/assets/icons/react-color.svg" },
  { name: "Git", icon: "/assets/icons/git-color.svg" },
  { name: "Python", icon: "/assets/icons/python-svgrepo-com.svg" },
  { name: "npm", icon: "/assets/icons/npm-color.svg" },
];

export default function TechStack() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-30 backdrop-blur-md">
      <div className="flex justify-center items-center space-x-4 overflow-y-auto h-20">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex-shrink-0">
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
