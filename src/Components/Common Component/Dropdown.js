import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/Icon/caret-down-fill.svg";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  margin-top: 4px;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = ({ label, items, ArrowStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {label}
        <img src={ArrowIcon} alt="Arrow Icon" style={ArrowStyle} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
