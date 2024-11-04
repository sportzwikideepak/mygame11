// components/ProtectedRoute/index.js
"use client"; // Ensure this is a client-side component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login'); // Redirect to login if no token found
      setLoading(false)
    } else {
      try {
        // Optionally validate the token here
        setLoading(false); // Allow rendering after authentication check
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
  }, [token, router]);

  if (loading) {
    return <div>Loading...</div>; // Loading state while verifying token
  }

  return <>{children}</>; // Render children when authenticated
}
