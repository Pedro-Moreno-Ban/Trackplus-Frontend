import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const mostrarError = (mensaje) => {
  toast.error(mensaje, {
    position: "top-right",
    autoClose: 5000,
  });
};