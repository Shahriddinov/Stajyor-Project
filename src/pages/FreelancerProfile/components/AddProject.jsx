import React from 'react';
import picture from '../../../assets/images/FreelancerPortfolio/picture.svg'
import { ReactComponent as Arrow } from '../../../assets/images/FreelancerPortfolio/down.svg'
import web from '../../../assets/images/FreelancerPortfolio/web.svg'
import './AddProject.scss'
import { useContext } from 'react';
import Context from 'components/Context/Context';

const AddProject = () => {

    const { setIsPortfolio } = useContext(Context)

    const PortfolioFunc = (bol) => {
        setIsPortfolio(bol)
    }

    return (
        <div className='add_project' >
            <h3 className="add_project_title">
                Add portfolio project
            </h3>
            <div className="add_project_input">
                Drag and drop or <span>Browser</span>
            </div>
            <ul className="add_project_listimages">
                <li className="add_project_listimages_item">
                    <img src={picture} alt="good images" />
                </li>
                <li className="add_project_listimages_item">
                    <img src={picture} alt="good images" />
                </li>
                <li className="add_project_listimages_item">
                    <img src={picture} alt="good images" />
                </li>
                <li className="add_project_listimages_item">
                    <img src={picture} alt="good images" />
                </li>
            </ul>
            <ul className="add_project_list">
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Project Title</h3>
                    <input className="add_project_list_item_input" type="text" placeholder='Enter a brief but descriptive title' />
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Description</h3>
                    <textarea className="add_project_list_item_input" cols="30" rows="4" placeholder='Describe your project to a buyers'></textarea>
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Tools</h3>
                    <div className="add_project_list_item_wrapper">
                        <input className="add_project_list_item_input" type="text" placeholder='Choose or write the tools that you used' />
                        <div className='add_project_list_item_wrapper_div' ><Arrow className='add_project_list_item_wrapper_div_img' /></div>
                    </div>
                </li>
                <li className="add_project_list_item">
                    <h3 className="add_project_list_item_title">Link</h3>
                    <div className="add_project_list_item_wrapper">
                        <input className="add_project_list_item_input" type="text" placeholder='Provide a link to your project' />
                        <img className='add_project_list_item_wrapper_img' src={web} alt="" />
                    </div>
                </li>
            </ul>
            <div className="freelanceravailable_wrapper">
                <button className='freelanceravailable_wrapper_btn' onClick={() => PortfolioFunc(false)}  >Cancel</button>
                <button className='freelanceravailable_wrapper_btn1' onClick={() => PortfolioFunc(false)}  >Save</button>
            </div>
        </div>
    );
};

export default AddProject;