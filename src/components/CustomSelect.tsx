"use client";

import React, { useState, useRef, useEffect } from 'react';

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
}

const CustomSelect = ({ id, value, onChange, options, placeholder = "" }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Find currently selected option
  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sync z-index with parent when open
  useEffect(() => {
    if (!wrapperRef.current) return;
    const parentBox = wrapperRef.current.closest('.field-box, .action-group, .form-group') as HTMLElement;
    if (parentBox) {
      if (isOpen) {
        parentBox.style.zIndex = '50';
      } else {
        parentBox.style.zIndex = '';
      }
    }
  }, [isOpen]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e: React.MouseEvent, opt: Option) => {
    e.preventDefault();
    e.stopPropagation();
    if (opt.disabled) return;
    onChange(opt.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-wrapper" ref={wrapperRef}>
      {/* Hidden native select for accessibility/forms if needed */}
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} style={{ display: 'none' }}>
        {placeholder && <option value="" disabled hidden>{placeholder}</option>}
        {options.map((opt, i) => (
          <option key={i} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
        ))}
      </select>

      <div 
        className={`custom-select-trigger ${isOpen ? 'active' : ''}`} 
        onClick={toggleDropdown}
      >
        <span>{displayText}</span>
      </div>

      <div className={`custom-options-container ${isOpen ? 'active' : ''}`}>
        {options.filter(opt => !opt.disabled).map((opt, i) => (
          <div
            key={i}
            className={`custom-option ${value === opt.value ? 'selected' : ''}`}
            onClick={(e) => handleOptionClick(e, opt)}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
