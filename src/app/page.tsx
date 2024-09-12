import dynamic from "next/dynamic";
import ProfileImage from "@/components/ProfileImage";
import AnimatedText from "@/components/AnimatedText";

const BackgroundImage = dynamic(() => import("@/components/BackgroundImage"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-900" />,
});

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
      <BackgroundImage />
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <ProfileImage />
        <AnimatedText />
      </div>
    </div>
  );
}
