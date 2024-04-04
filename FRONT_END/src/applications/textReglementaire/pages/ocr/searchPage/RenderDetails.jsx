import {ListItemButton, ListItemText, Typography} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {blueGrey} from "@mui/material/colors";
import {PictureAsPdfOutlined} from "@mui/icons-material";
import {substr} from "stylis";
import {useAppDispatch} from "../../../../../redux/hooks";
import {
    selectSelectedResultLine, setSelectedInDocumentLineid, setSelectedInDocumentPageIndex,
    setSelectedResultLine
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import {useSelector} from "react-redux";

const RenderDetails = ({data}) => {

    const selectedResultLine = useSelector(selectSelectedResultLine)
    const dispatch = useAppDispatch();

    function hundleSelection(item) {

        dispatch(setSelectedResultLine(
            {
                selctedFileId: item._id,
                selectedPageIndex: item._source.id.split('_')[1],
                selectedLineId: item._source.id
            }
        ))
        dispatch(setSelectedInDocumentLineid(item._source.id))
        dispatch(setSelectedInDocumentPageIndex(item._source.id.split('_')[1]))
    }

    return (
        data?.searchHits?.map(
            (hit, index) => {
                return (
                    <ListItemButton
                        // onClick={() => hundleSelection(item)}
                        // key={item._id + item._source.id}
                        // selected={selectedResultLine.selectedLineId ? item._source.id === selectedResultLine.selectedLineId : false}
                        // sx={{bgcolor: item._id === selectedResultLine.selctedFileId ? blueGrey["100"] : null}}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: blueGrey[100], color: blueGrey[500]}} variant={'rounded'}>
                                <PictureAsPdfOutlined/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography fontWeight={'bold'}
                                                 variant={'body1'}>{hit.content.id}</Typography>}
                            secondary={substr(hit.content.id, 0, 8)}
                        />
                    </ListItemButton>
                )
            }
        )
    )
}

export default RenderDetails;