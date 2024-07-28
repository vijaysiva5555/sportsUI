import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    const drawerWidth = "240px"

    const menus = [
        {
            label: "clients",
            icon: <DashboardCustomizeRoundedIcon />,
            path: "/user/clients"
        },
        {
            label: "Category",
            icon: <CategoryRoundedIcon />,
            path: "/user/clients"
        },
        {
            label: "Products",
            icon: <PrecisionManufacturingRoundedIcon />,
            path: "/user/clients"
        },
    ]
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        SPORTS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menus.map((node, index) => (
                            <ListItem key={node.label} disablePadding onClick={() => navigate(node?.path || "#")}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {node.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={node.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}
