"use client";
import Link from "next/link";
import { useRouter, useParams, useSearchParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();

  return (
    <div>
      <h1 className="text-lg">Properties</h1>
      <Link href="/" className="text-blue-500">
        Go Home
      </Link>

      <button className="bg-blue-800 text-white text-lg px-5 py-2 rounded-lg">
        Go Home {id}
      </button>
    </div>
  );
};

export default PropertyPage;
