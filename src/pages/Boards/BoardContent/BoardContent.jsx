/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sort'

import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  //yêu cầu chuột di chuyển 10px thì mới kích hoạt event(fix khi click đúp chuột vào sẽ không bị lỗi)
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  // nhấn giữ 250ms và tolerance( đại diện cho khoảng cách (tính bằng pixel)) của cảm ứng di chuyển 5px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } })

  // ưu tiên sử dụng kết hợp 2 loại sensor là mouse và touch để sử dụng trên mobile tránh bug
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumn, setOrderedColumn] = useState([])

  useEffect( () => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))//?.: dùng để thay cho if khi ta check điều kiện-> vd: if(board.columns){...}
  }, [board])

  const handleDragEnd = (e) => {
    // console.log('handleDragEnd: ', e);
    const { active, over } = e

    //kiểm tra nếu không tồn tại over (khi ta kéo linh tinh ra ngoài thì return luôn để tránh lỗi)
    if (!over) return
    // nếu vị trí sau khi kéo thả khác với vị trí ban đầu(active: vị trí bắt đầu kéo, over: vị trí sau khi thả)
    if (active.id !== over.id) {
      //lấy vị trí cũ từ thằng active
      const oldIndex = orderedColumn.findIndex(c => c._id === active.id)
      //lấy vị trí mới từ thằng active
      const newIndex = orderedColumn.findIndex(c => c._id === over.id)

      // dùng arrayMove của dnd-kit để sắp xếp lại mảng column ban đầu
      const dndOrderedColumns = arrayMove( orderedColumn, oldIndex, newIndex )
      // const dndOrderedColumnIds = dndOrderedColumns.map( c => c._id )

      // cập nhật lại state columns sau khi đã kéo thả
      setOrderedColumn(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#87CEFA'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumn}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
