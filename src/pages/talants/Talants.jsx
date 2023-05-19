import serach_icon from "../../assets/images/Freelancer/serach_inp.svg";
import "../Freelancer/Freelancer.scss";
import Cart from "../Freelancer/components/Cart";
// import Fillter from "../Freelancer/components/Fillter";
// import Filter from './components/filter/Filter';
import Round from "components/Round/Round";
import Filter from "pages/Company/components/filter/Filter";
import "./talants.scss";

const Talants = ({ ControlFilter }) => {
  return (
    <section className="freelancer">
      <div className="freelancer_container">
        <div className="freelancer_talants_container">
          <form className="freelancer_container_outline">
            <input
              type="text"
              placeholder="Title, keywords..."
              className="freelancer_container_outline_inp"
            />
            {ControlFilter ? <ControlFilter /> : ""}
            <button type="submit" className="freelancer_container_outline_btn">
              <img src={serach_icon} alt="search icon" />
            </button>
          </form>

          <Cart />

          <div className="freelancer_container_round">
            <Round />
          </div>
        </div>
        <Filter />
      </div>
    </section>
  );
};

export default Talants;
