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
  searchable?: boolean;
}

const CustomSelect = ({ id, value, onChange, options, placeholder = "", searchable = false }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    if (!isOpen) setSearchTerm("");
  }, [isOpen]);

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

  const filteredOptions = searchable 
    ? options.filter(opt => !opt.disabled && opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options.filter(opt => !opt.disabled);

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
        {searchable ? (
          <input
            type="text"
            value={isOpen ? searchTerm : (value ? displayText : "")}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            placeholder={isOpen && value ? displayText : placeholder}
            onClick={(e) => {
              e.stopPropagation();
              if (!isOpen) setIsOpen(true);
            }}
            style={{
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              background: 'transparent',
              width: '100%',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              cursor: 'text',
              padding: 0,
              margin: 0
            }}
          />
        ) : (
          <span>{displayText}</span>
        )}
      </div>

      <div className={`custom-options-container ${isOpen ? 'active' : ''}`} style={{ overscrollBehavior: 'contain', maxHeight: '250px', overflowY: 'auto' }}>
        {/* Search input moved to trigger */}
        {filteredOptions.map((opt) => (
          <div
            key={opt.value}
            className={`custom-option ${value === opt.value ? 'selected' : ''}`}
            onPointerDown={(e) => {
              e.preventDefault();
              handleOptionClick(e, opt);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              handleOptionClick(e, opt);
            }}
            onClick={(e) => handleOptionClick(e, opt)}
          >
            {opt.label}
          </div>
        ))}
        {searchable && filteredOptions.length === 0 && (
            <div style={{ padding: '10px', textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>No options found</div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
