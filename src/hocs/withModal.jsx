import React, { useState, useCallback } from 'react';
import Modal from '../components/Modal'


const withModalProps = (Component, configurations) => {
    return function (props) {
        const { show, useModalContent } = configurations || {}
        const [visibility, setVisibility] = useState(show ?? false);

        const { onShowModal, onCloseModal, ...restProps} = props;
        
        const onClose = useCallback(() => {
            setVisibility(false);
            onCloseModal && onCloseModal();
        }, [onCloseModal])

        const onShow = useCallback(() => {
            setVisibility(true);
            onShowModal && onShowModal();
        }, [onShowModal])

        const modalContent = useModalContent && useModalContent({ onClose });

        return (<>
                    <Modal show={visibility} onClose={onClose}>
                        {modalContent ?? ''}
                    </Modal>
                    <Component {...restProps} onShow={onShow} />
            </>)
    }
}


export default withModalProps