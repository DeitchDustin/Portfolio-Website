import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModalProvider } from './context/modal-context';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ModalProvider><App /></ModalProvider>);