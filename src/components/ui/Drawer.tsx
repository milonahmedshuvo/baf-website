import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Drawer } from 'antd';

type DrawerProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean,
    showDrawer?: () => void
}


const DrawerComponent = ({open, setOpen, showDrawer}:DrawerProps) => {
 
  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Drawer
        title=""
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
        style={{}}
      >

        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        
      </Drawer>
    </>
  );
};

export default DrawerComponent;