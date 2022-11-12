import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({posts: json}))

        // fetch("https://picsum.photos/list")
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ images: data.slice(0, 30) });
        //     });
    }

    // const getImg = () => {
    //   // const url = "https://picsum.photos/200/300";
    // }

    render() {
        const {posts} = this.state;


        return (
            <div className="container">
                <div class="jumbotron">
                    <h1 class="display-4">Blog posts</h1>
                </div>
                <div className="wrapper">
                    {posts.map((post) => (
                        <div className="card" key={post.id}>
                            <div className="card-header">
                                #{post.id} {post.title}
                            </div>
                            <div className="card-body">
                                <img class="card-img" src={`https://picsum.photos/400/250?image=${post.id + 50}`} alt=""/>

                                {/*<img src={post.img}></img>*/}
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;