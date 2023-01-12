import './Profile.css'
import Navbar from '../Navbar'
import profile from '../../img/profile_dummy.png'
import { useState, useEffect, useRef } from "react"
import axios from 'axios'

const Profile = () => {
    const [editName, setEditName] = useState(false)
    const [name, setName]       = useState('')
    const [editBirthday, setEditBirthday] = useState(false)
    const [birthday, setBirthday]       = useState('')
    const [editGender, setEditGender] = useState(false)
    const [gender, setGender]       = useState('')
    const [editEmail, setEditEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [editPhone, setEditPhone] = useState(false)
    const [phone, setPhone] = useState('')
    const [editAddress, setEditAddress] = useState(false)
    const [address, setAddress] = useState('')
    const [editPassword, setEditPassword] = useState(false)
    const [password, setPassword]   = useState('')
    const inputFileRef = useRef( null )    
    const dataLogin                         = JSON.parse(localStorage.getItem('dataLogin'))
    const config                            = {
                                                    headers: { Authorization: `Bearer ${dataLogin.token}`, 'Content-Type': 'multipart/form-data' }
                                                }
    const onFileChange = ( e ) => {
        console.log( e.target.files );
    }
    const onBtnClick = () => {
        inputFileRef.current.click();
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const result = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/profile`, config)

        if(result.data.status == 200) {
            let data = result.data.data
            setName(data.detail.name)
            setBirthday(data.detail.birthday)
            setGender(data.detail.gender)
            setEmail(data.email)
            setPhone(data.detail.phone)
            setAddress(data.detail.address)
        }    
    }


    const handleKeyDown = async (event, status, value) => {
        const formData = new FormData()
        if (status != 'gender' && event.key === 'Enter') {

            if(status == 'name') {
                formData.append('name', value)
            }

            if(status == 'birthday') {
                formData.append('birthday', value)
            }

            if(status == 'email') {
                formData.append('email', value)
            }

            if(status == 'phone') {
                formData.append('phone', value)
            }

            if(status == 'password') {
                formData.append('password', value)
            }

        }

        if(status == 'gender') {
            formData.append('gender', value)
        }

        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DOMAIN}/api/profile/update?_method=PUT`,
            data:    formData,
            headers: config.headers,
        });

        if(result.data.status == 200) {
            // if success
        }
    }

    // const checkChange = (value) => {
    //     alert(value)
    // }

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
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Address</a>
                            </li> */}
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
                                        <input type="password" class="form-control mt-2" placeholder="Enter New-Password"  onKeyDown={(e) => handleKeyDown(e, "password", e.target.value)} /> :
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
                                                <th colspan="2" class="profileHeaderForm">
                                                    Biodata
                                                </th>
                                            </tr>
                                            <tr>
                                                <td>Name</td>
                                                <td class="profileForm">
                                                    {
                                                        editName ? 
                                                        <input type="text" class="form-control" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => handleKeyDown(e, "name", e.target.value)} /> :
                                                        name 
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
                                                        editBirthday ? 
                                                        <input type="date" class="form-control" value={birthday} onChange={(e) => setBirthday(e.target.value)} onKeyDown={(e) => handleKeyDown(e, "birthday", e.target.value)} /> :
                                                        birthday
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditBirthday(!editBirthday)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td class="profileForm">
                                                    {
                                                        editGender ? 
                                                        <select class="form-control" value={gender} onChange={(e) => handleKeyDown(e, "gender", e.target.value)}>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select> :
                                                        gender
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditGender(!editGender)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td class="profileForm">
                                                    { 
                                                        editEmail ? 
                                                        <input type="email" class="form-control" value={email} onKeyDown={(e) => handleKeyDown(e, "email", e.target.value)} />:
                                                        email
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
                                                        <input type="number" class="form-control" value={phone} onKeyDown={(e) => handleKeyDown(e, "phone", e.target.value)}/>:
                                                        phone
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditPhone(!editPhone)
                                                    }}> edit </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td class="profileForm">
                                                    {
                                                        editAddress ?
                                                        <input type="string" class="form-control" value={address} onKeyDown={(e) => handleKeyDown(e, "address", e.target.value)} />:
                                                        address
                                                    }
                                                    <button class="btn btn-link" onClick={() => {
                                                        setEditAddress(!editAddress)
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