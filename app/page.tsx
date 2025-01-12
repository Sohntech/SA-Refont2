"use client"
import React, { useState, CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Terminal, ChevronRight, CodeXml, Award, Users, GraduationCap, ChevronDown, Code, Database, Monitor, Cloud, Laptop, FileText, User, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

// Types
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface Program {
  icon: LucideIcon
  title: string
  description: string
  color: string
  gradient: string
}

interface Step {
  icon: LucideIcon
  title: string
  description: string
  color: string
  gradient: string
}

interface FAQ {
  question: string
  answer: string
}

// Custom Styles
const customStyles: CSSProperties = {
  "--primary-green": "#6D9669",
  "--teal": "#1A8786",
  "--orange": "#E67D23",
  "--light-orange": "#E89529",
  "--turquoise": "#31AAAE",
  "--yellow": "#F4AD2B",
  "--light-blue": "#46BEC9",
  "--gold": "#C39139"
}

// Data
const programs: Program[] = [
  {
    icon: Code,
    title: "Développement Web/Mobile",
    description: "De l'analyse du besoin à la mise en ligne, en passant par l'interface et la base de données, le développeur web conçoit et programme des applications web.",
    color: "#31AAAE",
    gradient: "from-[#31AAAE] to-[#46BEC9]"
  },
  {
    icon: Database,
    title: "Developpement Data",
    description: "De l'analyse du besoin à la data visualisation, en passant par la récolte et le traitement des données, le développeur Data conçoit et exploite les bases de données.",
    color: "#E67D23",
    gradient: "from-[#E67D23] to-[#F4AD2B]"
  },
  {
    icon: Monitor,
    title: "Réferent Digital",
    description: "Couteau-suisse du numérique, le référent digital participe activement à la stratégie digitale d'une entreprise.",
    color: "#6D9669",
    gradient: "from-[#6D9669] to-[#1A8786]"
  },
  {
    icon: Cloud,
    title: "Cloud AWS et DevOps",
    description: "De l'analyse des besoins au monitoring de l'infrastructure, en passant par l'architecture et le provisionnement, le praticien du Cloud conçoit et exploite une infrastructure dans le Cloud.",
    color: "#C39139",
    gradient: "from-[#C39139] to-[#E89529]"
  },
  {
    icon: Laptop,
    title: "Assistante Réferent Digital",
    description: "Le Community manager est un acteur clé dans la mise en œuvre de la stratégie numérique d'une entreprise.",
    color: "#46BEC9",
    gradient: "from-[#46BEC9] to-[#31AAAE]"
  }
]

const steps: Step[] = [
  {
    icon: FileText,
    title: "Postule en ligne",
    description: "pour le référentiel souhaité",
    color: "#31AAAE",
    gradient: "from-[#31AAAE] to-[#46BEC9]"
  },
  {
    icon: Code,
    title: "Passes les tests",
    description: "si tu es présélectionné",
    color: "#E67D23",
    gradient: "from-[#E67D23] to-[#F4AD2B]"
  },
  {
    icon: User,
    title: "Passes les entretiens",
    description: "de sélections",
    color: "#6D9669",
    gradient: "from-[#6D9669] to-[#1A8786]"
  },
  {
    icon: Award,
    title: "FÉLICITATIONS !",
    description: "L'AVENTURE SONATEL ACADEMY COMMENCE POUR TOI...!",
    color: "#C39139",
    gradient: "from-[#C39139] to-[#E89529]"
  }
]

const faqs: FAQ[] = [
  {
    question: "Qu'est ce que l'École du code Sonatel Academy ?",
    answer: "Sonatel Academy est une école de formation gratuite aux métiers du numérique, créée par Sonatel pour former les jeunes talents aux technologies les plus demandées sur le marché de l'emploi."
  },
  {
    question: "La formation est-elle payante ?",
    answer: "Non, la formation est totalement gratuite. Sonatel Academy prend en charge l'intégralité des coûts de formation pour permettre l'accès à tous les talents."
  },
  {
    question: "Qui peut s'inscrire à l'École du Code Sonatel Academy ?",
    answer: "La formation est ouverte aux jeunes titulaires d'un Bac+2 minimum, passionnés par le numérique et motivés pour apprendre. Aucune expérience préalable en programmation n'est requise."
  },
  {
    question: "Combien de temps dure la formation ?",
    answer: "La formation dure 6 à 7 mois à temps plein, avec une approche intensive combinant théorie et pratique sur des projets concrets."
  },
  {
    question: "Y'a t-il un diplôme après la formation ?",
    answer: "Oui, à l'issue de la formation, les apprenants reçoivent un certificat reconnu qui atteste de leurs compétences acquises dans leur domaine de spécialisation."
  }
]

const ProgramIllustration = ({ color }: { color: string }) => (
  <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    {/* Web/Mobile Development */}
    {color === '#31AAAE' && (
      <>
        <rect x="30" y="30" width="340" height="240" rx="15" fill={color} opacity="0.1" />
        <rect x="50" y="50" width="300" height="180" rx="10" fill={color} opacity="0.2" />
        <rect x="70" y="70" width="260" height="20" rx="5" fill={color} />
        <rect x="70" y="100" width="120" height="15" rx="3" fill={color} opacity="0.7" />
        <rect x="70" y="130" width="180" height="15" rx="3" fill={color} opacity="0.7" />
        <rect x="70" y="160" width="100" height="15" rx="3" fill={color} opacity="0.5" />
        <rect x="380" y="60" width="80" height="160" rx="15" fill={color} opacity="0.2" />
        <rect x="400" y="90" width="40" height="80" rx="5" fill={color} />
        <circle cx="420" cy="210" r="5" fill={color} />
        <line x1="350" y1="100" x2="380" y2="140" stroke={color} strokeWidth="2" opacity="0.8" />
      </>
    )}

    {/* Data Development */}
    {color === '#E67D23' && (
      <>
        <ellipse cx="200" cy="80" rx="100" ry="40" fill={color} opacity="0.9" />
        <ellipse cx="200" cy="80" rx="95" ry="35" fill="white" opacity="0.3" />
        <rect x="100" y="80" width="200" height="140" fill={color} opacity="0.6" />
        <rect x="105" y="80" width="190" height="140" fill="white" opacity="0.1" />
        <ellipse cx="200" cy="220" rx="100" ry="40" fill={color} opacity="0.9" />
        <ellipse cx="200" cy="220" rx="95" ry="35" fill="white" opacity="0.3" />
        <line x1="100" y1="120" x2="300" y2="120" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="100" y1="160" x2="300" y2="160" stroke="white" strokeWidth="2" opacity="0.7" />
        <circle cx="140" cy="100" r="6" fill="white" opacity="0.8" />
        <circle cx="260" cy="140" r="6" fill="white" opacity="0.8" />
        <circle cx="180" cy="200" r="6" fill="white" opacity="0.8" />
        <circle cx="220" cy="180" r="6" fill="white" opacity="0.8" />
        <line x1="140" y1="100" x2="260" y2="140" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="260" y1="140" x2="220" y2="180" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="220" y1="180" x2="180" y2="200" stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1="180" y1="200" x2="140" y2="100" stroke="white" strokeWidth="2" opacity="0.5" />
      </>
    )}

    {/* Digital Referent */}
    {color === '#6D9669' && (
      <>
        <rect x="90" y="60" width="220" height="180" rx="20" fill={color} opacity="0.1" />
        <path d="M120,100 C120,100 180,140 200,140 C220,140 280,100 280,100" stroke={color} strokeWidth="3" fill="none" />
        <path d="M100,140 C100,140 150,180 200,180 C250,180 300,140 300,140" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
        <circle cx="200" cy="140" r="50" fill={color} opacity="0.3" />
        <circle cx="200" cy="140" r="40" fill="white" opacity="0.1" />
        <circle cx="200" cy="140" r="20" fill={color} opacity="0.7" />
        <rect x="160" y="110" width="80" height="40" rx="5" fill="white" opacity="0.5" />
        <rect x="165" y="115" width="70" height="30" rx="3" fill={color} />
        <circle cx="120" cy="100" r="6" fill="white" opacity="0.8" />
        <circle cx="280" cy="100" r="6" fill="white" opacity="0.8" />
        <circle cx="100" cy="140" r="6" fill="white" opacity="0.8" />
        <circle cx="300" cy="140" r="6" fill="white" opacity="0.8" />
        <line x1="120" y1="100" x2="200" y2="140" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="280" y1="100" x2="200" y2="140" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="100" y1="140" x2="200" y2="140" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="300" y1="140" x2="200" y2="140" stroke="white" strokeWidth="2" opacity="0.7" />
      </>
    )}

    {/* Cloud AWS */}
    {color === '#C39139' && (
      <>
        <path 
          d="M150,100 Q200,50 250,100 Q300,100 300,150 Q300,200 250,200 L150,200 Q100,200 100,150 Q100,100 150,100" 
          fill={color} opacity="0.1" 
        />
        <circle cx="200" cy="150" r="50" fill={color} opacity="0.3" />
        <circle cx="200" cy="150" r="40" fill="white" opacity="0.2" />
        <circle cx="200" cy="150" r="20" fill={color} opacity="0.7" />
        <path d="M180,150 L220,150 M200,130 L200,170" stroke="white" strokeWidth="4" />
        <line x1="150" y1="120" x2="200" y2="150" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="250" y1="120" x2="200" y2="150" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="150" y1="180" x2="200" y2="150" stroke="white" strokeWidth="2" opacity="0.7" />
        <line x1="250" y1="180" x2="200" y2="150" stroke="white" strokeWidth="2" opacity="0.7" />
        <circle cx="120" cy="140" r="10" fill="white" opacity="0.5" />
        <circle cx="280" cy="160" r="10" fill="white" opacity="0.5" />
        <circle cx="170" cy="90" r="8" fill="white" opacity="0.5" />
        <circle cx="230" cy="90" r="8" fill="white" opacity="0.5" />
        <circle cx="140" cy="190" r="8" fill="white" opacity="0.5" />
        <circle cx="260" cy="190" r="8" fill="white" opacity="0.5" />
        <rect x="170" y="210" width="60" height="20" rx="3" fill={color} opacity="0.7" />
        <rect x="175" y="215" width="50" height="10" rx="2" fill="white" opacity="0.5" />
        <line x1="200" y1="190" x2="200" y2="210" stroke={color} strokeWidth="3" opacity="0.7" />
      </>
    )}

    {/* Digital Assistant */}
    {color === '#46BEC9' && (
      <>
        <rect x="75" y="75" width="250" height="150" rx="20" fill={color} opacity="0.1" />
        <circle cx="200" cy="150" r="60" fill={color} opacity="0.2" />
        <circle cx="200" cy="150" r="50" fill="white" opacity="0.5" />
        <circle cx="200" cy="150" r="30" fill={color} opacity="0.7" />
        <path 
          d="M180,145 Q200,120 220,145 Q200,170 180,145 Z" 
          fill="white" 
          opacity="0.9" 
        />
        <circle cx="200" cy="150" r="5" fill={color} />
        <path d="M170,130 Q200,170 230,130" stroke={color} strokeWidth="3" fill="none" />
        <circle cx="185" cy="120" r="8" fill={color} />
        <circle cx="215" cy="120" r="8" fill={color} />
        <line x1="140" y1="90" x2="200" y2="150" stroke={color} strokeWidth="2" opacity="0.7" />
        <line x1="200" y1="50" x2="200" y2="150" stroke={color} strokeWidth="2" opacity="0.7" />
        <line x1="260" y1="90" x2="200" y2="150" stroke={color} strokeWidth="2" opacity="0.7" />
        <circle cx="140" cy="90" r="10" fill={color} opacity="0.8" />
        <text x="137" y="95" fontSize="10" fill="white"></text>
        <circle cx="200" cy="50" r="10" fill={color} opacity="0.8" />
        <text x="197" y="55" fontSize="10" fill="white"></text>
        <circle cx="260" cy="90" r="10" fill={color} opacity="0.8" />
        <text x="257" y="95" fontSize="10" fill="white"></text>
        <rect x="170" y="210" width="60" height="20" rx="5" fill={color} opacity="0.7" />
        <rect x="175" y="215" width="50" height="10" rx="3" fill="white" opacity="0.5" />
      </>
    )}
  </svg>
)

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/95" style={customStyles}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md border-b border-white/10 dark:border-white/5">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-4 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-xl font-bold">
                <Terminal className="h-6 w-6 text-[#31AAAE]" />
                <span className="hidden sm:inline bg-gradient-to-r from-[#31AAAE] via-[#46BEC9] to-[#1A8786] text-transparent bg-clip-text">
                  Sonatel Academy
                </span>
              </div>
              {/* Enhanced Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                {["À propos", "Programmes", "Nous rejoindre", "FAQ"].map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-[#31AAAE] transition-colors relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#31AAAE] transition-all group-hover:w-full" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-[#31AAAE] hover:bg-[#1A8786] text-white hidden sm:flex">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#31AAAE]/10 via-transparent to-[#E67D23]/10 dark:from-[#31AAAE]/5 dark:to-[#E67D23]/5" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 space-y-8 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Rejoignez l'excellence 
                <span className="block mt-2 bg-gradient-to-r from-[#31AAAE] via-[#46BEC9] to-[#1A8786] text-transparent bg-clip-text">
                  numérique avec Sonatel Academy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Votre passerelle vers l'innovation numérique. Formez-vous aux métiers du digital et devenez un leader de demain.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Button size="lg" className="bg-[#31AAAE] hover:bg-[#1A8786] group">
                  Commencer maintenant
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#31AAAE] text-[#31AAAE] hover:bg-[#31AAAE]/10">
                  En savoir plus
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 relative hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full aspect-square">
                <CodeXml className="w-full h-full text-[#31AAAE] animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#31AAAE]/20 to-transparent rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#46BEC9]/5 via-transparent to-[#E67D23]/5" />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">
              À propos de Sonatel Academy
            </h2>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-muted-foreground">
                    Sonatel Academy est bien plus qu'une simple école de code. C'est un écosystème d'innovation 
                    et d'apprentissage conçu pour façonner les leaders numériques de demain en Afrique et au-delà.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Award className="h-6 w-6 text-[#31AAAE]" />,
                        title: "Notre Mission",
                        description: "Former et inspirer la prochaine génération de talents numériques africains."
                      },
                      {
                        icon: <Users className="h-6 w-6 text-[#E67D23]" />,
                        title: "Notre Approche",
                        description: "Apprentissage pratique, mentorat expert et projets du monde réel."
                      },
                      {
                        icon: <GraduationCap className="h-6 w-6 text-[#46BEC9]" />,
                        title: "Notre Impact",
                        description: "Plus de 1000 diplômés travaillant dans des entreprises de premier plan."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-2 rounded-lg bg-background/50 border border-white/10">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/drxouwbms/image/upload/v1736638277/logoSA_szekwo.webp"
                      alt="Sonatel Academy Campus"
                      width={400}
                      height={400}
                      className="object-cover mt-[23%] ml-[13%] w-[70%] h-fit"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-[#31AAAE] text-white p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm">Années d'excellence</p>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button size="lg" className="bg-[#31AAAE] hover:bg-[#1A8786] text-white">
                  Découvrez notre histoire
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 relative bg-gradient-to-br from-[#31AAAE]/5 via-transparent to-[#E67D23]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">
              Nos programmes de formation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Découvrez nos parcours de formation conçus pour vous propulser vers une carrière réussie dans le numérique.
            </p>
          </motion.div>

          <div className="space-y-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full md:w-1/2">
                    <Card className="h-full bg-white/10 backdrop-blur-lg border-t-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to bottom right, ${program.color}, white)` }}
                      />
                      <div 
                        className="absolute h-1 w-full top-0 left-0 bg-gradient-to-r"
                        style={{ backgroundImage: `linear-gradient(to right, ${program.color}, ${program.color}dd)` }}
                      />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div 
                            className="p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                            style={{ color: program.color }}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold" style={{ color: program.color }}>
                            {program.title}
                          </h3>
                        </div>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <p className="text-muted-foreground">
                          {program.description}
                        </p>
                      </CardContent>

                      <CardFooter className="relative z-10">
                        <Button 
                          className="w-full mt-4 bg-gradient-to-r text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          style={{ 
                            backgroundImage: `linear-gradient(to right, ${program.color}, ${program.color}dd)`
                          }}
                        >
                          En savoir plus
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="w-full md:w-1/2 h-64">
                    <ProgramIllustration color={program.color} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-24 relative h-full overflow-hidden bg-gradient-to-br from-[#31AAAE]/5 via-transparent to-[#E67D23]/5">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full"
              style={{
                background: i % 2 === 0 ? '#31AAAE' : '#E67D23',
              }}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{
                y: [null, -20, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">
              Comment rejoindre l'aventure ?
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#31AAAE] via-[#E67D23] to-[#6D9669] hidden lg:block -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group relative h-full hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-t-2" 
                          style={{ borderColor: step.color }}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
                      
                      {/* Step number */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
                           style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}dd)` }}>
                        {index + 1}
                      </div>

                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center relative z-10">
                          <div className={`p-4 rounded-lg bg-gradient-to-br ${step.gradient} mb-4 shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-2" style={{ color: step.color }}>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-gradient-to-br from-[#31AAAE]/5 via-transparent to-[#E67D23]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">
              FAQ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Trouvez les réponses à vos questions sur Sonatel Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#31AAAE] transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="sticky top-24 text-center">
                <div className="w-96 h-96 mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#31AAAE" strokeWidth="2" className="animate-[spin_60s_linear_infinite]" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#E67D23" strokeWidth="2" className="animate-[spin_40s_linear_infinite_reverse]" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#46BEC9" strokeWidth="2" className="animate-[spin_30s_linear_infinite]" />
                    {/* Question mark */}
                    <path
                      d="M90 70c0-10 10-20 20-20s20 10 20 20-10 20-20 20v20M110 130v10"
                      stroke="#31AAAE"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">
                    Encore des questions ?
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    Contactez-nous directement, nous sommes là pour vous aider
                  </p>
                  <button className="mt-6 px-8 py-3 bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-white rounded-lg hover:opacity-90 transition-opacity">
                    Nous contacter
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-[#31AAAE]/10 to-[#E67D23]/10 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-[#31AAAE]"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, -20, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#31AAAE] to-[#46BEC9] text-transparent bg-clip-text">Sonatel Academy</h3>
            <p className="text-muted-foreground mb-4">Façonnons ensemble l'avenir numérique de l'Afrique.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#31AAAE] hover:text-[#E67D23] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#31AAAE] hover:text-[#E67D23] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#31AAAE] hover:text-[#E67D23] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#31AAAE] hover:text-[#E67D23] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Programmes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Développement Web/Mobile</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Développement Data</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Référent Digital</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Cloud AWS et DevOps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">À propos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Nous rejoindre</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#31AAAE] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Restez informé de nos dernières actualités et opportunités.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Votre email" className="bg-white border-white/20" />
              <Button type="submit" className="bg-[#31AAAE] hover:bg-[#E67D23] transition-colors">
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Sonatel Academy. Tous droits réservés.</p>
        </div>
      </div>

      {/* Futuristic element: Glowing line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#31AAAE] via-[#E67D23] to-[#31AAAE] animate-pulse" />
    </footer>
    </main>
  )
}

