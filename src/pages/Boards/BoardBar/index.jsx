import Box from '@mui/material/Box';
import { Avatar, AvatarGroup, Button, Chip, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


const MENU_STYLE = {
  color: 'primary.main', bgcolor: 'transparent', border: 'none', paddingX: '5px', '& .MuiSvgIcon-root': { color:'primary.main' }, '&:hover': { bgcolor: 'primary.50' }
}

function BoarBar() {
  return (
    <Box px={1} sx={{ width: '100%', height: (theme) => theme.trello.boardBarHeight, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, overflowX: 'auto', borderTop: '1px solid #ccc' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />} label="NguyenHuuThang - TK2" clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />} label="Public/Private" clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />} label="Add to Google Drive" clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />} label="Tự động hóa" clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />} label="Bộ lọc" clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon/>}>Mời</Button>
        <AvatarGroup
          max={3}
          sx={{
            '& .MuiAvatar-root': {
              width: 34, height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='TK2'>
            <Avatar alt="TK2" src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/346830052_1111798053110034_3344074448717637961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k-FcrRtlI_YAX9K0W2S&_nc_ht=scontent.fhan14-4.fna&oh=00_AfC5WgPe2oUltvpQYYPrwORo-1k9KUWdBLOyRaxLPuAOSg&oe=64999FE6" />
          </Tooltip>
          <Tooltip title='TK2'>
            <Avatar alt="TK2" src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/106802319_2561242120856530_6440393362921062800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=qu6tD5QndJMAX8hqkrT&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD9_UgzIxyFBPkZmQsK3lF2NdtthYhyOXWpg1kYYny6TQ&oe=64BCCA33" />
          </Tooltip>
          <Tooltip title='TK2'>
            <Avatar alt="TK2" src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/346830052_1111798053110034_3344074448717637961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k-FcrRtlI_YAX9K0W2S&_nc_ht=scontent.fhan14-4.fna&oh=00_AfC5WgPe2oUltvpQYYPrwORo-1k9KUWdBLOyRaxLPuAOSg&oe=64999FE6" />
          </Tooltip>
          <Tooltip title='TK2'>
            <Avatar alt="TK2" src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/106802319_2561242120856530_6440393362921062800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=qu6tD5QndJMAX8hqkrT&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD9_UgzIxyFBPkZmQsK3lF2NdtthYhyOXWpg1kYYny6TQ&oe=64BCCA33" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoarBar
