import Link from "next/link";
import ArticleSuggestion from "./ArticleSuggestion";

export default function PageErrorState() {
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen justify-center items-center text-center">
        <p>
          We have some issues collecting the blogs. Please make sure that you
          are connected to the Internet. If this issue persists, please click{" "}
          <Link
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            here.
          </Link>
        </p>
      </div>
      <ArticleSuggestion />
    </>
  );
}
