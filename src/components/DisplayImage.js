import React from 'react';
import ImageSlider from './ImageSlider';

export default function DisplayImage(props) {
    console.log(props.images.length)
    console.log(props.images)
    return(<div>
       {(Array.isArray(props.images) && props.images.length>1)?
            <ImageSlider images={props.images} autoPlay={props.autoPlay} height={props.height} width={props.width} />
        :
            <img src={props.images} height={props.height} width={props.width} style={props.style}/>
       }
             
</div>)}