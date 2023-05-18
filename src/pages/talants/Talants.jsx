import { useEffect, useState } from 'react';
import serach_icon from '../../assets/images/Freelancer/serach_inp.svg';
import '../Freelancer/Freelancer.scss';
import Cart from '../Freelancer/components/Cart';
// import Fillter from "../Freelancer/components/Fillter";
// import Filter from './components/filter/Filter';
import Filter from 'pages/Company/components/filter/Filter';
import './talants.scss';
import Round from 'components/Round/Round';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'lodash';
import { getAllFreelancers } from 'reduxToolkit/extraReducers';

const Talants = () => {
  const { AllFreelancerData, loading } = useSelector(state => state.resume);
  const [activeControl, setActiveControl] = useState('best-matches');
  const [searched, setSearched] = useState('')
  const [searchedData, setSearchedData] = useState([])

 const dispatch = useDispatch()
 const search = AllFreelancerData?.filter(item=>item.firstName.toLowerCase().includes(searched.toLowerCase()))
  useEffect(()=>{
    if(!searched){
      setSearchedData(AllFreelancerData)
    }else{
      setSearchedData(search)
    }
  },[AllFreelancerData, searched])


  console.log(searchedData)
  useEffect(() => {
    if (!loading) {
      dispatch(getAllFreelancers())
    }
  }, []);
  const controlsData = [
    { id: 1, type: 'best-matches', label: 'Best matches' },
    { id: 2, type: 'recent', label: 'Recent' },
    { id: 3, type: 'saved', label: 'Saved' },
  ];
  return (
    <section className='freelancer'>
      <div className='freelancer_container'>
        <div className='freelancer_talants_container'>
          <form className='freelancer_container_outline'>
            <input
              type='text'
              placeholder='Title, keywords'
              className='freelancer_container_outline_inp'
              // onChange={(e)=> handleChange(e)}
              onChange={e=>setSearched(e.target.value)}
            />
            <button type='submit' className='freelancer_container_outline_btn'>
              <img src={serach_icon} alt='search icon' />
            </button>
          </form>

          <ul className='talants__control_list'>
            {controlsData.map(el => (
              <li
                key={el.id}
                className={`talants__control_item ${
                  el.type === activeControl
                    ? 'talants__control_item-active'
                    : null
                }`}
                onClick={() => setActiveControl(el.type)}
              >
                {el.label}
              </li>
            ))}
          </ul>

          <Cart AllFreelancerData={searchedData}/>

          <div className='freelancer_container_round'>
                    <Round />
                </div>
        </div>
        <Filter />
      </div>
    </section>
  );
};

export default Talants;
