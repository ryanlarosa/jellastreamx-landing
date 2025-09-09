"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // correct import
import "/public/logo.png"; // Ensure the logo is in the public directory

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-b from-red-600/80 to-black">
        <div className="w-32 h-32 mb-6 relative">
          <Image
            src="/logo.png"
            alt="JellaStreamX Logo"
            className="object-contain"
            width={128}
            height={128}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          JellaStreamX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          Stream smarter. Discover faster. Your world of movies, TV shows, and
          anime in one sleek app.
        </motion.p>

        <motion.a
          href="https://www.mediafire.com/file/jfnw4zekrd9zb3d/JellaStreamX-V1.0.1.apk/file.apk"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex items-center gap-2 bg-red-700 hover:bg-red-800 px-6 py-3 rounded-2xl font-semibold text-lg shadow-lg"
        >
          <Play className="w-5 h-5" /> Download APK
        </motion.a>
      </header>

      {/* Features Section */}
      <section className="px-6 py-20 bg-black grid gap-12 md:grid-cols-3">
        {[
          {
            title: "Trending & Popular",
            desc: "Stay updated with the hottest movies, TV shows, and anime — all powered by TMDB.",
          },
          {
            title: "My List & Continue Watching",
            desc: "Personalized experience that saves your favorites and tracks your progress.",
          },
          {
            title: "Multi-Source Streaming",
            desc: "Seamlessly switch between servers for the best viewing experience.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-red-600/20"
          >
            <h3 className="text-xl font-bold text-red-600 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 JellaStreamX. All rights reserved.
        </p>
        {/* <p className="text-gray-600 text-xs mt-2">Contact: your@email.com</p> */}
      </footer>
    </div>
  );
}
