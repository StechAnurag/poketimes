import React, {Component} from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import Indiatimes from '../indiatimes.png';
import { connect } from 'react-redux';

class Home extends Component {
    /* state = {
        posts : []
    }
    componentDidMount () {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(res =>{
            //console.log(res);
            this.setState({
                posts : res.data.slice(0,10)
            });
        });

    } */
    
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="posts card" key={post.id}>
                        <img src={Indiatimes} alt=""></img>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title red-text">
                                {post.title}
                                </span>
                            </Link>
                            <p className="card-body">
                            {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"><p>Posts are loading ...</p></div>
        )
        return (
            <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);