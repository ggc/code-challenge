export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLEBYID_QUERY = id => { 
  return `{
    article(id: "${id}") {
      author
      content
      excerpt
      id
      title
      published
      tags
    }
  }`
} 

export const CREATEARTICLE_QUERY = article => {
  return `
    mutation { 
      addArt (
        author: "${article.author}",
        content: "${article.content}",
        excerpt: "${article.content}",
        published: ${article.published},
        tags: [${article.tags}],
        title: "${article.title}"
      ) {
        id,
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
  console.log(`tags: [${article.tags}]`);
  // let tagsArray = article.tags.split(',').map( tag => '"'+tag.trim()+'"' );
  // console.log(`tags: [${tagsArray}]`);
    console.log(`mutation { 
        updateArt (
          id: "${article.id}",
          author: "${article.author}",
          excerpt: "${article.content}",
          published: ${article.published},
          title: "${article.title}",
          tags: [${article.tags}]
      ) { 
        id,
        author,
        title,
        content,
        excerpt,
        published,
        tags
        } 
      }`)
  return `mutation { 
      updateArt (
        id: "${article.id}",
        author: "${article.author}",
        content: "${article.content}",
        excerpt: "${article.content}",
        published: ${article.published},
        title: "${article.title}",
        tags: [${article.tags}]
    ) { 
      id,
      author,
      title,
      content,
      excerpt,
      published,
      tags
      } 
    }`
}