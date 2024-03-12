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
    path: '/project',
    icon: <HomeIcon />,
  },
  {
    key: 'add_task',
    text: '課題の追加',
    path: '/createTask',
    icon: <ControlPointIcon />,
  },
  {
    key: 'task',
    text: '課題',
    path: '/tasks',
    icon: <TaskIcon />,
  },
  {
    key: 'board',
    text: 'ボード',
    path: '/board',
    icon: <DashboardIcon />,
  },
  {
    key: 'chart',
    text: 'ガントチャート',
    path: '/ganttchart',
    icon: <CalendarMonthIcon />,
  },
  {
    key: 'wiki',
    text: 'wiki',
    path: '/wiki',
    icon: <DescriptionIcon />,
  },
  {
    key: 'project_setting',
    text: 'プロジェクト設定',
    path: '/projectSetting',
    icon: <SettingsApplicationsIcon />,
  },
]
