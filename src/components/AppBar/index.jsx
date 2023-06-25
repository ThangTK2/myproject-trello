import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import { Badge, Button, SvgIcon, TextField, Tooltip, Typography } from '@mui/material';
import Workspaces from './Menus/Workspaces';
import Recents from './Menus/Recents';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function AppBar() {
  return (
    <Box px={1} sx={{ width: '100%', height: (theme) => theme.trello.appBarHeight, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, overflowX: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>TK2 - Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces/>
          <Recents/>
          <Starred/>
          <Templates/>
          <Button variant="outlined" startIcon={<LibraryAddIcon/>}>Tạo mới</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField id="outlined-search" label="Tìm kiếm..." type="search" size='small' sx={{ minWidth: 120 }} />
        <ModeSelect/>
        <Tooltip title="Thông báo">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip> {/*Tooltip trong Mui: giống như hover*/}
        <Tooltip title="Thông tin">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar
