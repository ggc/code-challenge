export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;


export const articleById_QUERY = id => { 
  return `{
    article(id: "${id}") {
      author
      excerpt
      id
      title
    }
  }`
} 

export const CREATEARTICLE_QUERY = article => {
  return `
    mutation { 
      addArt (
        author: "${article.author}",
        content: "${article.excerpt}",
        excerpt: "${article.excerpt}",
        published: "true",
        tags: ["cartoons", "humor", "hardcore"],
        title: "${article.title}"
      ) { 
        author,
        content,
        excerpt,
        published,
        tags,
        title
      } 
    }`
}


export const DELETEARTICLE_QUERY = articleId => {
  return `
    mutation { 
      deleteArt (
        id: "${articleId}"
    ) { 
      id
      } 
    }`
}


export const UPDATEARTICLE_QUERY = article => {
  console.log(`
    mutation { 
      updateArt (
      id: "${article.id}",
      author: "${article.author}",
      title: "${article.title}",
      content: "${article.content}",
      excerpt: "${article.excerpt}",
      tags: "${article.tags}"
    ) { 
      id,
      author,
      title,
      content,
      excerpt,
      tags
      } 
    }`)
  return `
    mutation { 
      updateArt (
      id: "${article.id}",
      author: "${article.author}",
      title: "${article.title}",
      content: "${article.content}",
      excerpt: "${article.excerpt}",
      tags: "${article.tags}"
    ) { 
      id,
      author,
      title,
      content,
      excerpt,
      tags
      } 
    }`
}