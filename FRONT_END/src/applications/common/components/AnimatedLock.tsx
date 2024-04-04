import {animated, useSpring} from "react-spring";
import ASSETS from "../../../resources/ASSETS";
import {useEffect, useState} from "react";


export const AnimatedLock = () => {

    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true)
    }, []);

    const centerFadeIn = useSpring({
        from: {opacity: 1, transform: animate ? 'scale(0.3)' : 'scale(1)'},
        to: {opacity: 1, transform: animate ? 'scale(1)' : 'scale(0)'},
        config :  {
            mass: 0.8,
            tension: 400,
            friction: 20,
            velocity: 0.05
        },
    });



    return (
        <animated.div style={centerFadeIn}>
            <img src={ASSETS.lock} style={{width: 200, height: 200}} alt={'lock'}/>
        </animated.div>
    )
}
