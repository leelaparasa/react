import React from 'react';
import {  Row } from 'react-bootstrap';
import Movie from './Movie';

export default class MoviesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            netflixData: {
                "mylist": [
                    {
                        "title": "Futurama",
                        "id": 1,
                        "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
                    },
                    {
                        "title": "The Interview",
                        "id": 2,
                        "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
                    },
                    {
                        "title": "Gilmore Girls",
                        "id": 3,
                        "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
                    }
                ],
                "recommendations": [
                    {
                        "title": "Family Guy",
                        "id": 4,
                        "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
                    },
                    {
                        "title": "The Croods",
                        "id": 5,
                        "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
                    },
                    {
                        "title": "Friends",
                        "id": 6,
                        "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
                    }
                ]
            }
        }
        this.MovieHandler = this.MovieHandler.bind(this);
    }
    MovieHandler(movieObj){
        let movieType = movieObj.movieType;
        let movie = movieObj.movieItem;
        if(movieType === 'mylist'){
            const newState = this.state.netflixData;
            if (newState.mylist.indexOf(movie) > -1) {
                newState.mylist.splice(newState.mylist.indexOf(movie), 1);
                let length = newState.recommendations.length;
                newState.recommendations.splice(length, 0, movie);
                this.setState({netflixData: newState});
            }
        }else{
            const newState = this.state.netflixData;
            let length = newState.mylist.length;
            newState.mylist.splice(length, 0, movie);
            newState.recommendations.splice(newState.recommendations.indexOf(movie), 1);
            this.setState({netflixData: newState});
        }
    }
    render(){
        var netflixData = this.state.netflixData;
        var self = this;
        return(
            <div>
                <Row className="show-grid">
                    <h2 style={{color: 'white'}}>MyList</h2>
                    {
                        netflixData.mylist.map(function(movie){
                            return <Movie
                                imgsrc={movie.img}
                                key={movie.id}
                                id={movie.id}
                                movieItem={movie}
                                movieType="mylist"
                                buttontext="Remove"
                                triggerParentUpdate={self.MovieHandler}></Movie>
                        })
                    }
                </Row>
                <Row>
                    <h2 style={{color: 'white'}}>Recommendations</h2>
                    {
                        netflixData.recommendations.map(function(movie){
                            return <Movie
                                imgsrc={movie.img}
                                key={movie.id}
                                id={movie.id}
                                movieItem={movie}
                                movieType="recommendations"
                                buttontext="Add"
                                triggerParentUpdate={self.MovieHandler}></Movie>
                        })
                    }
                </Row>
                <Row>
                    <h2 style={{color: 'white'}}>Mylist Movie Titles</h2>
                    {
                        netflixData.mylist.map(function(movie){
                            return <div style={{color: 'white', marginLeft: 16}} key={movie.id}>{movie.title}</div>
                        })
                    }
                </Row>
                <Row>
                    <div>&nbsp;</div>
                </Row>
            </div>
        )
    }
}