import { Navigate, Route, Routes } from "react-router-dom";
import { LazyPage2, LazyPage3 } from "../pages";
import { ShoppingPage } from "../component-patterns/pages/ShoppingPage";
export const LazyLayout = () => {
  return (
    <div>
      {/* <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="/">Shopping</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul> */}
      <Routes>
        <Route path="/" element={<ShoppingPage />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
