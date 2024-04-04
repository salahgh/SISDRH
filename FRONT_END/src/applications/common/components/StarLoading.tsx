import {ASSETS_GRADES} from "../../../resources/ASSETS_GRADES";
import {ButtonBase, Stack} from "@mui/material";
import {AnimationConfig, useSpring , animated} from "react-spring";
import {useState} from "react";


export const StarLoading = () => {

   const config: Partial<AnimationConfig> = {
      tension: 300,
      bounce: 8,
   }

   const [selected, setSelected] = useState(false);

   const {scale , rotation} = useSpring({
      from: {scale: 1, rotation : 0},
      to: {scale: selected ? 0.5 : 1 , rotation : selected ? 180 : 0},
      config,
   });

   // @ts-ignore
   return (
      <ButtonBase onClick={() => setSelected((old) => !old)}>
         <animated.div
            style={{
               transform: scale.interpolate((i) => `scale(${i})`)
            }}
         >
            <img
               src={ASSETS_GRADES.etoile}
               style={{
                  width: 100,
                  objectFit: 'contain',
                  transform: scale.interpolate((i) => `scale(${i}) rotate(${rotation})`)
               }}
            />
         </animated.div>
      </ButtonBase>
   )
}