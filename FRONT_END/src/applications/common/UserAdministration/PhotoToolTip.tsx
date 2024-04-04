import AvatarPhoto from "./AvatarPhoto";


const PhotoToolTip = ({
                         maticule,
                         size,
                         imageSize
                      }: { maticule: string | undefined, size: number, imageSize: 100|200|500|1000 }) => {
   return <AvatarPhoto matricule={maticule} size={size} imageSize={imageSize}
       avatarVariant={'rounded'}
   />
}

export default PhotoToolTip