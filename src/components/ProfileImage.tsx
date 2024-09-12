import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="mb-8 h-24 w-24 overflow-hidden rounded-full border-2 border-white">
      <Image
        src="/assets/hero.png"
        alt="Profile picture"
        width={96}
        height={96}
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
