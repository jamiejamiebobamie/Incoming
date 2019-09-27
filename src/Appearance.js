import React from 'react';

import styled from 'styled-components'

// companies
// import {Amazon} from 'styled-icons/boxicons-logos'
// import {Apple} from 'styled-icons/boxicons-logos'
// import {FacebookSquare} from 'styled-icons/boxicons-logos'
// import {Instagram} from 'styled-icons/boxicons-logos'
// import {Snapchat} from 'styled-icons/boxicons-logos'
// import {Twitter} from 'styled-icons/boxicons-logos'

// heads
// import {Angry} from 'styled-icons/boxicons-regular'
// import {Bot} from 'styled-icons/boxicons-regular'
// import {Confused} from 'styled-icons/boxicons-regular'
// import {Cool} from 'styled-icons/boxicons-regular'
// import {HappyBeaming} from 'styled-icons/boxicons-regular'
// import {HappyHeartEyes} from 'styled-icons/boxicons-regular'
import {Question} from 'styled-icons/octicons'
//
// import {Mailchimp} from 'styled-icons/fa-brands'


import {UserCircle, Run, Handicap} from 'styled-icons/boxicons-regular'

import {Circle, LogInCircle} from 'styled-icons/boxicons-solid'

import {PlusCircle, Male, Female} from 'styled-icons/fa-solid'

import {AddCircle, PersonAdd} from 'styled-icons/material'


function Appearance(props){

    let type = undefined
    switch(props.type) {


        case 'UserCircle':
          type = (<UserCircle
                    className={props.styleClass}
                    style={{left:props.x,top:props.y}}
                    color={props.color}
                    size={props.size} />)
          break;
          case 'Run':
            type = (<Run
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'Circle':
            type = (<Circle
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'LogInCircle':
            type = (<LogInCircle
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size}  />)
            break;
          case 'PlusCircle':
            type = (<PlusCircle
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
            break;
          case 'Male':
            type = (<Male
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />
                    )
            break;
            case 'Female':
              type = (
                    <Female
                          className={props.styleClass}
                          style={{left:props.x,top:props.y}}
                          color={props.color}
                          size={props.size} />

                      )
              break;

              case 'Handicap':
                type = (
                      <Handicap
                            className={props.styleClass}
                            style={{left:props.x,top:props.y}}
                            color={props.color}
                            size={props.size} />

                        )
                break;
      case 'AddCircle':
        type = (<AddCircle
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
        break;
      case 'PersonAdd':
        type = (<PersonAdd
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size={props.size} />)
        break;
        // <button
        //     className='personButton'
        //         onClick={()=>props.removeAnimal(props.id)}
        //         >                          </button>



    //
    //     case 'HappyHeart':
    //       type = (<HappyHeartEyes
    //                 className={props.styleClass}
    //                 style={{left:props.x,top:props.y}}
    //                 color={props.color}
    //                 size={props.size} />)
    //       break;
    //       case 'Angry':
    //         type = (<Angry
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size}  />)
    //         break;
    //       case 'Confused':
    //         type = (<Confused
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size}  />)
    //         break;
    //       case 'Bot':
    //         type = (<Bot
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size}  />)
    //         break;
    //       case 'Cool':
    //         type = (<Cool
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size} />)
    //         break;
    //       case 'HappyBeaming':
    //         type = (<HappyBeaming
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size} />)
    //         break;
    //   case 'Facebook':
    //     type = (<FacebookSquare
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size} />)
    //     break;
    //   case 'Instagram':
    //     type = (<Instagram
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size} />)
    //     break;
    //   case 'Snapchat':
    //     type = (<Snapchat
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size}  />)
    //     break;
    //   case 'Twitter':
    //     type = (<Twitter
    //                     className={props.styleClass}
    //                     style={{left:props.x,top:props.y}}
    //                     color={props.color}
    //                     size={props.size} />)
    //     break;
    // case 'Question':
    //   type = (<Question
    //                   className='questionMark'
    //                   style={{left:props.x,top:props.y}}
    //                   color={props.color}
    //                   size='100' />)
    //     break;
    //   case 'Mailchimp':
    //             type = (<Mailchimp
    //                 className={props.styleClass}
    //                 style={{left:props.x,top:props.y}}
    //                 color={props.color}
    //                 size={props.size} />)
    //               break;
      default:
        type = (<Question
                        className={props.styleClass}
                        style={{left:props.x,top:props.y}}
                        color={props.color}
                        size='0' />)
    }
    return (
        type
    )
}

export default Appearance
