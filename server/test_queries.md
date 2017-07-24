{
  articles {
    author
    excerpt
    id
    title
  }
}


{
  article(id: "${id}") {
    author
    content
    excerpt
    id
    title
    published
    tags
  }
}


mutation { 
  addArt (
    author: "Jim",
    content: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. ",
    excerpt: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. ",
    published: true,
    tags: ["Rick and Morty", "Cartoons", "Almost comedy"],
    title: "Rick and Morty"
  ) {
    id,
    author,
    content,
    excerpt,
    published,
    tags,
    title
  } 
}


mutation { 
  deleteArt (
    id: "5976674723dab073d26296c6"
) { 
  id
  } 
}


mutation { 
  updateArt (
    id:"5976674723dab073d26296c6",
    author: "Jim",
    content: "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. ",
    excerpt: "After having been missing for nearly 20 years, Rick Sanchez... ",
    published: true,
    tags: ["Rick and Morty", "Cartoons", "Almost comedy"],
    title: "Rick and Morty"
  ) {
    id,
    author,
    content,
    excerpt,
    published,
    tags,
    title
  } 
}