import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeNavigation() {
  const router = useRouter();
  const handleClick = () => router.push("/");
  return (
    <Image
      fill
      src="/images/HomeIcon.png"
      sizes="(max-width: 50px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt={" Back Home"}
      onClick={handleClick}
    />
  );
}
