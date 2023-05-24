import './Header.scss';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import header_logo from '../../../assets/images/Freelancer/Freelancer_logo.svg';
import header_logo2 from '../../../assets/images/header/logo2.svg';
import Dropdown from './components/Dropdown';
import LangDrop from './components/LangDrop';

const Header = () => {
  const len = useSelector(state => state.lenguage.lenguage);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <header className='header'>
      <div className='header_container'>
        <Link to={`/${len}/jobs`}>
          {pathname.slice(4) === 'contact' || pathname.slice(4) === 'about' ? (
            <img
              src={header_logo2}
              className='header_container_bg_logo'
              alt=''
            />
          ) : (
            <img
              src={header_logo}
              className='header_container_bg_logo'
              alt=''
            />
          )}
        </Link>

        <div className='header_wrapper'>
          <ul
            className={`${
              len === 'uz' ? 'uzLen' : 'enLen'
            } header_container_list `}
          >
            <li className='header_container_list_item'>
              <NavLink
                to={`/${len}/jobs`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {t('jobs')}
              </NavLink>
            </li>
            <li className='header_container_list_item'>
              <NavLink
                activeclassname='active'
                to={`/${len}/talants`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {t('talants')}
              </NavLink>
            </li>

            <li className='header_container_list_item'>
              <NavLink
                activeclassname='active'
                to={`/${len}/contacts`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {t('contact')}
              </NavLink>
            </li>

            <li className='header_container_list_item'>
              <NavLink
                activeclassname='active'
                to={`/${len}/about`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {t('about')}
              </NavLink>
            </li>
            <span className='header_container_list_span'></span>
          </ul>
          <Dropdown />
          <LangDrop />
        </div>
      </div>
    </header>
  );
};

export default Header;
