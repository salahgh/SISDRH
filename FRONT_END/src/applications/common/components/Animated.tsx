import {animated, useSpring} from 'react-spring'
import {cloneElement, useEffect, useState} from "react";

export const Animated = ({children , delay , config, index = 1 ,  ...other}) => {

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true)
    }, []);

    const config_ = config ? config : {
        mass: 0.8,
        tension: 400,
        friction: 20,
        velocity: 0.05
    }

    const props = useSpring({
        from: {opacity: 0, transform: animate ? `scale(1.5) translateX(${index * 140}px)` : 'scale(1) translateX(0px)'},
        to: {opacity: 1, transform: 'scale(1) translateX(0px)'},
        config : config_ ,
    });


    return(
        <animated.div style={props} >
            {cloneElement(children, other)}
        </animated.div>
    )
}
