const initState = {
    posts: [
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          },
          {
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
          },
          {
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
          },
    ],
    contacts: [],
    newlist: [],
};

function rootReducer(state = initState, action){
  if(action.type === 'ADD_CONTACT'){
    return{
      ...state,
      contacts: [...state.contacts, action.contact]
    }
  }
  if(action.type === 'DELETE_POST'){
    let newpostlist = state.newlist.filter(newpost => Number(action.id) !== newpost.id)
    return{
      ...state,
      newlist: newpostlist
    }
  } else if(action.type === 'ADD_POST') {
    return{
      ...state,
      posts: [...state.posts, action.post]
    }
  } else if(action.type === 'UPDATE_LIST') {
    return{
      ...state,
      newlist: action.list
    }
  } else if(action.type === 'SEARCH_POST') {

        let posts = state.posts;
        posts = posts.filter( (post) => {
        let postTitle = post.title.toLowerCase();
              return postTitle.search(action.searchText) !== -1;
            })
            return{
              ...state,
              newlist: posts
            }

  }
    return state;
}

export default rootReducer;