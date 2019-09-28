import React, {Component} from 'react'
import Appearance from './Appearance'


class SplashScreenCloudIcon extends Component {
    constructor(props){
        super(props)
        this.state = {

                   type: this.props.type,
                   styleClass: this.props.styleClass,
                   size: this.props.size,

                   x: 0,
                   y: this.props.height-this.props.id*this.props.height/1.5,

                   color: this.props.color,
                   id: this.props.id,

                   destinationX: this.props.width + 50,
                   destinationY: this.props.height-this.props.id*this.props.height/1.5,
                   doOnce: true,

                    }
                }

    moveToLocation(){
        if (this.state.destinationX > this.state.x) {
            // setTimeout(()=>{
            //     this.setState({xVariation:Math.random()*3 - 2*Math.random()})
            // },3000)
            console.log(this.state.destinationX !== this.state.x && this.state.destinationY !== this.state.y, this.state.destinationX, this.state.x, this.state.destinationY,this.state.y)
            let moveX = this.state.x + 1
            let moveY = this.state.y + ((this.state.destinationY - this.state.y) / this.state.destinationY)/2
            this.setState({x:moveX, y:moveY})
        } else {
            if (this.state.doOnce){
                this.props.removeCloud(this.state.id)
                this.setState({doOnce:false})
            }
        }
    }

    render(){
        setTimeout(
            () => {this.moveToLocation()}, 200);
        return (
            < Appearance
                id={this.props.id}
                type={this.state.type}
                styleClass={this.state.styleClass}
                size={this.state.size}
                color={this.props.color}
                x={this.state.x}
                y={this.state.y} />
        )
    }
}

export default SplashScreenCloudIcon
