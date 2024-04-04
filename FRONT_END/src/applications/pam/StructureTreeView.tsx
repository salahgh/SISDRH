import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {useQuery} from "@apollo/client";
import {FindRStructureSnByIdDocument, FindRStructureSnByIdQuery} from "../../_generated_gql_/graphql";
import {Button, Chip, CircularProgress, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import { SyntheticEvent, useEffect, useState} from "react";
import _lodash from 'lodash'
import {FilterAltOff, Search, UnfoldLessDouble, UnfoldMoreDouble} from "@mui/icons-material";
import {Theme} from "@mui/material/styles";
import {useSelector} from "react-redux";
import {selectFilteringFields, setFilteringFields} from "../../redux/features/pam/pamSlice";
import {useAppDispatch} from "../../redux/hooks";
import { FilteringFieldsInterface } from "./mainDataGrid/types.ts";
import { NetWorkErrorComponent } from "../common/components/errors/NetWorkErrorComponent.tsx";
import { TreeItem, TreeView } from "@mui/x-tree-view";

function getStructureBgColor(id: string | null | undefined, theme: Theme) {
    switch (id) {
        case  '1' :
            return theme?.palette?.primary.light
        case  '2' :
            return theme?.palette?.secondary.light
        case '3' :
            return theme?.palette?.action.focus
        case '4' :
            return theme?.palette?.action.hover
    }
}

export const StructureTreeView = () => {

    const {data, loading, error, refetch} = useQuery(FindRStructureSnByIdDocument, {variables: {id: '0000'}})
    const [searchToken, setSearchToken] = useState<string | null>('');

    const filteringFields: FilteringFieldsInterface = useSelector(selectFilteringFields)

    function getRegion(findRStructureSnById) {
        const isDRSN = findRStructureSnById?.typeStructureSn?.id == 2
        if (isDRSN) return findRStructureSnById?.runite?.regionMilitaire?.libAbrRegionAr
        else return ''
        return undefined;
    }

    function renderItem(findRStructureSnById: FindRStructureSnByIdQuery["findRStructureSnById"]) {

        if (findRStructureSnById?.fils?.length == 0) return (
            <TreeItem
                key={findRStructureSnById?.id}
                sx={{
                    backgroundColor: getStructureBgColor(findRStructureSnById?.typeStructureSn?.id)
                }}
                nodeId={findRStructureSnById?.id}
                label={
                    <Stack direction={'row'} key={findRStructureSnById?.id}>
                        <Typography> {findRStructureSnById?.id?.substring(2, 4) + ' ' + findRStructureSnById?.runite?.libUniteeAr} </Typography>
                    </Stack>
                }
            />
        )


        return (
            <TreeItem
                nodeId={findRStructureSnById?.id}
                label={<Typography
                    textAlign={'left'}
                    fontWeight={'bold'}>
                    {findRStructureSnById?.runite?.libUniteeAr + getRegion(findRStructureSnById)}
                </Typography>}
                sx={{
                    bgcolor: getStructureBgColor(findRStructureSnById?.typeStructureSn?.id)
                }}
                key={findRStructureSnById?.id}
            >
                {
                    findRStructureSnById?.fils?.map((item) => renderItem(item))
                }
            </TreeItem>
        )

    }

    const [expanded, setExpanded] = useState<FindRStructureSnByIdQuery["findRStructureSnById"][]>([]);
    const [selected, setSelected] = useState<FindRStructureSnByIdQuery["findRStructureSnById"][]>([]);

    const handleSearchTokenChange = (newValue) => {
        setSearchToken(newValue)
        const foundNodes: FindRStructureSnByIdQuery["findRStructureSnById"][]
            = allNodes.filter((node) => node?.id?.substring(2, 4).search(newValue) != -1 || node?.runite?.libUniteeAr?.search(newValue) != -1)
        const pereIds = foundNodes.map((node) => node?.pere?.id)
        const perIds2 = allNodes.filter((node) => pereIds.includes(node?.id)).map((node) => node?.pere?.id)
        const peres = [...pereIds, ...perIds2, '0000']
        const peresNodes = allNodes?.filter((node) => peres.includes(node?.id))
        setExpanded(peresNodes)
        setSelected(foundNodes)
    }

    const handleToggle = (event: SyntheticEvent, nodeIds: string[]) => {
        setExpanded(allNodes.filter((node) => nodeIds.includes(node?.id)));
    };

    const handleSelect = (event: SyntheticEvent, nodeIds: string[]) => {
        setSelected(allNodes.filter((node) => nodeIds.includes(node?.id)));
    };

    const handleExpandClick = () => {
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? allNodes : [],
        );
    };

    const handleSelectClick = () => {
        setSelected((oldSelected) =>
            oldSelected.length === 0 ? allNodes : [],
        );
    };

    const handlCsnsClick = () => {
        // setSelected((oldSelected) => allNodes.filter((node) => node.substring(2,4) == '00'))
        setExpanded((oldSelected) => allNodes.filter((node) => node?.id?.substring(1, 4) == '000'))
    }

    const [allNodes, setAllNodes] = useState<FindRStructureSnByIdQuery["findRStructureSnById"][]>([]);

    function getItemIds(findRStructureSnById: FindRStructureSnByIdQuery["findRStructureSnById"]): FindRStructureSnByIdQuery["findRStructureSnById"][] {

        const result: FindRStructureSnByIdQuery["findRStructureSnById"][] = [];
        result.push(findRStructureSnById);

        if (findRStructureSnById?.fils?.length > 0) {
            findRStructureSnById?.fils?.forEach((child) => {
                const childResultArray: FindRStructureSnByIdQuery["findRStructureSnById"][] = getItemIds(child);
                result.push(...childResultArray)
            })
        }

        return result

    }

    useEffect(() => {

        if (data) {
            setAllNodes((old) => getItemIds(data?.findRStructureSnById))
            setExpanded(allNodes.filter((node) => node?.id?.substring(1, 4) == '000'))
        }
    }, [data]);

    const dispatch = useAppDispatch()

    const debounced_ = _lodash.debounce(() => {
        if (selected.length == 1) {
            dispatch(setFilteringFields({...filteringFields, idStructure: selected[0]?.id}))
        } else {
            dispatch(setFilteringFields({...filteringFields, idStructure: null}))
        }
    }, 500)

    useEffect(() => {
        debounced_()
        return () => {
        };
    }, [selected])

    // useEffect(() => {
    //    if(filteringFields.idStructure == null){
    //       setSelected([])
    //    }
    //    return () => {
    //
    //    };
    // }, [JSON.stringify(filteringFields)]);


    return (
        <Stack
            width={'100%'}
            height={'100%'}
            paddingRight={1}
            // justifyContent={'center'}
            alignItems={'center'}
        >
            <Stack
                direction={'row'}
                spacing={1} sx={{mb: 1}}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <TextField
                    fullWidth={true}
                    size={'small'}
                    value={searchToken}
                    onChange={(e) => handleSearchTokenChange(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position={"end"}>
                                <Search/>
                            </InputAdornment>
                        )
                    }}
                >
                </TextField>
                <Button
                    startIcon={expanded.length === 0 ? <UnfoldMoreDouble/> : <UnfoldLessDouble/>}
                    fullWidth
                    size={'small'}
                    variant={'outlined'}
                    color={'warning'}
                    onClick={handleExpandClick}
                >
                    {expanded.length === 0 ? 'dérouler' : 'réduire '}
                </Button>
                <Button
                    size={'small'}
                    variant={'outlined'}
                    onClick={(handlCsnsClick)}
                    disabled={expanded == allNodes.filter((node) => node?.id?.substring(1, 4) == '000')}
                >
                    CSN
                </Button>
            </Stack>
            <Chip
                label={selected.length === 1 && selected.at(0).runite?.libUniteeAr}
                style={{
                    visibility: (selected.length === 1 && filteringFields.idStructure != null) ? 'visible' : 'hidden',
                    margin: 2
                }}
                deleteIcon={<FilterAltOff/>}
                onDelete={() => setSelected([])}
            />
            {
                loading && !error && <CircularProgress></CircularProgress>
            }
            {
                !loading && error && <NetWorkErrorComponent/>
            }
            {
                data && <Stack width={'100%'} overflow={'auto'}>
                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon/>}
                        defaultExpandIcon={<ChevronRightIcon/>}
                        expanded={expanded.map((node) => node?.id)}
                        selected={selected.map((node) => node?.id)}
                        onNodeToggle={handleToggle}
                        onNodeSelect={handleSelect}
                    >
                        {renderItem(data?.findRStructureSnById)}
                    </TreeView>
                </Stack>
            }
        </Stack>
    )
}
