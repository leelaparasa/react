import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showButton: false,
            movieType: '',
            imgsrc: '',
            buttontext: ''
        }
        this.ShowButton = this.ShowButton.bind(this);
        this.HideButton = this.HideButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);

    }
    ShowButton(){
        this.setState({
            showButton:true
        });
    }
    HideButton(){
        this.setState({
            showButton:false
        });
    }
    buttonClickHandler(){
        let movieObj = {
            movieItem : this.props.movieItem,
            movieType : this.props.movieType
        }
        this.props.triggerParentUpdate(movieObj);
    }


    render(){
        let button = <div style={{height: 40}}>&nbsp;&nbsp;</div>
        if(this.state.showButton)
            button = <div style={{height: 40}}><button id={this.props.id} onClick={this.buttonClickHandler}>{this.props.buttontext}</button></div>
        return(
            <div>
                <Col sm={4} md={2} onMouseEnter={this.ShowButton} onMouseLeave={this.HideButton}>
                    <img src={this.props.imgsrc} alt="Image cannot be displayed" />
                    {button}
                </Col>
            </div>
        )
    }
}

Movie.PropTypes = {
    triggerParentUpdate: PropTypes.func
}
