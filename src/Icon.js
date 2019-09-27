
import React, {Component} from 'react'

import Appearance from './Appearance'



class Icon extends Component {
    constructor(props){
        super(props)

        // i need to plug these values into this.state.content and change these values dynamically during gameplay
        this.state = { type: this.props.type,
                       styleClass: this.props.styleClass,
                       size: this.props.size,

                       x: this.props.width/2-this.props.x,
                       y: this.props.height/2-this.props.y,

                       color: this.props.color,
                       id: props.id,

                       destinationX: Math.random()*this.props.width,
                       destinationY:  Math.random()*this.props.height,
                       doOnce: true,
                       vertices: this.props.vertices,
                       currentVertexIndex: 0,
                        }

    }

    setNewLocation(){
        if (this.state.destinationX - this.state.x < 10 && this.state.destinationY - this.state.y < 10 && this.state.doOnce) {
            console.log('arrived')
            let x = Math.random()*this.props.width
            let y = Math.random()*this.props.height
            //
            // if (this.state.currentVertexIndex + 1 === this.state.vertices.length){
            //     this.setState({currentVertexIndex: 0 })
            // } else {
            //     const newIndex = this.state.currentVertexIndex+1
            //     this.setState({currentVertexIndex: newIndex })
            // }
            // //
            // if (this.props.vertices && this.props.width && this.props.height){
            //     x = this.props.width/2+this.props.vertices[this.state.currentVertexIndex].x+ Math.random()*50
            //     y = this.props.height/2+this.props.vertices[this.state.currentVertexIndex].y+ Math.random()*50
            // }

            this.setState({destinationX:x, destinationY:y, doOnce: false})
            setTimeout( () => {
                    this.setState({doOnce: true})
                }, 11000);
        }

    }

    moveToLocation(){
        if (this.state.destinationX !== this.state.x && this.state.destinationY !== this.state.y) {
            let moveX = this.state.x + ((this.state.destinationX - this.state.x) / this.state.destinationX)/2
            let moveY = this.state.y + ((this.state.destinationY - this.state.y) / this.state.destinationY)/2
            this.setState({x:moveX, y:moveY})
        }
    }

    render(){
        setTimeout(
            () => this.setNewLocation(), 10000);

        setTimeout(
            () => {this.moveToLocation()}, 20);

        // if(!this.props.toggle && this.state.doOnce){
        //     this.props.storeLocations({id:this.state.id, x: this.state.x, y: this.state.y})
        //     this.setState({doOnce:!this.state.doOnce})
        // }

        return (
            < Appearance id={this.props.id} removeAnimal={this.props.removeAnimal} type={this.state.type} styleClass={this.state.styleClass} size={this.state.size} color={this.props.color} x={this.state.x} y={this.state.y} />
        )
    }
}

//
// <Instagram size='40' />
// <Snapchat size='40' />
// <Twitter size='40' />
//
// <Angry size='40' />
// <Confused size='40' />
// <Bot size='40' />
// <Cool size='40' />
// <HappyBeaming size='40' />
// <HappyHeartEyes size='40' />
export default Icon
