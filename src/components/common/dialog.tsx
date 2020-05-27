import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props: any) {
  const { open, onCancel, onConfirm, title, detail } = props

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {detail}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onConfirm} color="primary">
            Ok
          </Button>
          {onCancel ?           <Button onClick={onCancel} color="primary">
                      Cancel
                    </Button> : null}

        </DialogActions>
      </Dialog>
    </div>
  );
}
