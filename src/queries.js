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
