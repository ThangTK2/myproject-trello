
import { Container } from '@mui/material';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data';

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }} > {/* 100vh: khung hình trên máy */}
      <AppBar />
      <BoardBar board={mockData?.board} /> {/* ?.: dùng để thay cho if khi ta check điều kiện-> vd: if(mockData.board){...} */}
      <BoardContent board={mockData?.board} />
    </Container>
  )
}

export default Board
