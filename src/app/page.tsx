import dynamic from "next/dynamic";
import ProfileImage from "@/components/ProfileImage";
import AnimatedText from "@/components/AnimatedText";
import TechStack from "@/components/TechStack";
import SocialMediaProfile from "@/components/SocialMediaProfile";
import Footer from "@/components/Footer";
import More from "@/components/More";

const BackgroundImage = dynamic(() => import("@/components/BackgroundImage"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-zinc-900" />,
});

export default function Home() {
  return (
    <main className="grid grid-rows relative h-full w-full bg-zinc-900 text-white no-scrollbar">
      <BackgroundImage />
      <div className="grid place-content-center place-items-center gap-14 h-svh w-full z-20">
        <ProfileImage />
        <AnimatedText />
        <SocialMediaProfile />
      </div>
      <div className=" grid grid-rows-[5rem_1500px_60vh] h-[2000px] z-10 bg-transparent bg-opacity-30 backdrop-blur-md">
        <TechStack />
        <More />
        <Footer />
      </div>
    </main>
  );
}
