import React, { useState, useRef, useEffect } from 'react';
import './alumnidropmenu.scss'; 

const AlumniDropMenu = ({ selectedBatch, handleSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (value) => {
        handleSelect(value);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleClick = (value) => {
        toggleDropdown();
        handleOptionClick(value);
    };

    const options = [
        { value: 'founders', label: 'Founders' },
        { value: '2020', label: 'Batch of 2020' },
        { value: '2021', label: 'Batch of 2021' },
        { value: '2022', label: 'Batch of 2022' }
    ];

    return (
        <div className="alumniDropMenu" ref={selectRef}>
            <div
                className={`select-selected ${isOpen ? 'select-arrow-active' : ''}`}
                onClick={toggleDropdown}
            >
                {options.find(option => option.value === selectedBatch)?.label || 'Select Batch'}
            </div>
            {isOpen && (
                <div className="select-items">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`select-batch ${selectedBatch === option.value ? 'selected' : ''}`}
                            onClick={() => handleClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AlumniDropMenu;
