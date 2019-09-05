import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from './../actions/postActions';
class AddPost extends Component{
    state = {
        post_title: '',
        post_desc: ''
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPost(this.state)
        this.props.history.push('/posts')
    }    

    render(){
        return(
            <div>
                <h2 className="blue-text">Add New Post</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                    <input id="post_title" type="text" onChange={this.handleChange} className="validate" />
                    <label className="active" htmlFor="post_title">Post Title</label>
                    </div>
                    <div className="input-field col s6">
                    <textarea id="post_desc" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="post_desc">Post Description</label>
                    </div>
                    <div className="input-field col s6">
                    <button className="btn">Add new Post</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}
const mapStoreToProps = (state) =>{
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return{
        addPost: (data) => {
            dispatch(addPost(data))
        }
    }
}
export default connect(mapStoreToProps ,mapDispatchToProps)(AddPost);