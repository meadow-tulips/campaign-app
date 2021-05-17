import React, { useRef, useEffect, useCallback } from 'react';
import './index.css';


const Modal = ({ children, show, onClose = () => {} }) => {
    const modalRef = useRef();

    const onOutsideClick = useCallback((event) => {
        if(event && event.target) {
            if(event.target === modalRef.current)
                onClose();
        }
    }, [onClose])
    
    useEffect(() => {
        modalRef.current?.focus();
        document.addEventListener('click', onOutsideClick)
        return () => {
            document.removeEventListener('click', onOutsideClick);
        }
    }, [onOutsideClick])

    if(!show) return null;
    return (<section className="modal" ref={modalRef}>
                <article className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    {children}
                </article>
    </section>)
}

export default Modal;