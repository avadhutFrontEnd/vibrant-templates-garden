
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  title: string;
  path: string;
}

const navItems: NavItem[] = [
  { title: 'Lessons', path: '/lessons' },
  { title: 'Assessments', path: '/assessments' },
  { title: 'Reports', path: '/reports' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-48 min-h-screen bg-white border-r border-gray-200">
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `py-3 px-4 border-b border-gray-100 hover:bg-inpods-gray transition-colors ${
                isActive ? 'bg-blue-100 text-inpods-blue font-medium' : 'text-gray-800'
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
