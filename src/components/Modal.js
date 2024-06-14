import React, { createContext, useState } from 'react';
import Europe from './Europe';
import Africa from './Africa';
import Asia from './Asia';
import America from './America';
import Ocenia from './Ocenia';

const ModalContext = createContext();

const Modal = () => {
  const [viewModal, setViewModal] = useState(false);

  return (
    <ModalContext.Provider value={{viewModal, setViewModal}}>
        <Europe />
        <Africa />
        <America />
        <Asia />
        <Ocenia />
    </ModalContext.Provider>
  );
}

export default Modal;
export {ModalContext};