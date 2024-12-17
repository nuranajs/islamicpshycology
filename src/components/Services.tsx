// components/Services.tsx
'use client'

import { useEffect, useState } from 'react'
import { client } from '@/lib/client'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "services"]`)
      .then((data) => {
        console.log(data) // Debugging: Check the structure of the data
        setServices(data)
      })
      .catch(console.error)
  }, [])

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Program Unggulan</h2>
            <p className="text-gray-600 mt-4">
              Kami menyediakan program unggulan untuk membantu Anda mencapai tujuan hidup Anda.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {services.map((service: any) => (
              <Card key={service._id}>
                <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}