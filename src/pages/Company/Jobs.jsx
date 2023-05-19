import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import '../talants/talants.scss';
import classes from './Jobs.module.scss';
import Job from './components/cards/Job';
import Filter from './components/filter/Filter';

const Jobs = props => {
  const [clientJobs, setClientJobs] = useState('best');
  const len = useSelector(state => state.lenguage.lenguage);
  const { pathname } = useLocation();

  const [activeControl, setActiveControl] = useState('best-matches');
  const controlsData = [
    { id: 1, type: 'best-matches', label: 'Best matches' },
    { id: 2, type: 'recent', label: 'Recent' },
    { id: 3, type: 'saved', label: 'Saved' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={classes.jobAdContainer}>
        <div className={classes.jobAd}>
          <div className={classes.search}>
            <input type='text' placeholder='Title, keywords...' />
            <button>
              <HiOutlineSearch size={27} />
            </button>
          </div>
          <div className='talants__constrol'>
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
            <span></span>
          </div>
          <div className={classes.companyClientJobs}>
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
            <Job
              handleStateChange={props.handleStateChange}
              initialState={props.initialState}
            />
          </div>
        </div>
        <Filter />
      </div>
    </>
  );
};

export default Jobs;
