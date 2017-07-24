mutation { 
  updateArt (
  id: "5975fc4fac224c3ab2661539",
  author: "A",
  title: "T",
  content: "C",
  excerpt: "E",
  published: "true",
  tags: "${article.tags}"
) { 
  id,
  author,
  title,
  content,
  excerpt,
  tags
  } 
}