import { AppBar, Button, Divider, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

import * as React from 'react';
import styled from 'styled-components';

type NavbarProps = {
  component: React.ComponentType;
}

const AppDrawer = styled(Drawer)`
  width: 200px;
`;

const Navbar: React.FC<NavbarProps> = ({ component: Component }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {
                        !isDrawerOpen && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setIsDrawerOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        )
                    }
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <AppDrawer anchor="left" open={isDrawerOpen} >
                <IconButton onClick={() => setIsDrawerOpen(false)}>
                    <ChevronLeftIcon />
                </IconButton>
                <Divider />
          some options we need to create
            </AppDrawer>
            <Component />
        </>
    );
};

export default Navbar;
