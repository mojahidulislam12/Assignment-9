import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 px-4">
      {/* 404 Code */}
      <h1 className="text-[120px] font-extrabold text-gray-300 select-none">
        404
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 -mt-10">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-3 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {/* Home Button */}
        <Link
          href="/"
          className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition"
        >
          <Home size={18} />
          Go Home
        </Link>

        {/* Back Button (using Link instead of onClick) */}
        <Link
          href="/"
          className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-xl hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} />
          Go Back
        </Link>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-400 mt-8">Error Code: 404 | Not Found</p>
    </div>
  );
}
