import { Key } from "react"


export const scrollToTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'})
}

export const keyGenerator = ()=>{
    return Math.random() * 1000 as Key
}