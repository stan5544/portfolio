"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Business Analyst – Groupe IT (2024–...)",
    company: "Allianz",
    logo: "/logos/allianz.png",
    description:
      "Analyse des besoins métiers, rédaction des specs, gestion des tests, indicateurs de suivi produit.",
    tasks: [
      "Recueil des besoins auprès des parties prenantes",
      "Rédaction des spécifications fonctionnelles",
      "Mise en place de tests de non-régression",
      "Suivi des indicateurs qualité et couverture fonctionnelle"
    ],
    skills: ["Spécifications", "Tests fonctionnels", "Analyse métier", "KPIs"]
  },
  {
    title: "Product Owner – B2B SaaS (2023-2024)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description:
      "Définition de la roadmap, mise en place de KPIs, gestion des US via Scrum, validation fonctionnelle, gestion client, mentoring de 2 ingénieurs.",
    tasks: [
      "Création et priorisation du backlog produit",
      "Animation des cérémonies Scrum avec l'équipe dev",
      "Définition des indicateurs de performance (KPIs)",
      "Validation fonctionnelle des nouvelles fonctionnalités",
      "Conduite d’ateliers de design thinking avec les utilisateurs"
    ],
    skills: ["Scrum", "Backlog Management", "KPIs", "Validation fonctionnelle", "Design Thinking"]
  },
  {
    title: "Scrum Master – Scale-up (2021–2023)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description:
      "Animation des rituels agiles, coaching d’équipe, collaboration étroite avec les POs.",
    tasks: [
      "Animation quotidienne des cérémonies Scrum",
      "Médiation entre devs et product owner",
      "Accompagnement de l’équipe vers l’auto-organisation",
      "Coaching sur les bonnes pratiques agiles"
    ],
    skills: ["Scrum", "Coaching", "Facilitation", "Agilité"]
  },
  {
    title: "Développeur Backend – Conseil (2019–2021)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description:
      "Développement Python, accompagnement tech de projets photo/vidéo sur smartphone.",
    tasks: [
      "Développement d’APIs REST en Python",
      "Support technique aux équipes hardware",
      "Conception de modules de traitement d’image",
      "Documentation technique et tests unitaires"
    ],
    skills: ["Python", "API", "Support technique", "Tests", "Documentation"]
  }
];

export default function Portfolio() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <main className="font-sans text-gray-900 bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="text-center py-20 bg-[#0F172A] text-white">
        <h1 className="text-4xl font-bold">Stanislas Brochard-Garnier</h1>
        <p className="text-xl text-[#A7F3D0] mt-4">Product Owner & Agile Leader</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Je conçois des solutions digitales centrées utilisateur, en alignant vision
          produit et exécution agile. Passionné par la tech et l’humain, je transforme
          les besoins métiers en produits concrets, scalables et impactants.
        </p>
        <div className="mt-8">
          <a href="#projects" className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full">
            Voir mes projets
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#065F46]">Mon parcours professionnel</h2>
        <div className="border-l-2 border-[#10B981] pl-6 space-y-10 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-4 top-2 w-4 h-4 bg-[#10B981] rounded-full"></div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src={project.logo}
                    alt={project.company}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-center">
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-sm text-white bg-[#10B981] hover:bg-[#059669] px-4 py-1 rounded-full"
                >
                  {openProjectIndex === index ? "Masquer" : "Voir plus"}
                </button>
              </div>
              {openProjectIndex === index && (
                <div className="bg-white p-4 mt-4 rounded-lg shadow">
                  <p className="mb-2 text-gray-700">{project.description}</p>
                  <ul className="list-disc pl-6 mb-4 text-sm text-gray-600">
                    {project.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-gray-100 px-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#065F46]">Compétences clés</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["Product Discovery", "Scrum", "Design Thinking", "Backlog Management", "Tests fonctionnels", "Python", "SQL", "AWS", "Jira", "Postman", "Figma", "Leadership", "Mentoring"].map(
            (skill, i) => (
              <span
                key={i}
                className="bg-white text-[#065F46] px-4 py-2 rounded-full shadow-sm border border-[#10B981]"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#065F46]">Restons en contact</h2>
        <p className="mt-2 text-gray-700">
          Tu veux parler produit, mission freelance ou juste échanger ?
        </p>
        <a
          href="mailto:stanislasbrochardgarnier@gmail.com"
          className="mt-4 inline-block bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full"
        >
          M'écrire
        </a>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/stanislas-brochard-garnier-593838a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] underline"
          >
            Mon LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
