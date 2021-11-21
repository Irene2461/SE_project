import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../action/UserAction';
import { NavLink } from 'react-router-dom';
import "./styleRegister.css";


export default function Register(props) {

    const dispatch = useDispatch();
    // su dung thu vien Formik de lay du lieu nguoi dung
    const formik = useFormik({
        initialValues: { // khai bao cac thuoc tinh input
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: ''
        },
        // su dung thu vien yup de xet validation
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Account is required'),
            matKhau: Yup.string().required('Password is required').min(6, 'Minimum length of password is 6').max(32, 'Maximum length of password is 32'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'Phone number only contains digits'),
            hoTen: Yup.string().required('Full name is required')
        }),
        onSubmit: (values) => {
            
            // dua du lieu len API
            const action = dangKyAction(values);
            dispatch(action);
        }
    })



    return (
        <div className="container" style={{ paddingTop: '20px', width: '600px' }}>
            <form className="formLog" style={{ height: '700px'}} onSubmit={formik.handleSubmit}>
                <NavLink to="/">
                    <img className="imgLogo" src="./img/logo-login.png" alt="logo" />
                </NavLink>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <input name="taiKhoan" className="form-control" placeholder="Enter username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.taiKhoan && formik.touched.taiKhoan && <p className="text text-danger text-left">{formik.errors.taiKhoan}</p>}
                        </div>
                        <div className="form-group">
                            <input name="hoTen" className="form-control" placeholder="Enter full name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.hoTen && formik.touched.hoTen && <p className="text text-danger text-left">{formik.errors.hoTen}</p>}
                        </div>
                        <div className="form-group">
                            <input name="matKhau" className="form-control" placeholder="Enter password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.matKhau && formik.touched.matKhau && <p className="text text-danger text-left">{formik.errors.matKhau}</p>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input name="email" className="form-control" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.email && formik.touched.email && <p className="text text-danger text-left">{formik.errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <input name="soDt" className="form-control" placeholder="Enter phone number" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.soDt && formik.touched.soDt && <p className="text text-danger text-left">{formik.errors.soDt}</p>}
                        </div>
                        <div className="form-group">
                            <select name="maNhom" className="maNhom form-control" onChange={formik.handleChange}>
                                <option value="0">Group Code Select</option>
                                <option value="GP01">Group 1</option>
                                <option value="GP02">Group 2</option>
                                <option value="GP03">Group 3</option>
                                <option value="GP04">Group 4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btnLog mt-4">Register</button>
                </div>
                <div style={{ width: '250px', margin: '0 auto' }}>
                    <div className="social-Log mt-5">
                        <img className="img-social-log" src="./img/login-facebook.png" alt="login" />
                    </div>
                    <div className="social-Log my-2">
                        <img className="img-social-log" src="./img/login-zalo.png" alt="login" />
                    </div>
                    <div className="social-Log">
                        <img className="img-social-log" src="./img/login-google.png" alt="login" />
                    </div>
                </div>
            </form>
        </div>
    )
}
