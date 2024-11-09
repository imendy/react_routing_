import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <nav style={{
          width: '200px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: '100%'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Sidebar</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/blogs" style={{ color: '#fff', textDecoration: 'none' }}>Blog List</Link>
            </li>
          </ul>
        </nav>

        

        {/* Main Content */}
        <main style={{ flex: 1, padding: '20px', backgroundColor: '#f4f4f4' }}>
          <Outlet /> {/* Nested content will be rendered here */}
        </main>
      </div>




      {/* Footer */}
      <footer style={{
        width: '100%',
        padding: '15px',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
}

export default Layout;
