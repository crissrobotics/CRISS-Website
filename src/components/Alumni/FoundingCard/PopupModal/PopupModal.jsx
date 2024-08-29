import React, { useEffect, useRef } from 'react';
import styles from './popupmodal.module.css';

export default function PopupModal({ isOpen, onClose, profile1, para1, para2, para3, para4, para5 }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div ref={modalRef} className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
                <div className={styles.content}>
                    {/* <img src={profile1}></img> */}
                    {/* <h4>{name1}</h4> */}
                    <p>{para1}</p>
                    <p>{para2}</p>
                    <p>{para3}</p>
                    <p>{para4}</p>
                    <p id={styles.para5}>{para5}</p>
                </div>
            </div>
        </div>
    );
};

