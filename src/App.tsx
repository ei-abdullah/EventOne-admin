import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./styles/styles.css";

import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import Ticketing from "./pages/Ticketing";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="event" element={<Event />} />
          <Route path="ticketing" element={<Ticketing />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
