import { getCollection } from "astro:content"


  
  export async function getAllTags(){
  
    const posts = await getCollection('blog')
  
    // formo un array de tags que iran asi primeramente [[ai, astro],[javascript, react]] a un array asi 
    // [ai, astro,javascript, react] con el metodo flat ademas sin repetidos<
    return Array.from(
      new Set(
        posts.map((p) => p.data.tags).flat().sort()
      )
    )
  }