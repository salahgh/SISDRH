import { useSpring, animated } from "react-spring";
import UserCard from "../../../common/UserAdministration/UserCard.tsx";
import { DPersonnelDto } from "../../../../_generated_gql_/graphql.ts";

export const AnimatedUserCard = ({
  personnel,
  index,
}: {
  personnel: DPersonnelDto;
  index: number;
}) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 200 },
    delay: (index + 1) * 80,
  });

  return (
    <animated.div style={props}>
      <UserCard personnel={personnel} size={100}></UserCard>
    </animated.div>
  );
};
