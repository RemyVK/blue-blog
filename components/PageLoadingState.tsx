import { RotatingLines } from "react-loader-spinner";

export default function PageLoadingState() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <RotatingLines
        visible={true}
        strokeColor="grey"
        width="96"
        strokeWidth="5"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
