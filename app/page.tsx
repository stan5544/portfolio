"use client";

import React, { useState } from "react";
import Image from "next/image";

type Experiences = {
  title: string;
  company: string;
  logo: string;
  description: string[];
  projects: { title: string; details: string[] }[];
  skills: string[];
  stack: string[];
};

const projects: Experiences[] = [
  {
    title: "Business Analyst (Juillet 2024 – Aujourd'hui)",
    company: "Allianz",
    logo: "/logos/allianz.png",
    description: [
      "<b>Entreprise:</b> Allianz est un des leader dans le secteur de l'assurance.",
      "<b>Organisation des équipes:</b> SAFe.",
      "<b>Rôles:</b> pour chaque changement concernant un contrat d'assurance, le client doit être notifié par un canal (e-mail, courrier, fax...) d'un document l'informant de la modification. En tant que Business analyst, mon rôle consiste à identifier les règles à implémenter concernant la génération et l'envoi du document, et cela en étroite collaboration avec le métier et les équipes dev. Parallèlement à cela, je travaille également sur l'interface permettant au métier de consulter l'ensemble des notifications.",
    ],
    projects: [
      {
        title: "Refonte de la solution de génération et d'envoi de notifications aux clients.",
        details: [
          "Analyse des besoins métiers.",
          "Rédaction des spécifications fonctionnelles et techniques avec l'équipe dev.",
          "Suivi des développements et des tests.",
          "Création et priorisation du backlog sur le court et moyen terme.",
          "Mise en place de TNR automatisés afin de détecter rapidement toute regression de configuration ou de déploiement.",
          "Suivi des deliverys.",
          "Mise en place de monitoring sur l'environnement de production.",
          "Gestion des incidents.",
        ],
      },
      {
        title: "Développement d'une webapp pour le métier.",
        details: [
          "Mise en place d'ateliers de co-conception avec les utilisateurs.",
          "Rédaction des spécifications fonctionnelles et techniques avec l'équipe dev.",
          "Suivi des développements et des tests.",
          "Création et priorisation du backlog.",
        ],
      },
    ],
    skills: ["Spécifications", "Tests fonctionnels", "Webapp", "API", "Micoservices", "UX/UI", "Analyse métier", "Roadmap produit", "Gestion des incidents", "SAFe"],
    stack: ["AWS", "Jira", "Confluence", "Postman", "Swagger"],
  },
  {
    title: "Product Owner (Janvier 2023 – Juin 2024)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description: [
      "<b>Entreprise:</b> DXOMARK propose des services auprès des fabricants de smartphones pour les accompagner dans l'amélioration de la qualité de leurs produits. Le service le plus connu est un service de conseil sur la qualité des photos et vidéos qui est basé sur un protocole de tests. En parallèle, DXOMARK a créé un nouveau produit appelé <a href='https://www.dxomark.com/insights' target='_blank' rel='noopener noreferrer' style='color: #10B981; text-decoration: underline;'>Insights</a>, qui vise à fournir des informations sur les préférences utilisateurs, permettant aux fabricants de smartphones de mieux comprendre les attentes de leurs clients.",
      "<b>Organisation des équipes:</b> Multi scrum.",
      "<b>Rôles:</b> responsable de la communication auprès d'un portefeuille clients afin de s'assurer de leur satisfaction sur les projets en cours, du recueil de leurs besoins et de leurs roadmaps produits internes. Je travaille également sur la création et la priorisation du backlog produit pour le service Insights et l'amélioration du produit conseil.",
    ],
    projects: [
      {
        title: "Insights - Apporter aux fabricants de smartphones des informations sur les préférences utilisateurs.",
        details: [
          "Phase de discovery pour identfier les challenges rencontrés par les fabricants de smartphones.",
          "Création et priorisation du backlog.",
          "Création d'une roadmap produit.",
          "Rédaction des spécifications fonctionnelles et techniques.",
          "Gestion de projet afin de respecter les délais et le budget.",
          "Présentation régulières des résultats aux clients.",
          "Présentation en interne de l'avancement du projet avec mise en avant des KPI clés (satisfaction et retours clients, coût, délai).",
        ],
      },
      {
        title: "Supervision de l'avancement des projets pour les clients.",
        details: [
          "Gestion de la relation client.",
          "Encadrement des équipes de conseil.",
        ],
      },
      {
        title: "Amélioration des outils métier pour le service de conseil.",
        details: [
          "Mise en place d'atelier pour le recueil des besoins métiers.",
          "Rédaction des spécifications fonctionnelles et techniques.",
        ],
      },
      {
        title: "Manager de deux ingénieurs.",
        details: [
          "Mise en place de plan de montée en compétences.",
          "Mentoring.",
        ],
      },
    ],
    skills: ["Scrum", "Backlog Management", "Management", "Roadmap produit", "Qualité d'image", "Validation fonctionnelle", "Design Thinking", "Relation client", "Présentation", "Gestion de projet"],
    stack: ["Jira", "Confluence", "Miro", "PowerPoint"],
  },
  {
    title: "Scrum master (Septembre 2021 – Décembre 2022)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description: [
      "<b>Entreprise:</b> DXOMARK propose des services auprès des fabricants de smartphones pour les accompagner dans l'amélioration de la qualité de leurs produits. Le service le plus connu est un service de conseil sur la qualité des photos et vidéos qui est basé sur un protocole de tests. En parallèle, DXOMARK a créé un nouveau produit appelé <a href='https://www.dxomark.com/insights' target='_blank' rel='noopener noreferrer' style='color: #10B981; text-decoration: underline;'>Insights</a>, qui vise à fournir des informations sur les préférences utilisateurs, permettant aux fabricants de smartphones de mieux comprendre les attentes de leurs clients.",
      "<b>Organisation des équipes:</b> Multi scrum.",
      "<b>Rôles:</b> en tant que Scrum Master, je suis responsable de la mise en place et du suivi des cérémonies Scrum, de l'accompagnement des équipes dans leur montée en compétence sur les pratiques agiles et de la gestion des obstacles rencontrés par les équipes. En parallèle, je contribue toujours au développement des outils métier.",
    ],
    projects: [
      {
        title: "Scrum Master",
        details: [
          "Accompagnement des équipes dans leur montée en compétence sur les pratiques agiles.",
          "Mise en place et suivi des cérémonies Scrum.",
          "Gestion des obstacles rencontrés par les équipes.",
          "Suivi des KPI clés du fonctionnement de l'équipe tels que la vélocité.",
        ],
      },
      {
        title: "Développement des outils métier pour le service de conseil.",
        details: [
          "En python, développement de la partie backend de la webapp permettant au métier d'effectuer l'analyse de la qualité des photos et vidéos.",
          "En python, création de rapports techniques pour le client.",
        ],
      },
    ],
    skills: ["Scrum", "Développer backend", "Qualité d'image"],
    stack: ["Jira", "Confluence", "Python"],
  },
  {
    title: "Ingénieur conseil et développeur backend (Septembre 2019 – Aout 2021)",
    company: "DXOMARK",
    logo: "/logos/dxomark.png",
    description: [
      "<b>Entreprise:</b> DXOMARK propose des services auprès des fabricants de smartphones pour les accompagner dans l'amélioration de la qualité de leurs produits. Le service le plus connu est un service de conseil sur la qualité des photos et vidéos qui est basé sur un protocole de tests. En parallèle, DXOMARK a créé un nouveau produit appelé <a href='https://www.dxomark.com/insights' target='_blank' rel='noopener noreferrer' style='color: #10B981; text-decoration: underline;'>Insights</a>, qui vise à fournir des informations sur les préférences utilisateurs, permettant aux fabricants de smartphones de mieux comprendre les attentes de leurs clients.",
      "<b>Organisation des équipes:</b> Multi scrum.",
      "<b>Rôles:</b> Je disposais de tâches principales: être l'interface client pour le service de conseil ainsi que développer la partie backend de la webapp permettant au métier d'effectuer l'analyse de la qualité des photos",
    ],
    projects: [
      {
        title: "Ingénieur conseil en qualité d'image.",
        details: [
          "Relation client au jour le jour avec les équipes de développement des fabricants de smartphones.",
          "Analyse des la qualité des produits.",
        ],
      },
      {
        title: "Développement des outils métier pour le service de conseil.",
        details: [
          "En python, développement de la partie backend de la webapp permettant au métier d'effectuer l'analyse de la qualité des photos et vidéos.",
          "En python, création de rapports techniques pour le client.",
        ],
      },
    ],
    skills: ["Scrum", "Développer backend", "Qualité d'image", "Relation client"],
    stack: ["Jira", "Confluence", "Python"],
  },
];

export default function Portfolio() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <main className="font-sans text-gray-900 bg-[#f5f5f5]">
      {/* Hero */}
      <section className="py-20 bg-[#0F172A] text-white relative">
        {/* Nom et titre en haut */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">Stanislas Brochard-Garnier</h1>
          <p className="text-2xl text-[#A7F3D0] mt-4">Product Owner</p>
        </div>

        {/* Contenu principal avec image à gauche et texte à droite */}
        <div className="flex items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* Image à gauche */}
          <div className="w-48 h-48">
            <Image
              src="/profile_picture.jpg" // Remplacez par le chemin de votre photo
              alt="Stanislas Brochard-Garnier"
              width={400}
              height={400}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Texte à droite */}
          <div className="text-lg max-w-2xl">
            <p>
              Ingénieur de formation à l'UTT et CentraleSupélec, je suis passionné par la technologie et l'amélioration produit. A travers mes expériences, j'ai pu découvrir différentes cultures d'entreprise : une scale-up dans le secteur de la tech ainsi qu'une entreprise de renommée internationale. Toutes les deux mettant l'agilité au cœur de leur fonctionnement.
            </p>
            <br />
            <p>
              Je suis autonome et toujours curieux d'apprendre, que cela soit sur les technologies ou sur les méthodes de développement produit.
            </p>
            <br />
            <p>
              Je suis à la recherche d'une nouvelle aventure professionnelle dans le secteur de la tech pour un poste de Product Owner/Manager, de préférence en Ile-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#065F46]">Mon parcours professionnel</h2>
        <div className="pl-6 space-y-10 max-w-3xl mx-auto">
          {/* Expériences professionnelles */}
          {projects.map((experience, index) => (
            <div key={index} className="relative">
              <div className="relative flex items-center gap-6 mb-4">
                {/* Conteneur du logo */}
                <div className="relative w-20 h-20">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                {/* Titre de l'expérience */}
                <h3 className="text-xl font-semibold text-[#0F172A]">{experience.title}</h3>
              </div>

              <div className="text-center">
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-sm text-white bg-[#10B981] hover:bg-[#059669] px-4 py-1 rounded-full"
                >
                  {openProjectIndex === index ? "Masquer" : "Voir les projets"}
                </button>
              </div>

              {openProjectIndex === index && (
                <div className="bg-white p-4 mt-4 rounded-lg shadow">
                  {/* Contexte */}
                  <h4 className="text-lg font-semibold text-[#065F46] mt-4">Contexte</h4>
                  <ul className="list-disc pl-6 mb-4 text-sm text-gray-600">
                    {experience.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-500"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      ></li>
                    ))}
                  </ul>

                  {/* Liste des projets */}
                  <h4 className="text-lg font-semibold text-[#065F46] mt-4">Projets</h4>
                  <ul className="list-disc pl-6 mb-4 text-sm text-gray-600">
                    {experience.projects.map((project, i) => (
                      <li key={i} className="mb-4">
                        <strong>{project.title}</strong>
                        <ul className="list-disc pl-6 mt-2">
                          {project.details.map((detail, j) => (
                            <li
                              key={j}
                              className="text-gray-500"
                              dangerouslySetInnerHTML={{ __html: detail }}
                            ></li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>

                  {/* Section Compétences */}
                  <h4 className="text-lg font-semibold text-[#065F46] mt-4">Compétences</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill, i) => (
                      <span key={i} className="bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Section Stack technique */}
                  <h4 className="text-lg font-semibold text-[#065F46] mt-4">Stack technique</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.stack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#ECFDF5] text-[#047857] px-4 py-2 rounded-full text-sm">
                        <Image
                          src={`/icons/${tech.toLowerCase()}.png`}
                          alt={tech}
                          width={24}
                          height={24}
                        />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ligne horizontale */}
              {index < projects.length - 1 && <hr className="my-10 border-t border-gray-300" />}
            </div>
          ))}

          {/* Stages */}
          <div className="space-y-10">
            {/* Stage 1 */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/logos/sodern.png" // Remplacez par le chemin du logo de l'entreprise
                  alt="Sodern"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Stage - Développement de solution de traitement d'image pour viseurs d'étoile</h3>
                <p className="text-sm text-gray-600">Sodern (Février 2019 - Juillet 2019)</p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/logos/thales.png" // Remplacez par le chemin du logo de l'entreprise
                  alt="Thales"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Stage - Laser femtoseconde</h3>
                <p className="text-sm text-gray-600">Thales- Janvier 2018 à Juin 2018</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/logos/cnrs.png" // Remplacez par le chemin du logo de l'entreprise
                  alt="CNRS"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A]">Stage - Matériaux luminescants</h3>
                <p className="text-sm text-gray-600">CNRS- Janvier 2017 à Juin 2017</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-gray-100 px-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#065F46]">Compétences clés</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Product Discovery", "Scrum", "Design Thinking", "Backlog Management",
            "Tests fonctionnels", "Python", "API (Swagger, Postman)", "AWS", "Jira",
            "Relation client", "Leadership", "Mentoring", "UX/UI", "Gestion de projet",
            "Agile", "SAFe", "Développement Webapp", "Microservices", "Qualité d'image",
            "Roadmap produit", "Gestion des incidents", "Analyse métier",
            "Développement backend",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-white text-[#065F46] px-4 py-2 rounded-full shadow-sm border border-[#10B981]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#065F46]">Ma formation</h2>
        <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
          {/* UTT */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
            <Image
              src="/logos/utt.png" // Remplacez par le chemin du logo UTT
              alt="Université de Technologie de Troyes"
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A]">Université de Technologie de Troyes</h3>
              <p className="text-sm text-gray-600">Ingénieur Matériaux</p>
            </div>
          </div>

          {/* CentraleSupélec */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
            <Image
              src="/logos/centralesupelec.png" // Remplacez par le chemin du logo CentraleSupélec
              alt="CentraleSupélec"
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A]">CentraleSupélec</h3>
              <p className="text-sm text-gray-600">Master en Optique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#065F46]">Restons en contact</h2>
        <p className="mt-2 text-gray-700">
          N'hésitez pas à me contacter pour discuter de nouvelles opportunités ou collaborations.
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
