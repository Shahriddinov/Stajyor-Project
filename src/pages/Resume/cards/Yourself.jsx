// import downIcon from "../../../assets/images/Resume/down.png";
import { MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
  getPositionsSkillsWithId,
  hobbies,
  languages,
} from 'reduxToolkit/extraReducers';
import {
  getHobbies,
  getSkills,
} from 'reduxToolkit/frilanserCardSlice/frilanserCardSlice';
import { activeDoteAction } from 'reduxToolkit/resumeControlsSlice/resumeControls';
import { yourSelfStep } from '../../../reduxToolkit/frilanserCardSlice/frilanserCardSlice';
import './Yourself.scss';
import './styles.scss';

function Yourself() {
  const dispatch = useDispatch();

  const {
    positionGetLoading,
    positionList,
    hobbiesList,
    loading,
    loadingSkills,
    skillsData,
    HobbysGetLoading,
  } = useSelector(state => state.resume);
  const [skil, setSkil] = useState(1);
  const [hobbiesorg, setHobbiesorg] = useState([]);
  const [orgSkills, setOrgSkills] = useState('');
  const [position, setPosition] = useState('');
  const [downSkills, setDownSkills] = useState([]);
  const [datas, setDatas] = useState({
    description: '',
    positionId: '',
    freelancerHobbies: [],
    freelancerSkills: [],
    newHobbies: [],
    newSkills: [],
  });

  const [selectedPos, setSelectedPos] = useState([]);
  const [data, setData] = useState({
    bio: '',
    position: [{ id: 1, label: 'name' }],
    DateOfBirthString: '',
  });

  useEffect(() => {
    dispatch(getPositionsSkillsWithId(skil));
    dispatch(hobbies());
  }, [skil]);

  if (positionGetLoading && loading) {
    return <b>Loading...</b>;
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(languages());
    dispatch(getSkills(downSkills));
    dispatch(getHobbies(hobbiesorg));
    dispatch(yourSelfStep(data));
    localStorage.setItem('yourself', JSON.stringify(data));
    localStorage.setItem('hobbies', JSON.stringify(hobbiesorg));
    localStorage.setItem('skills', JSON.stringify(downSkills));
    localStorage.setItem(
      'activDoteAction',
      JSON.stringify([
        { id: 4, label: 'Language' },
        { id: 4, type: 'lenguage' },
      ]),
    );
    dispatch(
      activeDoteAction([
        { id: 4, label: 'Language' },
        { id: 4, type: 'lenguage' },
      ]),
    );
  };

  const prevPage = event => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 2, label: 'Address' },
        { id: 2, type: 'country' },
      ]),
    );
  };
  const PositionChange = pos => {
    setSkil(pos.id);
    console.log(pos);
    setPosition(pos.label);
    setData({ ...data, position: pos.label });
  };

  const Xobbys = hobbiesList.map(item => ({
    value: item.content,
    label: item.content,
  }));
  const options = skillsData.map(item => ({
    value: item.content,
    label: item.content,
  }));
  const changeSkill = ({ value, type }) => {
    if (type === 'skills') {
      setDatas(prev => ({
        ...prev,
        freelancerSkills: value.filter(el => !isNaN(el * 1)).map(el => el * 1),
        newSkills: value.filter(el => isNaN(el * 1)),
      }));
    } else {
      setDatas(prev => ({
        ...prev,
        freelancerHobbies: value.filter(el => !isNaN(el * 1)).map(el => el * 1),
        newHobbies: value.filter(el => isNaN(el * 1)),
      }));
    }
    if (type === 'hobbies') {
      setHobbiesorg(value);
    }
  };
  const handleSelectChange = skill => {
    setDownSkills(skill);
  };
  useEffect(() => {
    var yourself = JSON.parse(localStorage.getItem('yourself'));
    if (yourself) {
      setData(yourself);
    }
    var hobbies = JSON.parse(localStorage.getItem('hobbies'));
    if (hobbies) {
      setHobbiesorg(hobbies);
    }
    var dotActive = JSON.parse(localStorage.getItem('activDoteAction'));
    if (dotActive) {
      dispatch(activeDoteAction(dotActive));
    }
    var skillData = JSON.parse(localStorage.getItem('skills'));
    if (skillData) {
      setDownSkills(skillData);
    }
  }, []);

  console.log(data);
  console.log(datas);

  return (
    <div className='yourselfCard'>
      <h2 className='yourselfCard_title'>Write little about yourself</h2>
      <form method='post' className='yourselfCard_form' onSubmit={handleSubmit}>
        <div className='yourselfCard_form_wrapper'>
          <div className='yourselfCard_form_wrapper_top'>
            <label className='yourselfCard_label'>Select your Positions*</label>
            <Select
              value={data.position}
              // required
              classNamePrefix='mySelect'
              options={positionList.map(el => ({ id: el.id, label: el.name }))}
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  position: e.value,
                }))
              }
              placeholder='Positions*'
            />
          </div>

          <div className='yourselfCard_form_wrapper_bottom'>
            <label className='yourselfCard_label'>Date of birth*</label>
            <input
              type='date'
              // required
              value={
                data.DateOfBirthString
                  ? data.DateOfBirthString.split(':').join('-')
                  : ''
              }
              placeholder='DD/MM/YYYY'
              data-date-format='YYYY:MMMM:DD'
              onChange={e =>
                setData(prev => ({
                  ...prev,
                  DateOfBirthString: e.target.value.split('-').join(':'),
                }))
              }
            />
          </div>
        </div>
        <div>
          <label className='yourselfCard_label'>Write down your skills*</label>
          <MultiSelect
            data={options}
            onChange={handleSelectChange}
            value={downSkills}
            searchable
            creatable
            getCreateLabel={query => `+ Create ${query}`}
            onCreate={query => {
              const item = { value: query, label: query };
              setOrgSkills(current => [...current, item]);
              return item;
            }}
          />

          <label className='yourselfCard_label'>Hobbies*</label>
          <br />
          <MultiSelect
            className='yourself_select'
            required
            value={hobbiesorg}
            data={Xobbys}
            placeholder='Select hobbie or create a new'
            nothingFound='Nothing found'
            searchable
            creatable
            getCreateLabel={query => `+ Create ${query}`}
            onCreate={query => {
              const item = { value: query, label: query.toLowerCase() };
              setHobbiesorg(current => [...current, item]);
              return item;
            }}
            onChange={value => changeSkill({ value, type: 'hobbies' })}
          />

          <input
            className='yourselfCard_textarea'
            type='text'
            value={data.bio}
            placeholder='Describe yourself to buyers'
            onChange={event =>
              setData(prev => ({ ...prev, bio: event.target.value }))
            }
          />
        </div>
        <div className='yourselfCard_btn'>
          <button className='backButton' type='button' onClick={prevPage}>
            Back
          </button>
          <button className='nextButton'>Next</button>
        </div>
      </form>
    </div>
  );
}

export default Yourself;
