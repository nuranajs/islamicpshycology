// components/ProjectShowcase.tsx
"use client"
import { Button } from "@/components/ui/button"
import { urlFor } from  "@/lib/client"
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/lib/client"

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Projects() {
  const data = await getData();
  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Kegiatan Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Berikut adalah kegiatan yang sudah kami agendakan dan kegiatan yang akan datang.
          </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post: any, idx: any) => (
            <Card key={idx} className="group overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt="Blog Image"
                  width={800}
                  height={800}
                  className="custom-image"                />
              </div>

              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.smallDescription}</CardDescription>
              </CardHeader>

              <CardFooter className="gap-2">
                <Button asChild variant="default">
                  <Link href={`/blog/${post.currentSlug}`}>
                   Selengkapnya
                  </Link>
                </Button>
                
              </CardFooter>
              </motion.div>
            </Card>
          ))}
        </div>

   
      </div>
    </section>
  )
}