import React, { Component } from 'react';

import SplashScreenHeroIcon from './SplashScreenHeroIcon'
import SplashScreenCloudIcon from './SplashCloudIcon'


class SplashScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            x:70,
            y:70,
            goUp: true,
            incrementColors: 0,
            incrementOnce: true,
            heroes:[],
            clouds: [],
        }
        this.removeHero = this.removeHero.bind(this)
        this.removeCloud = this.removeCloud.bind(this)

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

    incrementColorOnLetters(i){
        let newNumber = i - this.state.incrementColors
        if (newNumber < 0){
            newNumber *= -1
        }
        return newNumber
    }

    removeHero(id){
        for (let i =  0; i < this.state.heroes.length; i++){
            // console.log(this.state.heroes[i].id, id)
            if (this.state.heroes[i].id === id){
                let copyHeroes = [...this.state.heroes]
                let duplicateEnd = copyHeroes[copyHeroes.length-1]
                copyHeroes[i] = duplicateEnd
                copyHeroes.pop()
                this.setState({heroes:copyHeroes})
            }
        }
    }

    // {type: 'Angry', size: '100', styleClass: 'breatheFast', x: '200', y: '300', color: 'pink'},
    addHero(){
        if (this.state.heroes.length < 10){
            let type = undefined
            let randomFraction = Math.random()
            if (randomFraction>.5){
                type = 'Male'
            } else {
                type = 'Female'
            }
            let x = Math.random() * 255
            let y = Math.random() * 255

            const newHero = { type:type, id:randomFraction, color: this.getRGB(x,y), size:40, styleClass:'breatheNormal'}
            let copyHeroes = [...this.state.heroes, newHero]
            this.setState({heroes: copyHeroes})
        }
    }


    addCloud(){
        if (this.state.clouds.length < 3){
            let type = undefined
            let randomFraction = Math.random()
            if (randomFraction>.5){
                type = 'Male'
            } else {
                type = 'Female'
            }
            const newCloud = { type:type, id:randomFraction, color: 'white', size:randomFraction*200+40, styleClass:'breatheNormal'}
            let copyClouds = [...this.state.clouds, newCloud]
            this.setState({clouds: copyClouds})
        }
    }

    removeCloud(id){
        for (let i =  0; i < this.state.clouds.length; i++){
            // console.log(this.state.clouds[i].id, id)
            if (this.state.clouds[i].id === id){
                let copyClouds = [...this.state.clouds]
                let duplicateEnd = copyClouds[copyClouds.length-1]
                copyClouds[i] = duplicateEnd
                copyClouds.pop()
                this.setState({clouds:copyClouds})
            }
        }
    }


    render(){

        // setTimeout(()=>{
        //     let x, y;
        //     if (this.state.goUp){
        //         if (this.state.x < 150 && this.state.y < 150){
        //             x = this.state.x + 1
        //             y = this.state.y + 1
        //         } else {
        //             this.setState({goUp:false})
        //         }
        //     } else {
        //         if (this.state.x > 70 && this.state.y > 70){
        //             x = this.state.x - 1
        //             y = this.state.y - 1
        //         } else {
        //             this.setState({goUp:true})
        //         }
        //     }
        //     console.log(this.state)
        //     if (x !== undefined && y !== undefined){
        //         this.setState({x:x, y:y})
        //     }
        // }, 1000)
        //
        // setTimeout(()=> {
        //     if (this.state.incrementOnce){
        //         let newIncrement = this.state.incrementColors + 1
        //         if (newIncrement < 10){
        //             this.setState({incrementColors: newIncrement})
        //         } else {
        //             this.setState({incrementColors: 0})
        //         }
        //         this.setState({incrementOnce:false})
        //     } else {
        //         setTimeout(()=>this.setState({incrementOnce:true}), 1000)
        //     }
        // }, 1000)

        setTimeout(()=> {
                this.addHero()

                console.log(this.state)
            }, 1500)

        const heroes = this.state.heroes.map((hero) =>
            <SplashScreenHeroIcon
                key={hero.id}
                id={hero.id}
                removeHero={this.removeHero}
                type={hero.type}
                size={hero.size}
                styleClass={hero.styleClass}
                x={hero.x}
                y={hero.y}
                color={hero.color}
                width={this.props.width}
                height={this.props.height} />
    )


        return (
            <div className="Splash">

            <div className="heroTitleDiv">

            <h1 className="splashTitle">
              <span className="titleLetter1" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(1),this.state.y/this.incrementColorOnLetters(9))}}>I</span>
              <span className="titleLetter2" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(2),this.state.y/this.incrementColorOnLetters(8))}}>N</span>
              <span className="titleLetter3" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(3),this.state.y/this.incrementColorOnLetters(7))}}>C</span>
              <span className="titleLetter4" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(4),this.state.y/this.incrementColorOnLetters(6))}}>O</span>
              <span className="titleLetter5" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(5),this.state.y/this.incrementColorOnLetters(5))}}>M</span>
              <span className="titleLetter6" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(6),this.state.y/this.incrementColorOnLetters(4))}}>I</span>
              <span className="titleLetter7" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(7),this.state.y/this.incrementColorOnLetters(3))}}>N</span>
              <span className="titleLetter8" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(8),this.state.y/this.incrementColorOnLetters(2))}}>G</span>
              <span className="titleLetter9" style={{color:this.getRGB(this.state.x/this.incrementColorOnLetters(9),this.state.y/this.incrementColorOnLetters(1))}}>!</span>
            </h1>
            </div>

            <div className="heroImageDiv">
                <img className="heroImage" src='splashScreenImage.png' width='330' alt='' />
            </div>

            <button
            className="splashPlayButton"
            style={{
                left:this.props.width/2-100,
                color:this.getRGB(this.state.x/this.incrementColorOnLetters(4),this.state.y/this.incrementColorOnLetters(6)),
                borderColor:this.getRGB(this.state.x/this.incrementColorOnLetters(4),this.state.y/this.incrementColorOnLetters(6))}}
            >Play</button>

            {heroes}


            </div>

        )
    }
}
// 
// this.addCloud()
//
//
//     const clouds = this.state.clouds.map((cloud) =>
//         <SplashScreenCloudIcon
//             key={cloud.id}
//             id={cloud.id}
//             removeCloud={this.removeCloud}
//             type={cloud.type}
//             size={cloud.size}
//             styleClass={cloud.styleClass}
//             color={cloud.color}
//             width={this.props.width}
//             height={this.props.height} />
//     )
//
//     {clouds}



    //


//
// <h1 className="splashTitle">
//   <span className="titleLetter1" style={{color:this.getRGB((1400/this.props.width)/255/1,this.props.height/500*255/9)}}>I</span>
//   <span className="titleLetter2" style={{color:this.getRGB((1400/this.props.width)/255/2,this.props.height/500*255/8)}}>N</span>
//   <span className="titleLetter3" style={{color:this.getRGB((1400/this.props.width)/255/3,this.props.height/500*255/7)}}>C</span>
//   <span className="titleLetter4" style={{color:this.getRGB((1400/this.props.width)/255/4,this.props.height/500*255/6)}}>O</span>
//   <span className="titleLetter5" style={{color:this.getRGB((1400/this.props.width)/255/5,this.props.height/500*255/5)}}>M</span>
//   <span className="titleLetter6" style={{color:this.getRGB((1400/this.props.width)/255/6,this.props.height/500*255/4)}}>I</span>
//   <span className="titleLetter7" style={{color:this.getRGB((1400/this.props.width)/255/7,this.props.height/500*255/3)}}>N</span>
//   <span className="titleLetter8" style={{color:this.getRGB((1400/this.props.width)/255/8,this.props.height/500*255/2)}}>G</span>
//   <span className="titleLetter9" style={{color:this.getRGB((1400/this.props.width)/255/9,this.props.height/500*255/1)}}>!</span>
// </h1>

// <h1 className='splashTitle'>INCOMING!</h1>


export default SplashScreen
