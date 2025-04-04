import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaTh, FaThLarge } from 'react-icons/fa'; 

const CategoryHeader = ({ title }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 p-4">

      <div className="d-flex align-items-center">
        <h2 className="mb-0">{title}</h2>
        <div className="btn-group ms-4">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-custom-components" style={{ backgroundColor: '#221f1f' }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>


      <div className="d-flex">
        <FaTh className="icons" style={{ fontSize: '1.5em', color: '#f5f5f1', marginRight: '10px' }} />
        <FaThLarge className="icons" style={{ fontSize: '1.5em', color: '#f5f5f1' }} />
      </div>
    </div>
  );
};

export default CategoryHeader;
