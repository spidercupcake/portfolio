import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border-2 border-white">
      <Image
        src="/assets/hero.png"
        alt="Profile picture"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
