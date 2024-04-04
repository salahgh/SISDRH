import * as React from "react";
import {Card, CardActionArea} from "@mui/material";
import Menu from "@mui/material/Menu";
import {selectLoggedInUser} from "../../../redux/features/auth/userSlice";
import {useSelector} from "react-redux";
import UserCard from "./UserCard";
import AvatarPhoto from "./AvatarPhoto";


const UserAvatarWithMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const user = useSelector(selectLoggedInUser)

    return (
        <>
            <Card>
                <CardActionArea
                    onClick={handleClick}
                >
                    <AvatarPhoto
                        matricule={user.matricule}
                        imageSize={2500}
                        size={55}
                        borderRadius={3}
                        avatarVariant={'rounded'}
                    />
                </CardActionArea>
            </Card>


            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <UserCard></UserCard>
            </Menu>
        </>
    );
}

export default UserAvatarWithMenu;