import React from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Structure from '../structure/structure';
import CalendarPage from '../calendar-page/calendar-page';
import Diagrams from '../diagrams/diagrams';
import appStyles from './app.module.css'

export default function App() {
    return (
        <div className={appStyles.mainSection}>
            <Router>
                <Sidebar />
                <Routes>
                    <Route exact path="/home" element={<Diagrams />}/>
                    <Route path="/calendar" element={<CalendarPage />}/>
                    <Route path="/dashboard" element={<Structure />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/add" element={<Contacts />}/>
                </Routes>
            </Router>
        </div>
    )
}


  function Contacts() {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }