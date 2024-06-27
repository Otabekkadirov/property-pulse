"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const Properties = () => {
  const router = useRouter();
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h1 className="text-lg">Properties</h1>
      <Link href="/" className="text-blue-500">
        Go Home
      </Link>

      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-blue-800 text-white text-lg px-5 py-2 rounded-lg"
      >
        Go Home
      </button>
    </div>
  );
};

export default Properties;
