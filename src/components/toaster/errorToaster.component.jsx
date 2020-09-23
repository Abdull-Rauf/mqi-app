import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./toaster.style.scss";

const Toaster = ({ type, message, autoClose = 10000 }) => {
  useEffect(() => {
    toast.info(message, {
      className: `${type}__message`,
    });
  }, [message, type]);
  return (
    <ToastContainer
      position={"top-right"}
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      closeButton={false}
    />
  );
};
export { Toaster };
