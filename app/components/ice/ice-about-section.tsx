"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon, TrophyIcon, UsersIcon, GlobeAltIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const highlights = [
  {
    id: "experience",
    title: "+10 años de experiencia",
    description: "Con más de una década de experiencia asesorando en el campo de las visas y programas de intercambio, conocemos todos los detalles y procesos para asegurarte el mejor resultado.",
    icon: TrophyIcon,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "customer-focus",
    title: "Orientación al cliente",
    description: "Te brindamos una atención personalizada, entendiendo tus necesidades y guiándote en cada paso del proceso, para que vivas la mejor aventura de tu vida. Tu experiencia es nuestra prioridad.",
    icon: UsersIcon,
    color: "from-green-500 to-green-600"
  },
  {
    id: "satisfied-clients",
    title: "+5000 clientes satisfechos",
    description: "Hemos ayudado a más de 5000 personas a alcanzar sus sueños de estudiar, trabajar o vivir en el extranjero. La satisfacción de nuestros clientes es nuestro mayor testimonio.",
    icon: StarIcon,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "value-networks",
    title: "Redes de valor",
    description: "Contamos con alianzas estratégicas con instituciones nacionales e internacionales, ofreciéndote una red de apoyo integral en cada etapa de tu aventura internacional.",
    icon: GlobeAltIcon,
    color: "from-purple-500 to-purple-600"
  }
];

const countries = [
  {
    name: "Colombia",
    flag: "🇨🇴",
    description: "Nuestra sede principal"
  },
  {
    name: "Costa Rica",
    flag: "🇨🇷",
    description: "Expansión centroamericana"
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
    description: "Crecimiento sudamericano"
  },
  {
    name: "Perú",
    flag: "🇵🇪",
    description: "Presencia andina"
  }
];

export default function IceAboutSection() {
  return (
    <section className="relative py-20 bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}
          >
            Sobre <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">ICE</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Somos International Cultural Experience, una agencia líder en Colombia en programas de intercambio, estudios en el exterior y asesoría de visas para jóvenes que quieren vivir una experiencia internacional.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Countries Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 mb-12">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">
                Presencia en cuatro Países
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Contamos con operaciones en Colombia, Costa Rica, Ecuador y Perú.
            </motion.p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-lg group-hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {country.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {country.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/nosotros">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
              <span>Conócenos</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}