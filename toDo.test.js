const { fetchData } = require("./fetchData");




describe ("Testing Post", ()=>{
  it("should return 100 posts", async ()=>{
    const posts = await fetchData("posts");
    expect(posts.length).toBe(100)
  });
  it("should contain post with ID of 3", async ()=>{
      const posts = await fetchData("posts")
       expect(posts).toContainEqual({
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },)
  })
})