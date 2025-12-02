"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth"; // ✅ User importé ici
import Sidebar from "./Sidebar";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return null;
  if (!user) return null;



  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar  />
      <main className="flex-1 px-4 md:px-6 lg:px-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
