// src/components/icons.tsx
import { 
    Twitter, 
    Facebook, 
    Instagram,
    Youtube,
    LucideProps,
    Building2,
  } from "lucide-react"
  
  export const Icons = {
    logo: Building2, // menggunakan Building2 sebagai placeholder logo
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  }
  
  export type Icon = keyof typeof Icons