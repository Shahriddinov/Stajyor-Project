import React , { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/images/Freelancer/filter_arrow.svg'
import './Fillter.scss';
import { MultiSelect } from '@mantine/core';
import { useTranslation } from "react-i18next";

// import "bootstrap/dist/css/bootstrap.min.css"

const Fillter = () => {

  const { t } = useTranslation()

  const [data, setData] = useState([
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
  ]);

  const data1 = [
  { value: 'uz', label: 'Uzbekistan' },
  { value: 'ru', label: 'Russia' },
  { value: 'us', label: 'America' }
];
  

  return (
      <div>
            <form method='POST' className='filter'>
                  <h2 className="filter_title">{t("filter")}</h2>
                  <h3 className="filter_text"> {t("payment")} </h3>
                  <div className="filter_from">
                        <div className="filter_from_left">
                              <h3>{t("from")}</h3>
                              <input type="number" placeholder='10$' min="0"  />
                        </div>
                        <div className="filter_from_right">
                              <h3>{t("to")}</h3>
                              <input type="number" placeholder='20$' min="0"  />
                        </div>
                  </div>
                  <h3 className="filter_text"> {t("duration")} </h3>
                  <input type="number" className="filter_job_success" max={100} min={0} placeholder={`${t("more_than_1")}`} />
                  <h3 className="filter_text">{t("required_level")}</h3>

                  <div className="filter_from">
                        <div className="filter_from_left">
                              <h3>{t("from")}</h3>
                              <div className='filter_from_main' >
                                    <select>
                                    <option value="junior">Junior</option>
                                    <option value="middle">Middle</option>
                                    <option value="senior">Senior</option>
                                    <option value="team_lead">Team Lead</option>
                                    </select>
                                    <Arrow />
                              </div>
                        </div>

                        <div className="filter_from_right">
                              <h3>{t("to")}</h3>
                              <div className='filter_from_main'>
                                    <select>
                                          <option value="junior">Junior</option>
                                          <option value="middle">Middle</option>
                                          <option value="senior">Senior</option>
                                          <option value="team_lead">Team Lead</option>
                                    </select>
                                    <Arrow />
                              </div>
                        </div>
                  </div>

                  <div className="filter_verify">
                        <input type="checkbox" />
                        <h3 className='filter_verify_text' style={{ 'fontSize':'16px' }} >{t("verified")}</h3>
                  </div>

                  <h3 className="filter_text" >{t("region")}</h3>   
                        <MultiSelect
                        data={data1}
                        placeholder={`${t("select_region")}`}
                  />

                  <h3 className="filter_text">{t("complated_jobs_minimum")}</h3>
                  
                  <input type="number" className="filter_job_success" placeholder='10' />

                  <h3 className='filter_text' >{t("required_skills")}</h3>

                  <MultiSelect  
                        data={data}
                        placeholder={`${t("select_items")}`}
                        searchable
                        creatable
                        getCreateLabel={(query) => `+ Create ${query}`}
                        onCreate={(query) => {
                        const item = { value: query, label: query };
                        setData((current) => [...current, item]);
                        return item;
                        }}
                  />

                  <div className='apply_filter'>
                        <button >{t("apply_filters")}</button>
                  </div>
            </form>
      </div>
  )
}

export default Fillter;



