"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const [countdown, setCountdown] = useState(30); // Initialize timer at 30 seconds
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown <= 0) {
      clearInterval(timer);
      router.push("/"); // Redirect to the home page
    }

    return () => clearInterval(timer); // Cleanup timer
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-300 px-4">
      <div className="max-w-xl bg-green-100 rounded-lg shadow-lg p-6 sm:p-10 text-center">
        <div className="flex items-center justify-center">
          <svg
            className="w-24 h-24 text-green-500 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-4xl font-medium mt-6 text-green-600">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <p className="mt-2 text-gray-700 font-semibold">
          Redirecting to home in <span className="text-blue-600">{countdown}</span> seconds...
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 bg-green-600 hover:opacity-75 transition-opacity duration-300 text-white font-medium rounded-lg"
        >
          Go to Home Now
        </button>
      </div>
    </div>
  );
}
