import './Profile.css'
import Navbar from '../Navbar'
import profile from '../../img/profile_dummy.png'
import { useState, useEffect, useRef } from "react";

const Profile = () => {
    const [editName, setEditName] = useState(false)
    const [editDate, setEditDate] = useState(false)
    const [editGender, setEditGender] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    const inputFileRef = useRef( null );
    const onFileChange = ( e ) => {
        console.log( e.target.files );
    }
    const onBtnClick = () => {
        inputFileRef.current.click();
    }
    return (
        <>
            <Navbar />
            <div class="profile">
                <div class="container">
                    <div class="d-flex align-item-center justify-content-center">
                        <div class="card profileCard">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Address</a>
                            </li>
                        </ul>
                        <div class="profileBody">
                            <div class="row">
                                <div class="col-lg-3 d-flex flex-column">
                                    <div class="card p-3 profileCardImg">
                                        <img src={profile} class="profileImg" />
                                        <input
                                            type="file"
                                            ref={inputFileRef}
                                            onChange={onFileChange}
                                            style={{display: 'none'}}
                                        />
                                        <button class="btn btn-link" onClick={onBtnClick}> Pilih Foto </button>
                                        <p>Besar file: (2 Megabytes) .JPG .JPEG .PNG</p>
                                    </div>
                                    {
                                        editPassword ? 
                                        <input type="password" class="form-control mt-2" placeholder="Enter New-Password" /> :
                                        '' 
                                    }
                                    <button class="btn btn-secondary mt-1" onClick={() => {
                                                        setEditPassword(!editPassword)
                                                    }} >Change Password</button>
                                </div>
                                <div class="col-lg-9">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th class="profileHeaderForm">
                                                    Biodata
                                                </th>
                                                <th class="profileHeaderBtn">
                                                    {/* <button class="btn btn-secondary btn-sm">Update</button> */}
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Name</td>
                                                <td class="profileForm">
                                                    {
                                                        editName ? 
                                                        <input type="text" class="form-control" value="Mochamad Irfani" /> :
                                                        'Mochamad Irfani' 
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditName(!editName)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Date of Birth</td>
                                                <td class="profileForm">
                                                    { 
                                                        editDate ? 
                                                        <input type="date" class="form-control" value="1999-03-21" /> :
                                                        '21 Maret 1999'
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditDate(!editDate)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td class="profileForm">
                                                    {
                                                        editGender ? 
                                                        <select class="form-control">
                                                            <option value="Male" selected>Male</option>
                                                            <option value="Female">Female</option>
                                                        </select> :
                                                        'Male'
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditGender(!editGender)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Contact</th>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td class="profileForm">
                                                    { 
                                                        editEmail ? 
                                                        <input type="email" class="form-control" value="mohamadfani99@gmail.com" />:
                                                        'mohamadfani99@gmail.com'
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditEmail(!editEmail)
                                                    }}> 
                                                        edit 
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Phone</td>
                                                <td class="profileForm">
                                                    {
                                                        editPhone ?
                                                        <input type="number" class="form-control" value="081332695709" />:
                                                        '081332695709'
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditPhone(!editPhone)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile