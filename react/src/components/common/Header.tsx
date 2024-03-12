import React, { useState } from 'react'
import TextLink from './link/TextLink';
import IconLink from './link/IconLink';
import CommonButton from './button/CommonButton';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@mui/material';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { theme } from '../../styles/theme';

const StyledDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

const StyledDialogTitle = styled(DialogTitle)({
  m: 0,
  px: 5,
  py: 2,
  width: 'fif-content',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 500
});

const StyledHeader = styled('header')({
  position: 'fixed',
  top: 0,
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0 20px',
  borderBottom: `2px solid ${theme.palette.primary.dark}`,
  boxSizing: 'border-box',
  backgroundColor: theme.palette.primary.light
});

const StyledNav = styled('nav')({
  width: '100%',
  display: 'flex',
  gap: 5,
  alignItems: 'center'
});

const HeaderLinkText = ({text, action}: {text: string, action: () => void}) => {
  return (
    <CommonButton
      variant='text'
      onClick={action}
      style={{
        color: theme.palette.secondary.main,
        fontWeight: 'bold'
      }}
    >{text}</CommonButton>
  )
}

const Header = (): JSX.Element => {
  const [projectOpen, setProjectOpen] = useState<boolean>(false);
  const handleProjectClose = () => {
    setProjectOpen(false);
  }
  const handleProjectOpen = () => {
    setProjectOpen(true);
  }

  const [recentWatchOpen, setRecentWatchOpen] = useState<boolean>(false);
  const handleRecentWatchClose = () => {
    setRecentWatchOpen(false);
  }
  const handleRecentWatchOpen = () => {
    setRecentWatchOpen(true);
  }

  return (
    <>
      <StyledHeader>
        <StyledNav>
          {/* to top */}
          <IconLink
            icon={<TimeToLeaveIcon sx={{color: theme.palette.secondary.main}}/>}
            path='/'
            width={25}
            height={25}
          />

          {/* dashboard */}
          <TextLink text='ダッシュボード' path='/dashboard'/>

          {/* project dialog */}
          <HeaderLinkText
            action={handleProjectOpen}
            text='プロジェクト'
          />
          <StyledDialog
            onClose={handleProjectClose}
            aria-labelledby='customized-dialog-title'
            open={projectOpen}
          >
            <StyledDialogTitle
              id="customized-dialog-title"
            >
              プロジェクトを選択
            </StyledDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <TextLink text='プロジェクト1' path='/'/>
              </Typography>
              <Typography gutterBottom>
                <TextLink text='プロジェクト2' path='/dashboard'/>
              </Typography>
              <Typography gutterBottom>
                <TextLink text='プロジェクト3' path='/dashboard'/>
              </Typography>
            </DialogContent>
          </StyledDialog>

          {/* recent watch dialog */}
          <HeaderLinkText
            text='最近見た項目'
            action={handleRecentWatchOpen}
          ></HeaderLinkText>
          <StyledDialog
            onClose={handleRecentWatchClose}
            aria-labelledby='customized-dialog-title'
            open={recentWatchOpen}
            fullWidth
          >
            <StyledDialogTitle
              id="customized-dialog-title"
            >
              最近見た項目
            </StyledDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <TextLink text='項目1' path='/'/>
              </Typography>
              <Typography gutterBottom>
                <TextLink text='項目2' path='/dashboard'/>
              </Typography>
              <Typography gutterBottom>
                <TextLink text='項目3' path='/dashboard'/>
              </Typography>
            </DialogContent>
          </StyledDialog>
        </StyledNav>

        <StyledNav style={{justifyContent: 'flex-end', gap: 10}}>
          <IconLink
            icon={<MoreHorizIcon/>}
            path='/'
            width={25}
            height={25}
          />
          <IconLink
            icon={<RemoveRedEyeIcon/>}
            path='/'
            width={25}
            height={25}
          />
          <IconLink
            icon={<NotificationsActiveIcon/>}
            path='/'
            width={25}
            height={25}
          />
          <IconLink
            icon={<HelpOutlineIcon/>}
            path='/'
            width={25}
            height={25}
          />
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Header