import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-h-screen flex flex-col justify-start items-center mt-10">
      <Image
        src={"/404.svg"}
        alt="error-404"
        width={600}
        height={600}
        className="mb-10"
        unoptimized
      />
      <h1 className="text-5xl font-bold mb-6"> Ooops </h1>
      <h2 className="text-xl mb-6">You were not supposed to land here.</h2>
      <Link
        href={"/"}
        className="glass-card px-4 py-2 font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        Back to main page
      </Link>
    </div>
  );
}
