import AvatarEditor from 'react-avatar-editor'
import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {Button, InputAdornment, Slider, Stack, TextField} from "@mui/material";
import {CachedOutlined, OpenWithRounded} from "@mui/icons-material";
import {CroppingRectangle} from "../../rh/PhotoEditing";

export const MyAvatarEditor = (
   {
      photo,
      serverPreview,
      croppingRectangle,
      setCroppingRectangle ,
   }: {
      photo: string,
      serverPreview?: string,
      croppingRectangle: CroppingRectangle | null,
      setCroppingRectangle: Dispatch<SetStateAction<CroppingRectangle | null>> ,
   }) => {

   const [transform, setTransform] = useState({
      scale: 1,
      rotate: 0
   });

   const [inputValues, setInputValues] = useState({scale: '', rotate: ''});
   const [error, setError] = useState({scale: '', rotate: ''});

   const handleScaleChange = (newScale: string) => {
      setInputValues((old) => ({...old, scale: newScale}))
      setTransform((old) => ({...old, scale: parseFloat(newScale)}))
   }

   const handleRotateChange = (newRotate: string) => {
      setInputValues((old) => ({...old, rotate: newRotate}))
      setTransform((old) => ({...old, rotate: parseFloat(newRotate)}))
   }

   const synchInput = () => {
      setInputValues({scale: transform.scale.toString(), rotate: transform.rotate.toString()})
      setCroppingRectangle((old) => ({...old , rotation : transform.rotate}))
   }

   const handleWheelEvent = (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault()
      let coefficient = e.shiftKey ? 1 : 5;
      if (e.shiftKey) {
         coefficient = e.altKey ? 0.02 : 1
      } else {
         coefficient = e.altKey ? 0.1 : 5
      }
      if (!e.altKey) {
         if (e.deltaY > 0) {
            setTransform((old) => ({...old, rotate: old.rotate + coefficient}))
            synchInput()
         } else {
            setTransform((old) => ({...old, rotate: old.rotate - coefficient}))
            synchInput()
         }
      } else {
         if (e.deltaY > 0) {
            setTransform((old) => ({...old, scale: old.scale + coefficient}))
            synchInput()
         } else {
            setTransform((old) => ({...old, scale: old.scale - coefficient}))
            synchInput()
         }
      }
   }

   const handleSliderChange = (event: Event, value: number | number[], activeThumb: number) => {
      console.log(value)
      setTransform((old) => ({...old, scale: 0.5 + (value as number / 100)}))
      synchInput()
   }

   const ref = useRef(null);

   const [result, setResult] = useState<string | undefined>();

   const handle = () => {
      if (ref.current) {
         // @ts-ignore
         setCroppingRectangle(ref.current.getCroppingRect())
         setCroppingRectangle((old) => ({...old , rotation : transform.rotate}))
      }
      // @ts-ignore
      const canvas = ref.current.getImage().toDataURL();
      let imageURL;
      fetch(canvas)
         .then(res => res.blob())
         .then(blob => {
            imageURL = URL.createObjectURL(blob)
            setResult(imageURL)
         });
   }

   // @ts-ignore
   return (
      <Stack
         spacing={1}
         direction={'row'}
         padding={1}
      >
         <Stack
            width={'40%'}
         >
            <Stack
               direction={'row'}
               spacing={1}
               padding={1}
               alignItems={'center'}
            >
               <Slider
                  value={(transform.scale - 0.5) * 100}
                  onChange={(e, value, activeThumb) => handleSliderChange(e, value, activeThumb)}
                  // onVolumeChange={(e) => handleSliderChange(e)}
               ></Slider>
               <TextField
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <OpenWithRounded/>
                        </InputAdornment>
                     ),
                  }}
                  label={'scale'}
                  value={inputValues.scale}
                  onChange={(e) => handleScaleChange(e.currentTarget.value)}
                  error={error.scale.length != 0}
                  helperText={error.scale}
               ></TextField>
               <TextField
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <CachedOutlined/>
                        </InputAdornment>
                     ),
                  }}
                  label={'rotate'}
                  value={inputValues.rotate}
                  onChange={(e) => handleRotateChange(e.currentTarget.value)}
               ></TextField>
            </Stack>

            <Stack
               onWheel={(e) => handleWheelEvent(e)}
               justifyContent={'center'}
               alignItems={'center'}
            >
               <AvatarEditor
                  ref={ref}
                  image={photo}
                  width={500}
                  height={500}
                  border={50}
                  color={[100, 100, 100, 0.9]} // RGBA
                  scale={transform.scale}
                  rotate={transform.rotate}
               />
            </Stack>
         </Stack>
         <Button onClick={handle}>preview</Button>
         <Stack
            width={'45%'}
            height={'500'}
            direction={'row'}
            spacing={1}
         >
            <img
               style={{
                  objectFit: 'cover',
                  border: 'solid 2px black',
                  borderRadius: 30,
                  height: 500,
                  width: 500
               }}
               src={result}
               alt={'alt'}
            />
            {
               serverPreview?.length > 0 && <img
                    style={{
                       objectFit: 'cover',
                       border: 'solid 2px black',
                       borderRadius: 30,
                       height: 500,
                       width: 500
                    }}
                    src={serverPreview}
                    alt={'alt'}
                />
            }
         </Stack>
      </Stack>

   )

}
