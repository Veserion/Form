import ReactDOM from 'react-dom';

class notificationService {
    notify = (dialog: JSX.Element) => {
        ReactDOM.createPortal(dialog, document.getElementById('portal')!);

    };
}

export default new notificationService();
