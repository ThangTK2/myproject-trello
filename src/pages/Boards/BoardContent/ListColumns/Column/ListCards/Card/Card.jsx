/* eslint-disable react/prop-types */
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function TrelloCard({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography sx={{}}>TK2- NguyenHuuThang</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/106802319_2561242120856530_6440393362921062800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=qu6tD5QndJMAX8hqkrT&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD9_UgzIxyFBPkZmQsK3lF2NdtthYhyOXWpg1kYYny6TQ&oe=64BCCA33"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography sx={{}}>TK2</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon/>}>69</Button>
        <Button size="small" startIcon={<CommentIcon/>}>22</Button>
        <Button size="small" startIcon={<AttachmentIcon/>}>11</Button>
      </CardActions>
    </Card>
  )
}

export default TrelloCard
