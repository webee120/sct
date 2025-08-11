import { Outlet, NavLink } from "react-router-dom";

const Layout1 =()=> {
  return(
    <>
      <main>
        <ul>
          <li>
            <NavLink
            to="/workthrough"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            workthrough
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/login"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            login
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/report"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            report
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/sensor"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            sensor
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/pattern"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            pattern
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/alert"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            alert
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/mypage"   // 소문자로
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            >
            mypage
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </main>
    </>
  )
};

export default Layout1;