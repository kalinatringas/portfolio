"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience, experiences } from "./experiences";
import NavBar from "../components/Navbar";


export default function ExperienceMemoryCards() {
  const [active, setActive] = useState<Experience |null>(null);

  return (
    <>
    <NavBar/>
    <div className="w-full max-w-5xl mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 pt-10">Experiences</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((exp, indx) => (
          <button
            key={exp.id}
            onClick={() => setActive(exp)}
            className="group rounded-xl bg-zinc-200 p-4 shadow-inner hover:bg-zinc-300 transition text-left"
          >
            <p className="text-xs text-zinc-500">{exp.slot}</p>
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-zinc-600">{exp.subtitle}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{active.title}</h3>
              <h3 className="text-l text-gray-400 font-contl">{active.dates}</h3>
              <button
                onClick={() => setActive(null)}
                className="text-sm text-zinc-500 hover:text-zinc-800"
              >
                Close
              </button>
            </div>

            <ul className="list-disc list-inside space-y-2">
              {active.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}
