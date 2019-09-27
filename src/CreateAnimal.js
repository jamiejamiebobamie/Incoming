import React, {Component} from 'react';

import Icon from './Icon'

import './CreateAnimal.css'


class CreateAnimal extends Component {
    constructor(props){
        super(props)

        this.state={
            meter: .7,
            buttonDown: false,
            colorMenuToggled: false,
            selectedColor: 'blue',
            locationX: 0,
            locationY: 0,
            reload: false,
            pickingColor: false,
            color: '',
        }

        this.getRGB = this.getRGB.bind(this);
        this.togglePickColor = this.togglePickColor.bind(this);

        this.colors = []
        for (let i = 0; i < 255; i+=5){
            for (let j = 0; j < 255; j+=5){
                this.colors.push( { x:i*this.props.width/255, y:j*this.props.height/255 } )
            }
        }

        this.pattern = this.colors.map( (coordinate) => (
                    <div
                        className="pattern"
                        key = {Math.random().toString()}
                        style={{
                            left:coordinate.x,
                            top:coordinate.y,
                            width:10*this.props.width/255,
                            height:10*this.props.height/255,
                            color:'transparent',
                            backgroundColor: this.getRGB((coordinate.x/(this.props.width/255)), (coordinate.y/(this.props.width/255)))}}>
                    </div>
                ))
    }

    getRGB(x,y) {
        let R = 255-x
        let G = 255-y
        let B = x - y

        if ( x > this.props.width/2 ) {
            B = x + y
        }

        if (R < 0) {
            R = 0
        } else if (R > 255) {
            R = 255
        }

        if (G < 0) {
            G = 0
        } else if (G > 255) {
            G = 255
        }

        if (B < 0) {
            B = 0
        } else if (B > 255) {
            B = 255
        }
        return `rgb(${R},${G},${B})`
    }

    togglePickColor(){
        this.setState({pickingColor: !this.state.pickingColor});
    }

    _onMouseMove(e) {
        if (this.state.pickingColor){
            this.setState({ locationX: (this.props.width/2-e.screenX), locationY: (this.props.height/2-e.screenY), color: this.getRGB((e.screenX/(this.props.width/255)), (e.screenY/(this.props.width/255))) });
        }
    }

    //
    // <div className='container'
    //      onMouseMove={this._onMouseMove.bind(this)}
    //      onMouseUp={(e) => this.props.create(locationX,locationY, this.state.color)}>
    //         <button
    //             className="createAnimalButton"
    //             onMouseDown={this.togglePickColor}>
    //             {
    //             this.state.pickingColor
    //                 ?
    //             <Icon type='Question' color={this.state.color} height={this.props.height/2} width={this.props.width/2}/>
    //             :
    //             <Icon type='Question' color='white' height={this.props.height/2} width={this.props.width/2}/>
    //             }
    //         </button>

    render(){
        const { locationX, locationY } = this.state;
        return (
            <div className='container'
                 onMouseMove={this._onMouseMove.bind(this)}
                 onMouseUp={(e) => this.props.create(locationX,locationY, this.state.color)}>
                    <button
                        className="createAnimalButton"
                        onMouseDown={this.togglePickColor}>
                        {
                        this.state.pickingColor
                            ?
                        <Icon type='Circle' color={this.state.color} height={this.props.height/2} width={this.props.width/2}/>
                        :
                        <Icon type='Circle' color='white' height={this.props.height/2} width={this.props.width/2}/>
                        }
                    </button>
                    <h1 className="createAnimalText">
                      <span className="char1">c</span>
                      <span className="char2">l</span>
                      <span className="char3">i</span>
                      <span className="char4">c</span>
                      <span className="char5">k</span>
                      <span className="char6"> </span>
                      <span className="char7">a</span>
                      <span className="char8">n</span>
                      <span className="char9">d</span>
                      <span className="char10"> </span>
                      <span className="char11">d</span>
                      <span className="char12">r</span>
                      <span className="char13">a</span>
                      <span className="char14">g</span>
                      <span className="char15"> </span>
                      <span className="char16">t</span>
                      <span className="char17">o</span>
                      <span className="char18"> </span>
                      <span className="char19">p</span>
                      <span className="char20">i</span>
                      <span className="char21">c</span>
                      <span className="char22">k</span>
                      <span className="char23"> </span>
                      <span className="char24">c</span>
                      <span className="char25">o</span>
                      <span className="char26">l</span>
                      <span className="char27">o</span>
                      <span className="char28">r</span>
                    </h1>

                    <div className="backgroundPattern">
                        {this.pattern}
                    </div>
            </div>
        )
    }
}

export default CreateAnimal

                    // <h1 className="createAnimalText">click and drag to pick color</h1>
