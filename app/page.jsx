import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-lg">Welcome</h1>
      <Link href="/properties" className="text-blue-500">
        Show properties
      </Link>
    </div>
  );
};

export default HomePage;
