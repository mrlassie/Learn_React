import DashboardIcon from '../assets/icons/dashboard.svg';
import TimerIcon from '../assets/icons/timer.svg';
import TaskIcon from '../assets/icons/task.svg'
import MovieIcon from '../assets/icons/projector.svg'

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: TimerIcon,
        path: '/countdown',
        title: 'Countdown',
    },
    {
        id: 3,
        icon: TaskIcon,
        path: '/todo',
        title: 'Todo',
    },
    {
        id: 4,
        icon: MovieIcon,
        path: '/movie',
        title: 'Movie',
    },
]

export default sidebar_menu;