
import { Container } from '@mui/material';
import AppBar from '../../components/AppBar';
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }} > {/* 100vh: khung hình trên máy */}
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
