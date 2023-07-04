/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sort'

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id') //?.: dùng để thay cho if khi ta check điều kiện-> vd: if(board.columns){...}

  return (
    <Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#87CEFA'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
      <ListColumns columns={orderedColumn}/>
    </Box>
  )
}

export default BoardContent
