import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Product Owner – B2B SaaS (2023-2024)",
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
    title: "Business Analyst – Groupe IT (2024–...)",
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
    title: "Scrum Master – Scale-up (2021–2023)",
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

const logos = [
  { name: "UTT", src: "/logos/utt.png" },
  { name: "Centrale Supélec", src: "/logos/centrale.png" },
  { name: "DXOMARK", src: "/logos/dxomark.png" },
  { name: "Allianz", src: "/logos/allianz.png" }
];

export default function Portfolio() {
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

      {/* Logos des institutions / entreprises */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-2xl font-semibold text-[#065F46] mb-8">Ils m'ont fait confiance</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {logos.map((logo, i) => (
            <div key={i} className="w-32 h-16 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-white px-8">
        <h2 className="text-3xl font-bold text-center text-[#065F46]">Qui suis-je ?</h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-lg">
          Diplômé de Centrale Supélec et ingénieur en matériaux, je me suis spécialisé
          dans les produits numériques via des expériences allant du développement backend
          au rôle de Product Owner dans des contextes B2B. J’interviens à toutes les étapes
          du cycle produit : de la découverte au delivery, en passant par la stratégie,
          la priorisation et le pilotage d’indicateurs clés.
        </p>
      </section>

      {/* Projets */}
      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#065F46]">Mes projets</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-[#10B981]"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">{project.title}</h3>
              <p className="mb-2 text-gray-700">{project.description}</p>
              <ul className="list-disc pl-6 mb-4 text-sm text-gray-600">
                {project.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
