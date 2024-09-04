import React, { useState, useRef, useEffect } from 'react';
import './dropmenu.css'; 

const DropMenu = ({ selectedteam, handleSelect }) => {
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
        { value: 'board', label: 'The Board' },
        { value: 'management', label: 'Management' },
        { value: 'software', label: 'Software' },
        { value: 'mechanical', label: 'Mechanical' },
        { value: 'electrical', label: 'Electrical' },
        { value: 'payload', label: 'PnE' },
        { value: 'faculty', label: 'Faculty Advisor' }
    ];

    return (
        <div className="dropMenu" ref={selectRef}>
            <div
                className={`select-selected ${isOpen ? 'select-arrow-active' : ''}`}
                onClick={toggleDropdown}
            >
                {options.find(option => option.value === selectedteam)?.label || 'Select Team'}
            </div>
            {isOpen && (
                <div className="select-items">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`select-team ${selectedteam === option.value ? 'selected' : ''}`}
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

export default DropMenu;
