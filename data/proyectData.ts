import { ProyectType } from "@/types/proyectsType"

export const proyectData: ProyectType[] = [
    {
        id: 1,
        name: "MilfShakes Clicker",
        description: "Una juego no oficial basada en la marca MilfShakes al estilo de el famoso Cookie Clicker",
        tags: [{name: "React", icon: "/logos/logoReact.png"},{name: "NextJS", icon: "/logos/logoNext.png"},{name: "TypeScript", icon: "/logos/logoTypescript.png"},{name: "Zustand", icon: "/logos/logoZustand.png"},{name: "Motion", icon: "/logos/logoMotion.png"},{name: "Vercel", icon: "/logos/logoVercel.png"}],
        //image: ["/proyects/MilfClicks/milfclicks_screenshot_1.png"],
        image: "/proyects/MilfClicks/milfclicks_screenshot_1.png",
        link: "https://milfshakes-clicker.vercel.app/"
    },
    {
        id: 2,
        name: "Gesportín",
        description: "Gesportin es un sistema de gestión deportiva que permite administrar clubes, usuarios, equipos, partidos y más. Para facilitar la administración de todas las operaciones. ",
        tags: [{name: "Angular", icon: "/logos/logoAngular.png"},{name: "Java", icon: "/logos/logoJava.png"},{name: "Docker", icon: "/logos/logoDocker.png"},{name: "MySql", icon: "/logos/logoMySql.png"},{name: "Co-Working", icon: "/icons/coworking_icon.svg"}],
        //image: ["proyects/Gesportin/gesportin_screenshot_1.png"],
        image: "/proyects/Gesportin/gesportin_screenshot_1.png",
        link: "https://github.com/alcanizalan/final_gesportin"
    },
    {
        id: 3,
        name: "Tienda Ropa React + NextJS + Prisma",
        description: "Este es un proyecto de tienda de ropa hecho para un trabajo de clase, tanto frontend como backend",
        tags: [{name: "React", icon: "/logos/logoReact.png"},{name: "NextJS", icon: "/logos/logoNext.png"},{name: "TypeScript", icon: "/logos/logoTypescript.png"},{name: "Prisma", icon: "/logos/logoPrisma.png"},{name: "BetterAuth", icon: "/logos/logoBetterAuth.png"},{name: "Zod", icon: "/logos/logoZod.png"},{name: "Shadcn", icon: "/logos/logoShadcn.png"},{name: "Tweekcn", icon: "/logos/logoTweekcn.png"}],
        //image: ["proyects/Gesportin/gesportin_screenshot_1.png"],
        image: "/proyects/NextClothingWeb/tiendaRopaNext_screenshot_1.png",
        link: "https://github.com/alcanizalan/tiendaRopaNextClase"
    },
    {
        id: 4,
        name: "Persutil",
        description: "Persutil es una web con diferenes funciones, hecha para un trabajo de clase en equipos, mi parte era un juego de sobre preguntas de javascript",
        tags: [{name: "Angular", icon: "/logos/logoAngular.png"},{name: "Java", icon: "/logos/logoJava.png"},{name: "Docker", icon: "/logos/logoDocker.png"},{name: "MySql", icon: "/logos/logoMysql.png"},{name: "Co-Working", icon: "/icons/coworking_icon.svg"}],
        //image: ["proyects/Persutil/persutil_screenshot_1.png"],
        image: "/proyects/Persutil/persutil_screenshot_1.png",
        link: "https://github.com/alcanizalan/proyecto_persutil"
    }
]