import Box from '@mui/material/Box';
import Column from './Column/Column';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

function ListColumns() {
  return (
    <div>
      <Box sx={{
        bgcolor: 'inherit', //inherit: kế thừa background của thằng ngoài cùng
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        <Column />
        <Column />
        <Column />

        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff7d'
        }}>
          <Button startIcon={<AddBoxIcon/>} sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}>
            Thêm cột mới
          </Button>
        </Box>

      </Box>
    </div>
  )
}

export default ListColumns
