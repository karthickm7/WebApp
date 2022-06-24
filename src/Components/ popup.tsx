/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getuser, removeuser } from '../State /Action/Action';
import { useDispatch } from 'react-redux';

interface PopupProps {
  shows: boolean;
  onHides: () => void;
  datas: string | number;
}

const Popup = ({ shows, onHides, datas }: PopupProps) => {
  const dispatch: any = useDispatch();
  const handledelete = () => {
    console.log('popupdelete');
    dispatch(removeuser(datas)), dispatch(getuser());
  };

  return (
    <>
      <Modal show={shows} onHide={onHides}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure to delete the user with {datas} ID ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHides}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handledelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Popup;
