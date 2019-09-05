export const deletePost = (id) => {

    return {
        type: "DELETE_POST",
        id
    }
}

export const updatePost = (data) => {

    return {
        type: "UPDATE_POST",
        data
    }
}

export const addPost = (data) => {
    return {
        type: "ADD_POST",
        post:{
            id: Math.floor(Math.random()*10 + 10),
            title: data.post_title,
            body: data.post_desc
        }
    }
}
export const searchPost = (text) => {
    return {
        type: 'SEARCH_POST',
        searchText: text
    }
}
export const updateList = (list) => {
    return {
        type: 'UPDATE_LIST',
        list: list
    }
}
