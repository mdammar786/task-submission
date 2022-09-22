import React from 'react';
import './Profile.css';

const Profile = () => {


    return (
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title">Registration Form</h2>
                        <form method="POST">
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">First Name</label>
                                        <input className="input--style-4" type="text" name="first_name" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Last name</label>
                                        <input className="input--style-4" type="text" name="last_name" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Mobile Number</label>
                                        <input className="input--style-4" type="text" name="phone" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Address</label>
                                        <input className="input--style-4" type="text" name="address" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">City</label>
                                        <input className="input--style-4" type="text" name="city" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">State</label>
                                        <input className="input--style-4" type="text" name="state" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Pincode</label>
                                        <input className="input--style-4" type="number" name="pincode" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Country</label>
                                        <input className="input--style-4" type="text" name="country" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Company Name</label>
                                        <input className="input--style-4" type="text" name="country" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Occupation</label>
                                        <input className="input--style-4" type="text" name="country" required />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Experience(in years)</label>
                                        <input className="input--style-4" type="number" name="country" required />
                                    </div>
                                </div>
                            </div>
                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile