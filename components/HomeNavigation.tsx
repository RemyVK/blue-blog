import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeNavigation() {
  const router = useRouter();
  const handleClick = () => router.push("/");

  return (
    <div className="w-12 h-12">
      <Image
        src="/images/HomeIcon.png"
        width={25}
        height={30}
        alt="Back Home"
        onClick={handleClick}
        className="cursor-pointer"
      />
    </div>
  );
}
