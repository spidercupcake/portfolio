import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative h-40 w-40 rounded-full border-2 border-white">
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
