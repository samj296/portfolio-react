import {useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function TemporaryDrawer({setPage}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{paddingTop:2, paddingBottom:2}}>
        {['Home', 'Projects', 'Experience'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=> setPage(text.toLowerCase())} >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
        <Button 
            onClick={toggleDrawer(true)}
            variant="contained"
            color="success"
            sx={{
            position: "fixed",
            top: 0,
            zIndex:2000,
            transform: "translateX(-50%)"
            }}>
                My other Pages
        </Button>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};