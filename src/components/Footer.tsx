import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
export function FooterSection() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 py-8 lg:grid-cols-4 lg:gap-16">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">PsikologiIslam.id</span>
            </div>
            <p className="text-sm text-muted-foreground">
            Mengenal diri,
            berbakti pada negeri   </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Media Partner</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  RSHS
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  PT. KAI
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  BAZNAS
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: indonesianislamicpsychology@gmail.com
              </li>
              <li className="text-muted-foreground">
                Telepon: 0812-3456-7890
              </li>
              <li className="text-muted-foreground">
                Alamat: Komplek Taman Sari No 4A, kec. cileunyi, kab. bandung
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icons.youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PsikologiIslam.id. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
} 