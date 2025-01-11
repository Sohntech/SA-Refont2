"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { Rocket, Code, Users, GraduationCap, ChevronRight, BookOpen, Award, Brain, Terminal, Laptop, Globe2, Monitor, Database, CheckCircle2, FileText, UserCheck } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="hidden sm:inline">Sonatel Academy</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">À propos</a>
              <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Programmes</a>
              <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">Nous rejoindre</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" className="hidden text-green-300 sm:flex">S'inscrire</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 space-y-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Rejoignez l'excellence numérique
                <span className="text-primary block md:inline"> avec Sonatel Academy</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Votre passerelle vers l'innovation numérique. Formez-vous aux métiers du digital et devenez un leader de demain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="group">
                  Commencer maintenant
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">En savoir plus</Button>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 relative hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square">
                <Globe2 className="w-full h-full text-primary animate-float opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Formation pratique",
                description: "Apprentissage basé sur des projets réels"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Experts du domaine",
                description: "Formateurs expérimentés de l'industrie"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Innovation",
                description: "Technologies et méthodologies modernes"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Certification",
                description: "Diplôme reconnu dans l'industrie"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos programmes de formation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos parcours de formation conçus pour vous propulser vers une carrière réussie dans le numérique.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Laptop className="h-6 w-6" />,
                title: "Développement Web/Mobile",
                description: "Maîtrisez les technologies modernes du développement web et mobile."
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Intelligence Artificielle",
                description: "Plongez dans le monde de l'IA et du machine learning."
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Marketing Digital",
                description: "Apprenez à créer et gérer des campagnes marketing efficaces."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* About Section */}
            <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">À propos de l'école</h2>
            <div className="bg-background rounded-2xl p-6 md:p-8 shadow-lg">
              <p className="text-muted-foreground mb-6">
                L'École du Code Sonatel Academy est bien plus qu'un simple centre de formation. 
                C'est un hub d'innovation, d'apprentissage et d'excellence numérique, conçu pour 
                façonner l'avenir de la technologie en Afrique et au-delà.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Notre Mission
                  </h3>
                  <p className="text-muted-foreground">
                    Former la prochaine génération de Leaders du numérique, en leur fournissant 
                    les compétences et les connaissances nécessaires pour prospérer dans un 
                    monde de plus en plus connecté.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Notre Approche
                  </h3>
                  <p className="text-muted-foreground">
                    Grâce à des programmes de formation de pointe, dispensés par des experts 
                    de l'industrie, nos apprenants acquièrent une expertise pratique dans des 
                    domaines tels que la programmation, le devops, le marketing digital et bien d'autres.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Programs Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos filières</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sonatel Academy est la première école de codage gratuite créée par Sonatel pour 
              contribuer à l'employabilité des jeunes à travers les métiers du numérique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Référent Digital",
                icon: <Monitor className="h-6 w-6" />,
                description: "Couteau-suisse du numérique, le référent digital participe activement à la stratégie digitale d'une entreprise. Son principal rôle est d'identifier et d'accompagner la création de solutions numériques au sein d'une structure.",
                roles: [
                  "Chef de projet Digital",
                  "Concepteur de site web",
                  "Social Media Manager",
                  "Digital content manager",
                  "Community Manager",
                  "Designer",
                  "Consultant en digitalisation d'entreprise",
                  "Web marketeur"
                ]
              },
              {
                title: "Développement Web/Mobile",
                icon: <Code className="h-6 w-6" />,
                description: "Maîtrisez le développement d'applications web et mobiles modernes avec les dernières technologies et frameworks.",
                roles: [
                  "Développeur Full Stack",
                  "Développeur Front-end",
                  "Développeur Back-end",
                  "Développeur Mobile",
                  "Architecte Web",
                  "Lead Developer",
                  "DevOps Engineer"
                ]
              },
              {
                title: "Developpeur Data",
                icon: <Database className="h-6 w-6" />,
                description: "Découvrez les possibilités de carriere dans le domaine de la data science et de l'intelligence artificielle.",
                roles: [
                  "Data Analyst",
                  "Data Scientist",
                  "Data Engineer",
                ]
              },
              {
                title: "Cloud AWS et DevOps",
                icon: <Database className="h-6 w-6" />,
                description: "Découvrez les possibilités de carriere dans le domaine de la cloud computing et de la devops.",
                roles: [
                  "Data Analyst",
                  "Data Scientist",
                  "Data Engineer",
                ]
              },
              {
                title: "Assitante référent digital",
                icon: <Database className="h-6 w-6" />,
                description: "Découvrez les possibilités de carriere dans le domaine de la digital marketing.",
                roles: [
                  "Data Analyst",
                  "Data Scientist",
                  "Data Engineer",
                ]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold">Les débouchés</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">S'inscrire à la formation</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Comment rejoindre l'aventure ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus simple en trois étapes pour commencer votre formation chez Sonatel Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "1. Postule en ligne",
                description: "Remplissez le formulaire de candidature pour le référentiel souhaité"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "2. Passe les tests",
                description: "Si présélectionné, participez aux tests d'évaluation en ligne"
              },
              {
                icon: <UserCheck className="h-8 w-8" />,
                title: "3. Entretien final",
                description: "Passez l'entretien de sélection pour rejoindre la formation"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full">
              <p className="font-semibold">
                FÉLICITATIONS !! L'AVENTURE SONATEL ACADEMY COMMENCE POUR TOI...!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trouvez les réponses à vos questions sur Sonatel Academy
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Qu'est que l'École du code Sonatel Academy ?",
                answer: "C'est une école de formation gratuite aux métiers du numérique, créée par Sonatel pour contribuer à l'employabilité des jeunes."
              },
              {
                question: "La formation est-elle payante ?",
                answer: "Non, la formation est entièrement gratuite pour tous les apprenants sélectionnés."
              },
              {
                question: "Qui peut s'inscrire à l'École du Code Sonatel Academy ?",
                answer: "Tous les jeunes passionnés par le numérique peuvent postuler. Les critères spécifiques varient selon les programmes."
              },
              {
                question: "Combien de temps dure la formation ?",
                answer: "La durée de formation varie selon le programme choisi, généralement entre 6 et 12 mois."
              },
              {
                question: "Y'a t-il un diplôme après la formation ?",
                answer: "Oui, vous recevrez une certification reconnue par l'industrie à la fin de votre formation."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Terminal className="h-6 w-6 text-primary" />
                <span>Sonatel Academy</span>
              </div>
              <p className="text-muted-foreground">
                Votre partenaire pour une carrière réussie dans le numérique.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">À propos</a>
                <a href="#programs" className="block text-muted-foreground hover:text-primary transition-colors">Programmes</a>
                <a href="#join" className="block text-muted-foreground hover:text-primary transition-colors">Nous rejoindre</a>
                <a href="#faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>contact@sonatelacademy.sn</p>
                <p>+221 XX XXX XX XX</p>
                <p>Dakar, Sénégal</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social}</span>
                    <i className={`ri-${social}-fill text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}