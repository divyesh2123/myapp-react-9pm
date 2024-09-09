import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

export default function HForm(props) {
  return (
    <div>
        <Dialog open={props.open} onClose={props.closeDialor}>
        <DialogTitle>Add Employee</DialogTitle>
            <DialogContent>

                <TextField></TextField>

                <TextField></TextField>

            </DialogContent>
            <DialogActions>

                <Button onClick={props.closeDialor}>Cancell</Button>
                <Button>SaveInfo</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
