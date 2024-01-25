"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname();

  const goToCreate = () => {
    router.push("/create");
  };
  return (
    <div className="justify-end h-20 bg-cyan-700 mb-4 shadow-md text-end">
      {path === "/" && (
        <button
          onClick={goToCreate}
          className="bg-white shadow-md text-cyan-700 py-2 px-4 m-4 mr-8 rounded-md hover:text-cyan-500 focus:outline-none "
        >
          Create
        </button>
      )}
    </div>
  );
}
