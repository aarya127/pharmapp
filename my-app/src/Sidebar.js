import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <div className="menu-item" onClick={() => toggleDropdown('section1')}>
        Section 1
        <div className={`dropdown ${openDropdown === 'section1' ? 'show' : ''}`}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      </div>

      <div className="menu-item" onClick={() => toggleDropdown('section2')}>
        Section 2
        <div className={`dropdown ${openDropdown === 'section2' ? 'show' : ''}`}>
          <p>Option A</p>
          <p>Option B</p>
          <p>Option C</p>
        </div>
      </div>

      <div className="menu-item" onClick={() => toggleDropdown('section3')}>
        Section 3
        <div className={`dropdown ${openDropdown === 'section3' ? 'show' : ''}`}>
          <p>Option X</p>
          <p>Option Y</p>
          <p>Option Z</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
