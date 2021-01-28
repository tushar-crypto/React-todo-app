import { Button, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';
import styles from "./Todo.module.css";

function Todo(props) {
  return (
    
     <List className = {styles.todo}>
       <ListItem>
         <ListItemAvatar>
          
         </ListItemAvatar>
         <ListItemText primary={props.todo.todo} secondary='DummyDeadline'></ListItemText>
       </ListItem>
       <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={event=>db.collection('todos').doc(props.todo.id).delete()}
      >
        Delete
      </Button>
   

     </List>
        
      
   
  );
}

export default Todo;
 