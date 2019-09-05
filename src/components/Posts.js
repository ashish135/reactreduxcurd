import React, { Component } from 'react';
import {connect} from 'react-redux';
import postImg from './../assets/blog.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {updatePost, deletePost,searchPost,updateList} from './../actions/postActions';

class Posts extends Component {
    handleDelete = (e) => {
        this.props.deletePost(e.target.id);
    }
    handleUpdate = (e) => {
        this.props.updatePost(e.target.id);
    }
    postUpdate = (e) => {
        console.log(e.target.id);
        this.props.history.push('/update/'+e.target.id)
    }
    handleChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        this.props.searchPost(searchText);
    }
    componentWillMount = (e) => {
        this.props.updateList(this.props.posts)
    }
    render() {
        const { newlist } = this.props;
        
        const postlist = newlist.length ? ( newlist.map(post => {
            return(
                <div className="card" key={post.id}>
                    <div className="card-content">
                        <button id={post.id} onClick={this.handleDelete} className="btn red right">Delete</button>
                        <button id={post.id} onClick={this.postUpdate} className="btn red right">Update</button>
                        <h5 className="blue-text"><Link to={'/post/'+post.id}>{ post.title }</Link></h5>
                        <img width="150" className="postimg" src={postImg} alt={post.title} />
                        <p>{post.body}<Link to={'/post/'+post.id}> read more...</Link></p>
                    </div>
                </div>
            )
        })) : (
            <p>No post found!</p>
        );
        return(
            
                <div className="posts">
                    <h2 className="blue-text">News <input onChange={this.handleChange} style={{width:250, marginLeft:80}} type="text" placeholder="Search posts..." /> <a href="/addpost" className="btn right">Add new Post</a></h2>
                    <h5><span className="new badge" data-badge-caption="result found">{newlist.length}</span></h5>
                    <br />
                    { postlist }
                </div>   
        )
    }
}

const mapStoreToProps = (state) =>{
    return {
        newlist: state.newlist,
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        },
        updatePost: (id) => {
            dispatch(updatePost(id))
        },
        searchPost: (text) =>{
            dispatch(searchPost(text))
        },
        updateList: (list) =>{
            dispatch(updateList(list))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Posts);