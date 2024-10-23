import { Link, NavLink } from "react-router-dom";

import {
  TfiClipboard,
  TfiLayoutGrid2,
  TfiSettings,
  TfiTicket,
  TfiUser,
} from "react-icons/tfi";

import { Button } from "../ui/button";

export default function SidePanel() {
  return (
    <aside className=" sidepanel-child py-12 px-12 text-left flex flex-col justify-center">
      <h1 className="font-bold text-4xl text-center font-robotoCondensed underline underline-offset-4">
        <Link to="/dashboard">EventOne</Link>
      </h1>
      <div className=" flex flex-col gap-4 justify-left items-center">
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className="w-56 font-bold text-sm"
            >
              <TfiLayoutGrid2 />
              <span className="pl-2">Dashboard</span>
            </Button>
          )}
        </NavLink>
        <NavLink to="/event">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className="w-56 font-bold text-sm"
            >
              <TfiClipboard />
              <span className="pl-2">Event Management</span>
            </Button>
          )}
        </NavLink>
        <NavLink to="/ticketing">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className="w-56 font-bold text-sm"
            >
              <TfiTicket />
              <span className="pl-2">Ticketing</span>
            </Button>
          )}
        </NavLink>
        <NavLink to="/users">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className="w-56 font-bold text-sm"
            >
              <TfiUser />
              <span className="pl-2">Users</span>
            </Button>
          )}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className="w-56 font-bold text-sm"
            >
              <TfiSettings />
              <span className="pl-2">Settings</span>
            </Button>
          )}
        </NavLink>
      </div>
    </aside>
  );
}
