import ArticleSuggestion from "./ArticleSuggestion";

export default function NoDataPlaceHolder() {
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen justify-center items-center text-center">
        At this moment, we dont have any blog to read. Please visit after some
        time.
      </div>
      <ArticleSuggestion />
    </>
  );
}
