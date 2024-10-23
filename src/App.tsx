import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles/styles.css";

import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import Ticketing from "./pages/Ticketing";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./app/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="event" element={<Event />} />
            <Route path="ticketing" element={<Ticketing />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
