import { StaticImageData } from "next/image"

export interface ProyectType {
    id: number,
    name: string,
    description: string,
    tags: TagType[],
    //image: StaticImageData[] | string[],
    image: StaticImageData | string,
    link: string,
}

export interface TagType {
    name: string,
    icon: StaticImageData | string,
}