import { AnimatedUserCard } from "./AnimatedUserCard";
import { useState } from "react";
import { ButtonBase, Stack } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { animated } from "react-spring";
import { useAnimation } from "../../../common/animations/useAnimation.ts";
import { DPersonnel } from "../../../../_generated_gql_/graphql.ts";

interface AuthorizedUserCardProps {
  personnel: DPersonnel;
  index: number;
  handleDelete: (userId) => void;
}

export const AuthorizedUserCard = ({
  personnel,
  index,
  handleDelete,
}: AuthorizedUserCardProps) => {
  const [hovered, setHovered] = useState(false);

  const { centerFadeIn } = useAnimation(hovered);

  return (
    <Stack
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      position={"relative"}
    >
      <AnimatedUserCard personnel={personnel} index={index}></AnimatedUserCard>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: 30,
        }}
        sx={{ border: hovered ? "solid 2px red" : null }}
      >
        {hovered && (
          <>
            <Stack flex={1}></Stack>
            <animated.div style={centerFadeIn}>
              <ButtonBase onClick={() => handleDelete(personnel.matricule)}>
                <Delete
                  style={{
                    width: 70,
                    height: 70,
                    color: "#bd2f2f",
                    opacity: 0.6,
                  }}
                ></Delete>
              </ButtonBase>
            </animated.div>
          </>
        )}
      </Stack>
    </Stack>
  );
};
