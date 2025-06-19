import { Button } from '@mui/material'

export const Employee = ({name} : {name: string}) => {
  return (
    <Button style={{ justifyContent: 'start'}} fullWidth={true}>{name}</Button>
  )
}
