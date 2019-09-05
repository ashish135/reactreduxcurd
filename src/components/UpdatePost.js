import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updatePost} from './../actions/postActions';
class UpdatePost extends Component{
    state = {
        data: {},
        post_title: '',
        post_desc: '',
        post_id: Number(this.props.match.params.id)
    }
    componentWillMount(){
        this.setState({
            data: this.props.posts.filter( post => {
            this.state.post_title = post.title; 
            this.state.post_desc = post.body;    
            return post.id === Number(this.props.match.params.id)
        })
     });
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.updatePost(this.state)
        this.props.history.push('/')
    }    

    render(){
        const { data } = this.state;
        return(
            <div>
                <h2 className="blue-text">Update Post</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="post_title" type="text" onChange={this.handleChange} value={this.state.post_title} className="validate" />
                    <label className="active" htmlFor="post_title">Post Title</label>
                    </div>
                    <div className="input-field col s12">
                    <textarea id="post_desc" className="materialize-textarea" value={this.state.post_desc} onChange={this.handleChange}></textarea>
                    <label htmlFor="post_desc">Post Description</label>
                    </div>
                    <div className="input-field col s12">
                    <button className="btn">Update Post</button>
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
        updatePost: (data) => {
            dispatch(updatePost(data))
        }
    }
}
export default connect(mapStoreToProps ,mapDispatchToProps)(UpdatePost);