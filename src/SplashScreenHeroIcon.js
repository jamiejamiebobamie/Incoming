import React, {Component} from 'react'
import Appearance from './Appearance'


class SplashScreenHeroIcon extends Component {
    constructor(props){
        super(props)
        this.state = {

                   type: this.props.type,
                   styleClass: this.props.styleClass,
                   size: this.props.size,

                   x: Math.random()*this.props.width,
                   xVariation: Math.random()*50,
                   y: this.props.height,

                   color: this.props.color,
                   id: props.id,

                   destinationX: Math.random()*this.props.width,
                   destinationY: -50,
                   doOnce: true,

                    }
                }

    moveToLocation(){
        if (this.state.destinationY < this.state.y) {
            // setTimeout(()=>{
            //     this.setState({xVariation:Math.random()*3 - 2*Math.random()})
            // },3000)
            let moveX = this.state.x + ((this.state.destinationX - this.state.x) / this.state.destinationX)/2
            let moveY = this.state.y - 2
            this.setState({x:moveX, y:moveY})
        } else {
            if (this.state.doOnce){
                this.props.removeHero(this.state.id)
                this.setState({doOnce:false})
            }
        }
    }

    render(){
        setTimeout(
            () => {this.moveToLocation()}, 100);
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

export default SplashScreenHeroIcon
