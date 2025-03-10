"use client";
import { useState, useRef, useEffect } from "react";
import styles from "../../Styles/Dropbox.module.css"; // Importamos los estilos

export default function DropBox({ options, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Selecciona una opción");
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
      if (onSelect) onSelect(option);
    };
  
    return (
      <div className={styles.dropbox} ref={dropdownRef}>
        <button className={styles.dropboxButton} onClick={() => setIsOpen(!isOpen)}>
          {selected} <span className={styles.arrow}>▲</span> {/* Cambié la flecha */}
        </button>
        {isOpen && (
          <ul className={styles.dropboxMenu}>
            {options.map((option, index) => (
              <li key={index} className={styles.dropboxItem} onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }