import React, {Component} from 'react';

import Ecosystem from './Ecosystem'
import CreateAnimal from './CreateAnimal'
import Icon from './Icon'
import './App.css';

import data from './iconEncyclo.js'

class App extends Component {


    constructor(props){
        super(props)
        this.state = {
                width: 0,
                height: 0,
                toggle: true,
                zoo: [],
                holdingCage:undefined}

        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.toggle = this.toggle.bind(this);
        this.storeLocations = this.storeLocations.bind(this);
        this.create = this.create.bind(this);
        this.addToZoo = this.addToZoo.bind(this)
        this.removeAnimal = this.removeAnimal.bind(this)

    }


    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      // console.log(this.state, window.innerWidth)
    }

    toggle(){
        // need to send a callback down to update all locations in the App's zoo
        this.setState({toggle: !this.state.toggle})
    }

    storeLocations(idAndLocation) {
        let locations = [...this.state.storedLocations]
        locations.push(idAndLocation)
        this.setState({storedLocation: locations})
    }
    // {type: 'Angry', size: '100', styleClass: 'breatheFast', x: '200', y: '300', color: 'pink'},
    create(x,y,color){
        let type = undefined
        if (Math.random()>.5){
            type = 'Male'
        } else {
            type = 'Female'
        }
        this.setState({holdingCage: {type:type,id:Math.random(), x:x,y:y,color:color,size:40, styleClass:'breatheNormal'}, toggle: true})
    }

    addToZoo(){
        if (this.state.holdingCage){
        const newAnimal = this.state.holdingCage
        const newAnimals = [...this.state.zoo, newAnimal]
        this.setState({zoo: newAnimals, holdingCage:undefined})
        }
    }

    drawPoint(r, currentPoint, totalPoints) {
        var theta = ((Math.PI*2) / totalPoints);
        var angle = (theta * currentPoint+1);
        var x = (r * Math.cos(angle));
        var y = (r * Math.sin(angle));
        return {x:x, y:y};
    }

    removeAnimal(id){
        for (let i =  0; i < this.state.zoo.length; i++){
            console.log(this.state.zoo[i].id, id)
            if (this.state.zoo[i].id === id){
                let copyZoo = [...this.state.zoo]
                let duplicateEnd = copyZoo[copyZoo.length-1]
                copyZoo[i] = duplicateEnd
                copyZoo.pop()
                this.setState({zoo:copyZoo})
            }
        }
    }

render(){
    const numOfPoints = 6
    const radius = 400
    let points = []

    for (let i = 0; i < numOfPoints; i++){
        const newVertex = this.drawPoint(radius, numOfPoints - i, numOfPoints)
        points.push(newVertex)
    }

    const vertices = points.map( (vertex)=>
        <div className='vertices' style={{left:vertex.x+(this.state.width/2), top:vertex.y+(this.state.height/2)}}>hi</div>
    )

    setTimeout(()=>console.log(this.state.zoo.length),3000)

    return (
      <div className="App">
        {vertices}
        <button
            style={{left:this.state.width/2-177,top:this.state.height/2-176}}
            className="toggle"
            onClick={this.toggle}>
            <Icon type='AddCircle' color='transparent'/>
        </button>
        {this.state.toggle ?
           < Ecosystem
             toggle={this.state.toggle}
             storeLocations={this.storeLocations}
             width={window.innerWidth-100}
             height={window.innerHeight-100}
             holdingCage = {this.state.holdingCage}
             addToZoo={this.addToZoo}
             zoo={this.state.zoo}
             toggleMethod = {this.toggle.bind(this)}
             vertices={points}
             removeAnimal={this.removeAnimal}
             />
          :
          < CreateAnimal
              width={window.innerWidth}
              height={window.innerHeight}
              create={this.create}
          />
          }
      </div>
    )
}

}

export default App;
