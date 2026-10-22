"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [garderie, setGarderie] = useState({
    nom: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/garderie")
      .then((res) => res.json())
      .then((data) => setGarderie(data));
  }, []);

  const services = [
    {
      icon: "🍼",
      title: "Accueil des tout-petits",
      desc: "Crèche de 3 mois à 3 ans.",
    },
    {
      icon: "🎨",
      title: "Jardin d'enfants",
      desc: "Éveil et préparation à l'école.",
    },
    {
      icon: "🥗",
      title: "Repas équilibrés",
      desc: "Repas sains préparés chaque jour.",
    },
    {
      icon: "🏫",
      title: "Garde périscolaire",
      desc: "Accueil après l'école.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec]">
      <nav className="bg-white h-20 flex justify-between items-center px-10 shadow-sm">
        <h1 className="text-3xl font-bold text-pink-500">
          🧸 Ma Garderie
        </h1>

        <div className="flex gap-8 font-medium">
          <a href="#">Accueil</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 px-16 py-20 items-center">
        <div>
          <h1 className="text-5xl font-bold text-sky-600 mb-4">
            Bienvenue à {garderie.nom}
          </h1>

          <h3 className="text-pink-500 text-xl mb-6">
            Un lieu doux et sûr pour grandir,
            jouer et apprendre
          </h3>

          <p className="text-gray-700 leading-8">
            {garderie.description}
          </p>

          <p className="mt-6 font-semibold">
            🕒 Lundi au samedi : 7h00 - 18h00
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/garderie.png"
            alt="Garderie"
            width={450}
            height={350}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="px-16 pb-20">
        <h2 className="text-center text-4xl font-bold text-sky-600 mb-12">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-teal-400"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="font-bold text-lg mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}