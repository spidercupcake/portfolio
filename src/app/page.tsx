import dynamic from "next/dynamic";
import ProfileImage from "@/components/ProfileImage";
import AnimatedText from "@/components/AnimatedText";
import TechStack from "@/components/TechStack";
import SocialMediaProfile from "@/components/SocialMediaProfile";
import More from "@/components/More";

const BackgroundImage = dynamic(() => import("@/components/BackgroundImage"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-900" />,
});

export default function Home() {
  return (
    <div className="grid grid-rows relative h-full w-full bg-gray-900 text-white no-scrollbar">
      <BackgroundImage />
      <div className="grid place-content-center place-items-center gap-14 h-svh w-full z-20">
        <ProfileImage />
        <AnimatedText />
        <SocialMediaProfile />
      </div>
      <div className=" grid h-[1000px] z-10 bg-transparent bg-opacity-30 backdrop-blur-md">
        <TechStack />
        <More />
      </div>
    </div>
  );
}
