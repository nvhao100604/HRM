import { Button, TextField } from "@mui/material"


export const SearchTool = () => {
  return (
    <div>
        <TextField size="medium" variant="standard" defaultValue={"Nhập từ khóa tìm kiếm..."}/>
        <Button variant="contained">Thêm</Button>
    </div>
  )
}
