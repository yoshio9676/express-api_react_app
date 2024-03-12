import React, { useEffect, useState } from 'react'
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
import { theme as myTheme } from '../../styles/theme'

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
    height: '50px'
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
        marginTop: '50px',
        border: 'none'
    }
  }),
);

const StyledLiteItemText = styled(ListItemText)({
    '& .MuiTypography-root': {
        fontSize: '12px'
    }
});

const MainContentBox = styled(Box)({
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 'calc(100vh - 50px)',
    overflow: 'scroll'
})

const MainWithSideBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

    const [currentPage, setCurrentPage] = useState<string>(sideBarMenus[0].key);

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
                        {sideBarMenus.map((menu: SideBarMenuType, index: number) => (
                            <Link
                                to={menu.path}
                                style={{textDecoration: 'none'}}
                                onClick={() => setCurrentPage(menu.key)}
                                key={menu.key + index}
                            >
                                <ListItem
                                    disablePadding
                                    sx={{
                                        display: 'block',
                                        backgroundColor: currentPage === menu.key ? '#f0f0f0' : 'inherit'
                                    }}
                                >
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
                <Box component='main' sx={{flexGrow: 1}}>
                    <DrawerHeader sx={{padding: 0}}/>
                    <MainContentBox>
                        <AppRoute/>
                    </MainContentBox>
                </Box>
            </Box>
        </>
    )
}

export default MainWithSideBar