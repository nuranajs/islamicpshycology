"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Profile"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Section Header */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Tentang Kami
              </h2>
              <p className="mt-4 text-gray-500 md:text-lg leading-relaxed">
                Psikologi dapat dipakai sebagai pisau analisis terhadap masalah-masalah kejiwaan umat islam. 
Islam juga dapat dijadikan sebagai pisau analisis untuk menilai konsep-konsep psikologi barat
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">VISI</h3>
              <div className="flex flex-wrap gap-2">
                <p>Menjadi komunitas terdepan dalam meningkatkan kesehatan mental bangsa melalui pendekatan psikologi berlandaskan prinsip-prinsip Islam.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">MISI</h3>
              <div className="flex flex-wrap gap-2">
                <p>1. Menyediakan wadah bagi masyarakat untuk mempelajari dan memahami dirinya.
                </p>
                <p>2. Memfasilitasi masyarakat dalam pengembangan diri yang seimbang antara mental,  emosional dan spiritual.
                </p>
                <p>3. Mengedukasikan kepada masyarakat luas akan pentingnya kesehatan mental dalam perspektif Islam.
                </p>
                <p>4. Menciptakan lingkungan positif yang mendukung kesehatan mental.
                </p>
                <p>5. Memberikan pembekalan kepada masyarakat agar memiliki mental siap berkarya
                .</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}