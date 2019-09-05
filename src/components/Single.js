import React, { Component } from 'react';
import { connect } from 'react-redux';
import postImg from './../assets/blog.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Single extends Component {
    render() {
        const {post} = this.props;
        return(
            <div className="">
                <div className="main-container container">
                <div className="card">
                    <div className="card-content">
                    <Link to="/" className="btn">Back</Link>
                        <h3 className="blue-text">{post.title}</h3>
                        <img src={postImg} alt={post.title}/>
                        <p>{post.body}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = Number(ownProps.match.params.id);
    return {
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(mapStateToProps)(Single);