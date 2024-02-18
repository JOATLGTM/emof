import React, { useState } from 'react';
import Modal from 'react-modal';
import cat from '../images/cat.jpg'

const VideoModal = ({ imageUrl, videoUrl }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <img src={cat} alt="Thumbnail" onClick={openModal} style={{ cursor: 'pointer' }} />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
            >
                <button onClick={closeModal}>Close</button>
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </Modal>
        </div>
    );
};

export default VideoModal;
