import Link from "next/link";

export default function PageErrorState() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center text-center">
        <p>
          We have some issues collecting the blogs. Please make sure that you
          are connected to the Internet. If this issue persists, please click{" "}
          <Link
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </Link>
        </p>
      </div>
    </>
  );
}
