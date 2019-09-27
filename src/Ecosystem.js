import React, { Component } from 'react';
import Icon from './Icon'
// import animalsData from './animals.js'

class Ecosystem extends Component {

    constructor(props){
        super(props)
        this.state = {
            width: this.props.width,
            height: this.props.height,
            zoo: [...this.props.zoo]
            }
        // this.liftLocationsToLCA = this.liftLocationsToLCA.bind(this)
        this.props.addToZoo()
    }
    //
    // this.props.storeLocations()
    // liftLocationsToLCA(){
    //
    // }


    render(){

        const animals = this.state.zoo.map( (animal) => (
            <Icon key={animal.id} id={animal.id} controlsToggle={this.props.controlsToggle} addToY={this.props.addToY} removeAnimal={this.props.removeAnimal} vertices={this.props.vertices} toggle={this.state.toggle} storeLocations={this.props.storeLocations} type={animal.type} size={animal.size} styleClass={animal.styleClass} x={animal.x} y={animal.y} color={animal.color} width={this.props.width} height={this.props.height} />
        ))

    // {type: 'Angry', size: '100', styleClass: 'breatheFast', x: '200', y: '300', color: 'pink'},
                // onMouseDown={this.props.toggleMethod}>
                // console.log(this.state.width,this.state.height)
        return (
            <div>
                {animals}
            </div>
            )
    }
}

export default Ecosystem

//
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Twitter" size='100' styleClass='breatheFast' x='100' y='100' color='red' width={this.props.width} height={this.props.height} />),
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Bot" size='50' styleClass='breatheNormal' x='300' y='100' color='blue' width={this.props.width} height={this.props.height}/>),
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Confused" size='40' styleClass='breatheNormal' x='400' y='100' color='green' width={this.props.width} height={this.props.height}/>)
