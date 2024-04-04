import {config, useSpring} from "react-spring";

export const useAnimation = (open , config = {duration : 200}) => {

    const props = useSpring({
        from: {opacity: 0, transform: open ? 'translateX(-50px)' : 'translateX(0)'},
        to: {opacity: 1, transform: open ? 'translateX(0)' : 'translateX(-50px)'},
        config,
    });

    const centerFadeIn = useSpring({
        from: {opacity: 0, transform: open ? 'scale(0.3)' : 'scale(1)'},
        to: {opacity: 1, transform: open ? 'scale(1)' : 'scale(0.3)'},
        config,
    });

    return({
        props , centerFadeIn
    })
}
