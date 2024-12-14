"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaymentFailure() {
  const [countdown, setCountdown] = useState(30); // Countdown timer (30 seconds)
  const router = useRouter();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to home when countdown reaches 0
    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-200 px-4">
      <div className="max-w-xl w-full text-center bg-red-100 p-8 rounded-lg shadow-lg">
        {/* Failure Icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-24 h-24 text-red-500 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Failure Message */}
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment was not successful. Please try again later
          or contact {" "}
          <Link
            href="/contact"
            className="text-blue-500 underline hover:text-blue-700 transition"
          >
            support
          </Link>
          .
        </p>

        {/* Countdown Timer */}
        <p className="text-gray-700 mb-4">
          Redirecting to the home page in{" "}
          <span className="font-bold text-red-500">{countdown}</span> seconds...
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
