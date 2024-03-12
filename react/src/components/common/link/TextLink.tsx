
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CommonButton from '../button/CommonButton'
import { theme } from '../../../styles/theme'

type NavTextLinkProp = {
    text: string;
    path: string;
    color?: string;
}

const NavTextLink = ({text, path, color = theme.palette.secondary.main}: NavTextLinkProp): JSX.Element  => {

  return (
    <>
        <Link 
          to={path}
        >
            <CommonButton
              variant='text'
              style={{
                outline: 'none',
                textAlign: 'left',
                width: '100%',
                height: '100%',
                fontWeight: 'bold',
                color: color
              }}
            >{ text }</CommonButton>
        </Link>
    </>
  )
}

export default NavTextLink