import React, { useState } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import {
    Box,
    Drawer as MuiDrawer,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import {
    Menu,
    ChevronLeft
} from '@mui/icons-material'
import AppRoute from '../../routes/AppRoute'
import { SideBarMenuType, sideBarMenus } from '../../const/sideBarMenus'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `64px`,
    [theme.breakpoints.up('sm')]: {
        width: `64px`
    }
});

const DrawerHeader = styled('div')(({theme}: {theme: Theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open' 
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    '& .MuiPaper-root': {
        marginTop: '50px'
    }
  }),
);

const StyledLiteItemText = styled(ListItemText)({
    '& .MuiTypography-root': {
        fontSize: '12px'
    }
})

const MainWithSideBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Drawer variant='permanent' open={open}>
                    <DrawerHeader sx={{display: 'flex', justifyContent: open ? 'right' : 'center'}}>
                        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                            {open ? <ChevronLeft/> : <Menu/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {sideBarMenus.map((menu: SideBarMenuType) => (
                            <Link to={menu.path} style={{textDecoration: 'none'}}>
                                <ListItem key={menu.text} disablePadding sx={{display: 'block'}}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {menu.icon}
                                        </ListItemIcon>
                                        <StyledLiteItemText
                                            primary={menu.text}
                                            sx={{display: open ? 'block' : 'none', fontSize: '10px'}}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
                <Box component='main' sx={{flexGrow: 1, p: 3}}>
                    <DrawerHeader/>
                    <AppRoute/>
                </Box>
            </Box>
        </>
    )
}

export default MainWithSideBar