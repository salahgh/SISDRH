import {useSpring , animated} from "react-spring";
import UserCard from "../../../common/UserAdministration/UserCard.tsx";

export const AnimatedUserCard = ({user , index}) => {

    const props = useSpring({
        from: {opacity: 0, transform: 'translateX(-100px)'},
        to: {opacity: 1, transform: 'translateX(0)'},
        config: {duration: 200},
        delay: (index + 1) * 80
    });

    return(
        <animated.div style={props}>
            <UserCard
                grade={user?.personnel?.grade?.grade}
                matricule={user?.personnel?.matricule}
                pnoma={user?.personnel?.pnoma}
                noma={user?.personnel?.noma}
                arme={user?.personnel?.arme?.id}
                size={100}
            ></UserCard>
        </animated.div>
    )
}
