/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Column from './Column/Column';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  // SortableContext yêu cầu items là 1 mảng dạng ['id-1', 'id-2'] chứ không phải [{id: 'id-1'}, {id: 'id-2'}]
  // Nếu không đúng thì vẫn kéo thả được nhưng không có animation
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map(column => <Column key={column._id} column={column} />)}  {/* ?.: dùng để thay cho if khi ta check điều kiện-> vd: if(columns.map){...} */}

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
    </SortableContext>
  )
}

export default ListColumns
