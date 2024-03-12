import HomeIcon from '@mui/icons-material/Home'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import TaskIcon from '@mui/icons-material/Task'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

export type SideBarMenuType = {
  text: string
  path: string
  icon: JSX.Element
}

export const sideBarMenus: Array<SideBarMenuType> = [
  {
    text: 'ホーム',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    text: '課題の追加',
    path: '/',
    icon: <ControlPointIcon />,
  },
  {
    text: '課題',
    path: '/',
    icon: <TaskIcon />,
  },
  {
    text: 'ボード',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    text: 'ガントチャート',
    path: '/',
    icon: <CalendarMonthIcon />,
  },
  {
    text: 'wiki',
    path: '/',
    icon: <DescriptionIcon />,
  },
  {
    text: 'プロジェクト設定',
    path: '/',
    icon: <SettingsApplicationsIcon />,
  },
]
