import { JSX } from "react"

export type NavItem = {
    id : number , icon : JSX.Element , href ?: string , name ?:string , type:string
}

export type CardInfo = {
    id: number , img : string , title : string , description : string , href : string
}

export type CardProjectData = {
    id:number , title:string , img:string , description:string , href:string,
}

export type Section = { id: number; title: string; data: CardProjectData[] };

export type SkillsData = {
    id:number , name : string , color : string
}

