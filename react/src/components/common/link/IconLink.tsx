import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { theme } from '../../../styles/theme'

type IconLinkProp = {
    icon: JSX.Element,
    path: string,
    height?: number,
    width?: number
}

const StyledIconLink = styled(Link)({
    height: '100%',
    width: '100%',
    color: '#808080'
    // color: theme.palette.secondary.main
});


const IconLink = ({icon, path, height = 20, width = 20}: IconLinkProp) => {
    const StyledDiv = styled('div')({
        height: height,
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    });
    return (
        <StyledDiv>
            <StyledIconLink
                to={path}
                style={{height: height, width: width}}
            >
                {icon}
            </StyledIconLink>
        </StyledDiv>
    )
}

export default IconLink