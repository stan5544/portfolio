import React from "react";

const projects = [
  {
    title: "Product Owner – B2B SaaS (2023-2024)",
    description:
      "Définition de la roadmap, mise en place de KPIs, gestion des US via Scrum, validation fonctionnelle, gestion client, mentoring de 2 ingénieurs.",
    learnings:
      "Renforcement des compétences en stratégie produit et en animation de la relation client."
  },
  {
    title: "Business Analyst – Groupe IT (2024–...)",
    description:
      "Analyse des besoins métiers, rédaction des specs, gestion des tests, indicateurs de suivi produit.",
    learnings:
      "Approfondissement de la vision fonctionnelle et de la documentation produit."
  },
  {
    title: "Scrum Master – Scale-up (2021–2023)",
    description:
      "Animation des rituels agiles, coaching d’équipe, collaboration étroite avec les POs.",
    learnings:
      "Excellente maîtrise de la méthodologie Scrum, posture de servant leader."
  },
  {
    title: "Développeur Backend – Conseil (2019–2021)",
    description:
      "Développement Python, accompagnement tech de projets photo/vidéo sur smartphone.",
    learnings:
      "Base technique solide, compréhension fine des problématiques d’implémentation."
  }
];

export default function Portfolio() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl font-bold">Stanislas Brochard-Garnier</h1>
        <p className="text-xl text-gray-600 mt-4">Product Owner & Agile Leader</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Je conçois des solutions digitales centrées utilisateur, en alignant vision
          produit et exécution agile. Passionné par la tech et l’humain, je transforme
          les besoins métiers en produits concrets, scalables et impactants.
        </p>
        <div className="mt-8">
          <a href="#projects" className="bg-black text-white px-6 py-2 rounded-full">
            Voir mes projets
          </a>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-gray-50 px-8">
        <h2 className="text-3xl font-bold text-center">Qui suis-je ?</h2>
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
        <h2 className="text-3xl font-bold text-center mb-10">Mes projets</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 italic">{project.learnings}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-gray-100 px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Compétences clés</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["Product Discovery", "Scrum", "Design Thinking", "Backlog Management", "Tests fonctionnels", "Python", "SQL", "AWS", "Jira", "Postman", "Figma", "Leadership", "Mentoring"].map(
            (skill, i) => (
              <span
                key={i}
                className="bg-white px-4 py-2 rounded-full shadow-sm border"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Restons en contact</h2>
        <p className="mt-2">
          Tu veux parler produit, mission freelance ou juste échanger ?
        </p>
        <a
          href="mailto:stanislasbrochardgarnier@gmail.com"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          M'écrire
        </a>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/stanislas-brochard-garnier-593838a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Mon LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
