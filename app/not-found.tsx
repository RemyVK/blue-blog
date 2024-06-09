import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="mb-4">Could not find the requested resource</h1>
      <Link href="/" className="text-blue-500">
        Click here to read all Posts
      </Link>
    </div>
  );
}
