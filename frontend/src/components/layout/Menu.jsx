import * as React from 'react';
import adress from "../../data/adress"
import menuID from "../../recoil/atom"
import { MyTab } from "../../styles/menu"
import { useEffect, memo } from "react"
import { useHistory } from "react-router"
import { useRecoilState } from "recoil"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/Box"


const drawerWidth = 240;

const Menu = () => {
  const history = useHistory()
  const [value, setValue] = useRecoilState(menuID)

  const handleChange = (event, newValue) => {
    if (value) {
      setValue(newValue)
    }
  }

  useEffect(() => {
    history.push(adress[value])
    console.log(adress[value])
  }, [value])

  useEffect(() => {
    console.log("menuchange")
  })

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value === "signup" ? false : value}
        onChange={handleChange}
        sx={{ borderRight: 0, borderColor: "divider", width: "100%" }}
        scrollButtons={false}
      >
        <MyTab value="home" label="홈" />
        <MyTab value="intro" label="서비스 소개" />
        <MyTab value="analysis" label="배달 데이터 분석" />
        <MyTab value="board" label="게시판" />
      </Tabs>
    </Box>
  )
}


export default memo(Menu)
