
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CommonButton from '../button/CommonButton'

type NavTextLinkProp = {
    text: string;
    path: string;
}

const NavTextLink = ({text, path}: NavTextLinkProp): JSX.Element  => {

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
                height: '100%'
              }}
            >{ text }</CommonButton>
        </Link>
    </>
  )
}

export default NavTextLink