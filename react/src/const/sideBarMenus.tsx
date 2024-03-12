import HomeIcon from '@mui/icons-material/Home'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import TaskIcon from '@mui/icons-material/Task'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

export type SideBarMenuType = {
  key: string
  text: string
  path: string
  icon: JSX.Element
}

export const sideBarMenus: Array<SideBarMenuType> = [
  {
    key: 'home',
    text: 'ホーム',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    key: 'add_task',
    text: '課題の追加',
    path: '/',
    icon: <ControlPointIcon />,
  },
  {
    key: 'task',
    text: '課題',
    path: '/',
    icon: <TaskIcon />,
  },
  {
    key: 'board',
    text: 'ボード',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    key: 'chart',
    text: 'ガントチャート',
    path: '/',
    icon: <CalendarMonthIcon />,
  },
  {
    key: 'wiki',
    text: 'wiki',
    path: '/',
    icon: <DescriptionIcon />,
  },
  {
    key: 'project_setting',
    text: 'プロジェクト設定',
    path: '/',
    icon: <SettingsApplicationsIcon />,
  },
]
