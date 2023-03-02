import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import './CompanyInformation.scss'
import { createCompanyUserPost } from 'reduxToolkit/extraReducers';

export const CompanyInformation = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', copmanyEmail: '', phoneNumber: '' })

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.companyRegister)

    const handleValues = ({ type, value }) => {
        setUser(prev => ({ ...prev, [type]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            activeDoteAction([
                { id: 2, label: "Company" },
                { id: 2, type: "Company" }
            ])
        )
        dispatch(createCompanyUserPost(user))
    };

    return (
        <>
            {
                loading
                    ? <h2>Loding...</h2>
                    : <div className="photoCard">
                        <div className='companyInformation__top'>
                            <h2>Welcome</h2>
                            <p>
                                Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="inputBox">
                                <div>
                                    <h5>Firstname*</h5>
                                    <input
                                        type="text"
                                        value={user.firstName}
                                        onChange={(e) => handleValues({ type: "firstName", value: e.target.value })}
                                        placeholder="Write in your first name"
                                        required
                                    />
                                </div>
                                <div>
                                    <h5>Lastname*</h5>
                                    <input
                                        value={user.lastName}
                                        onChange={(e) => handleValues({ type: "lastName", value: e.target.value })}
                                        type="text"
                                        placeholder="Write in your last name"
                                        required
                                    />
                                </div>
                                <div>
                                    <h5>E-mail*</h5>
                                    <input
                                        value={user.copmanyEmail}
                                        onChange={(e) => handleValues({ type: "copmanyEmail", value: e.target.value })}
                                        type="email"
                                        placeholder="YourCompany@inbox.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <h5>Phone Number*</h5>
                                    <input
                                        value={user.phoneNumber}
                                        onChange={(e) => handleValues({ type: "phoneNumber", value: e.target.value })}
                                        type="number"
                                        placeholder="+XXX (XX) XXX-XX-XX"
                                        required
                                    />
                                </div>
                            </div>
                            <button className="next_btn_photoCart">Next</button>
                        </form>
                    </div>
            }
        </>

    );
}
