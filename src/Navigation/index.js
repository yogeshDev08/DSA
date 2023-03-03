// import { useEffect } from "react"
import { Home, Users } from "react-feather"

function AdminRouting() {
  const data = [
    {
      id: "home",
      title: "Admin",
      icon: <Home size={20} />,
      navLink: "/home"
    },
    {
      id: "userList",
      title: "Users",
      icon: <Users size={20} />,
      navLink: "/users"
    }
  ]
  return data
}

export default AdminRouting