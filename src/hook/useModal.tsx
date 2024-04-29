import React, { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const ChangeModalState = () => {
    setOpen(!open);
  };
  
  return {
    open,
    ChangeModalState
  };
};

export default useModal;
