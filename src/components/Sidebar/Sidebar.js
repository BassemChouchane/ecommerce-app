import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import Spec from "./Spec/Spec"; 
import "./Sidebar.css";

const Sidebar = ({ handleFilterChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleFilterChange={handleFilterChange} />
      <Spec handleFilterChange={handleFilterChange} /> 
      <Price handleFilterChange={handleFilterChange} />
      <Color handleFilterChange={handleFilterChange} />
    </section>
  );
};

export default Sidebar;