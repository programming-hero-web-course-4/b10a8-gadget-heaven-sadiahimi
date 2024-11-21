import React from 'react';

const Sidebar = ({ categories, setCategory }) => {
    return (
        <div className="sidebar">
            <ul>
                {categories.map((cat, index) => (
                    <li key={index} onClick={() => setCategory(cat)}>
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
