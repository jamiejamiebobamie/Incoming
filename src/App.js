import React, {Component} from 'react';
import Splash from './SplashScreen'

import Ecosystem from './Ecosystem'
import CreateAnimal from './CreateAnimal'
import Icon from './Icon'
import './App.css';
import throttle from 'lodash/throttle'

import data from './iconEncyclo.js'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
                width: 0,
                height: 0,
                toggle: true,
                zoo: [],
                holdingCage:undefined,
                locationX:0,
                locationY:0,
                toggleUp:false,
                toggleDown:false,
                addToY: 0,
                toggleLeft:false,
                toggleRight:false,
                addToX: 0,
                togglePlay:false,
            }

        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.toggle = this.toggle.bind(this);
        this.storeLocations = this.storeLocations.bind(this);
        this.create = this.create.bind(this);
        this.addToZoo = this.addToZoo.bind(this)
        this.removeAnimal = this.removeAnimal.bind(this)

        this.togglePlay = this.togglePlay.bind(this)


        // let starterHeroes = []

        for (let i = 0; i < 6; i++) {
            const newHero = {type:'Female',id:Math.random(), x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,color:this.getRGB(Math.random()*255,Math.random()*255),size:40, styleClass:'breatheNormal', toggle: true}
            this.setState({zoo:[...this.state.zoo, newHero]})
        }


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
        let type = 'Female'
        let randomFraction = Math.random()
        // if (randomFraction>.5){
        //     type = 'Male'
        // } else {
        //     type = 'Female'
        // }
        // if (randomFraction>.66){
        //     type = 'Male'
        // } else if (randomFraction>.33) {
        //     type = 'Female'
        // } else {
        //     type = 'Run'
        // }
        this.setState({holdingCage: {type:type,id:Math.random(), x:x,y:y,color:color,size:40, styleClass:'breatheNormal'}, toggle: true})
    }

    addToZoo(){
        if (this.state.holdingCage){
        const newAnimal = this.state.holdingCage
        const newAnimals = [...this.state.zoo, newAnimal]
        this.setState({zoo: newAnimals, holdingCage:undefined})
        }
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

    _onMouseMove(e) {
            this.setState({ locationX: (this.props.width/2-e.screenX), locationY: (this.props.height/2-e.screenY) });
    }

    // onMouseMove={this._onMouseMove.bind(this)}

toggleUpDown(){
    if (this.state.toggleUp && this.state.toggleDown){

    } else if (this.state.toggleUp) {
        let add = this.state.addToY - 3
        if (add >= -3){
            this.setState({addToY:add})

        }
    } else if (this.state.toggleDown) {
        let add = this.state.addToY + 3
        if (add <= 3){
            this.setState({addToY:add})
        }
    } else {
        if (this.state.addToY !== 0){
            if (this.state.addToY > 0){
                let goToZero = this.state.addToY - 1
                this.setState({addToY:goToZero})
            } else {
                let goToZero = this.state.addToY + 1
                this.setState({addToY:goToZero})
            }
        }
    }
}


toggleLeftRight(){
    if (this.state.toggleLeft && this.state.toggleRight){

    } else if (this.state.toggleLeft) {
        let add = this.state.addToX - 3
        if (add >= -3){
            this.setState({addToX:add})
        }
    } else if (this.state.toggleRight) {
        let add = this.state.addToX + 3
        if (add <= 3){
            this.setState({addToX:add})
        }
    } else {
        if (this.state.addToX !== 0){
            if (this.state.addToX > 0){
                let goToZero = this.state.addToX - 1
                this.setState({addToX:goToZero})
            } else {
                let goToZero = this.state.addToX + 1
                this.setState({addToX:goToZero})
            }
        }
    }
}
//
//
// toggleDown(){
//     if (this.state.toggleUp){
//         let add = this.state.addToY - 1
//         this.setState({addToY:add})
//     } else {
//         this.setState({addToY:0})
//     }
// }

togglePlay(){
    this.setState({togglePlay:true})
}

render(){
    // const numOfPoints = 6
    // const radius = 400
    // let points = []
    //
    // for (let i = 0; i < numOfPoints; i++){
    //     const newVertex = this.drawPoint(radius, numOfPoints - i, numOfPoints)
    //     points.push(newVertex)
    // }
    //
    // const vertices = points.map( (vertex)=>
    //     <div className='vertices' style={{left:vertex.x+(this.state.width/2), top:vertex.y+(this.state.height/2)}}>hi</div>
    // )
    // {vertices}
    // vertices={points}


    // setTimeout(()=>console.log(this.state.zoo.length),3000)
    //
    //
    setTimeout(()=>{
            this.toggleUpDown()
            this.toggleLeftRight()
            console.log(this.state)
    },800)

    // throttle(() => {
    //     console.log(this.state.addToY)
    //     this.toggleUpDown()
    //     this.toggleLeftRight()
    // }, 1000)

    // const throttled = throttle(this.toggleUpDown,400)
    //     console.log(this.state.addToY)
    //     this.toggleUpDown()
    //     this.toggleLeftRight()
    // }, 1000)


    return (
      <div className="App">

      {!this.state.togglePlay ?

          < Splash
              width={this.state.width}
              height={this.state.height}
              togglePlay={this.togglePlay}
           />

          :

          <div>

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
               removeAnimal={this.removeAnimal}
               addToY={this.state.addToY}
               addToX={this.state.addToX}

               controlsToggleY={this.state.toggleUp || this.state.toggleDown}
               controlsToggleX={this.state.toggleLeft || this.state.toggleRight}
               />
            :
            < CreateAnimal
                width={window.innerWidth}
                height={window.innerHeight}
                create={this.create}
            />
            }
            <div
            className="crowdControl"
            style={{top:this.state.height-100,left:this.state.width/2}}
            >
            <button
            className='buttonControls'
            style={{marginTop:-100}}
            onMouseDown={()=>{this.setState({toggleUp:true})}}
            onMouseUp={()=>{this.setState({toggleUp:false})}}
            onKeyDown={()=>{this.setState({toggleUp:true})}}
            >Up</button>
            <button
            className='buttonControls'
            onMouseDown={()=>{this.setState({toggleDown:true})}}
            onMouseUp={()=>{this.setState({toggleDown:false})}}
            >Down</button>


            <button
            className='buttonControls'
            style={{marginTop:0, marginLeft:-50}}
            onMouseDown={()=>{this.setState({toggleLeft:true, toggleDown:true})}}
            onMouseUp={()=>{this.setState({toggleLeft:false,toggleDown:false})}}
            >DownLeft</button>
            <button
            className='buttonControls'
            style={{marginTop:-50, marginLeft:-50}}
            onMouseDown={()=>{this.setState({toggleLeft:true})}}
            onMouseUp={()=>{this.setState({toggleLeft:false})}}
            >Left</button>
            <button
            className='buttonControls'
            style={{marginTop:-100, marginLeft:-50}}
            onMouseDown={()=>{this.setState({toggleLeft:true, toggleUp:true})}}
            onMouseUp={()=>{this.setState({toggleLeft:false,toggleUp:false})}}
            >UpLeft</button>

            <button
            className='buttonControls'
              style={{marginTop:0, marginLeft:50}}
            onMouseDown={()=>{this.setState({toggleRight:true, toggleDown:true})}}
            onMouseUp={()=>{this.setState({toggleRight:false, toggleDown:false})}}
            >DownRight</button>
            <button
            className='buttonControls'
              style={{marginTop:-50, marginLeft:50}}
            onMouseDown={()=>{this.setState({toggleRight:true})}}
            onMouseUp={()=>{this.setState({toggleRight:false})}}
            >Right</button>
            <button
            className='buttonControls'
              style={{marginTop:-100, marginLeft:50}}
            onMouseDown={()=>{this.setState({toggleRight:true, toggleUp:true})}}
            onMouseUp={()=>{this.setState({toggleRight:false, toggleUp:false})}}
            >UpRight</button>

            </div>


          </div>


      }



      </div>
    )
}

}

export default App;


      //
