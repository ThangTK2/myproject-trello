

import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Container } from '@mui/material';


function ModeSelect() {
  const { mode, setMode } = useColorScheme(); //useColorScheme: gồm dark, light, system
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>  {/**gap mặc định của mui là 8px */}
            <LightModeIcon fontSize='small'/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}



function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }} > {/* 100vh: khung hình trên máy */}
      <Box sx={{ backgroundColor: 'primary.light', width: '100%', height: (theme) => theme.trello.appBarHeight, display: 'flex', alignItems: 'center' }}>
        <ModeSelect/>
      </Box>
      <Box sx={{ backgroundColor: 'primary.dark', width: '100%', height: (theme) => theme.trello.boardBarHeight, display: 'flex', alignItems: 'center' }}>
        Board Bar
      </Box>
      <Box sx={{ backgroundColor: 'primary.main', width: '100%', height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`, display: 'flex', alignItems: 'center' }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
