import React from 'react'
import Box from '@mui/material/Box';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';


function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Tài khoản">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 0 }}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}
            src='https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/106802319_2561242120856530_6440393362921062800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=qu6tD5QndJMAX8hqkrT&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD9_UgzIxyFBPkZmQsK3lF2NdtthYhyOXWpg1kYYny6TQ&oe=64BCCA33'
            alt='Lỗi hiển thị'
          >TK2</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-recent"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-recent'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: '28px', height: '28px', mr: 1 }}/> Hồ sơ và hiển thị
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: '28px', height: '28px', mr: 1 }} /> Tài khoản
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Chuyển đổi tài khoản
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cầi đặt
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
