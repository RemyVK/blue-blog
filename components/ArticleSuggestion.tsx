import Link from "next/link";

export default function ArticleSuggestion() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-30 h-30 flex flex-col justify-center items-start text-left mt-8 ml-4 lg:ml-0 lg:w-1/2 lg:pl-8">
      <h1 className="text-2xl font-bold mb-4">Suggested Articles</h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="https://randomblog.hu/ergonomics-expert-explains-how-to-set-up-your-desk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ergonomics Expert Explains How to Set Up Your Desk
          </Link>
        </li>
        <li>
          <Link
            href="https://disgustingfoodmuseum.berlin/2630/fuenf-minuten-ekel-interview-mit-isabel-kalisz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Fünf Minuten Ekel – Interview mit Isabel Kalisz
          </Link>
        </li>
      </ul>
    </div>
  );
}
