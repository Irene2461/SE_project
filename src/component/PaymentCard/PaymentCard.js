import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./stylePaymentCard.css";


export default function PaymentCard(props) {

    // const dispatch = useDispatch();
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
            taiKhoan: Yup.string().required('tài khoản không được bỏ trống'),
            matKhau: Yup.string().required('mật khẩu không được bỏ trống').min(6, 'mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 ký tự'),
            email: Yup.string().email('email không hợp lệ').required('email không được bỏ trống'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'số điện thoại chỉ chứa số'),
            hoTen: Yup.string().required('họ tên không được bỏ trống')
        }),
        onSubmit: (values) => {
            
            // dua du lieu len API
            this.alert("Bạn đã thanh toán thành công");
        }
    })



    return (
        // <div className="container" style={{ paddingTop: '20px', width: '600px' }}>
        //     <form className="formLog" style={{ height: '700px'}} onSubmit={formik.handleSubmit}>
        //         <NavLink to="/menu">
        //             <img className="imgLogo" src="./img/logo-login.png" alt="logo" />
        //         </NavLink>
        //         <div className="row">
        //             <div className="col-6">
        //                 <div className="form-group">
        //                     <input name="taiKhoan" className="form-control" placeholder="Nhập tên tài khoản" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //                     {formik.errors.taiKhoan && formik.touched.taiKhoan && <p className="text text-danger">{formik.errors.taiKhoan}</p>}
        //                 </div>
        //                 <div className="form-group">
        //                     <input name="hoTen" className="form-control" placeholder="Nhập Họ và Tên" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //                     {formik.errors.hoTen && formik.touched.hoTen && <p className="text text-danger">{formik.errors.hoTen}</p>}
        //                 </div>
        //                 <div className="form-group">
        //                     <input name="matKhau" className="form-control" placeholder="Nhập mật khẩu" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //                     {formik.errors.matKhau && formik.touched.matKhau && <p className="text text-danger">{formik.errors.matKhau}</p>}
        //                 </div>
        //             </div>
        //             <div className="col-6">
        //                 <div className="form-group">
        //                     <input name="email" className="form-control" placeholder="Nhập địa chỉ email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //                     {formik.errors.email && formik.touched.email && <p className="text text-danger">{formik.errors.email}</p>}
        //                 </div>
        //                 <div className="form-group">
        //                     <input name="soDt" className="form-control" placeholder="Nhập số điện thoại" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        //                     {formik.errors.soDt && formik.touched.soDt && <p className="text text-danger">{formik.errors.soDt}</p>}
        //                 </div>
        //                 <div className="form-group">
        //                     <select name="maNhom" className="maNhom form-control" onChange={formik.handleChange}>
        //                         <option value="0">Chọn mã nhóm</option>
        //                         <option value="GP01">Group 1</option>
        //                         <option value="GP02">Group 2</option>
        //                         <option value="GP03">Group 3</option>
        //                         <option value="GP04">Group 4</option>
        //                     </select>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="form-group">
        //             <NavLink onClick={()=>{
        //                 alert("Bạn đã thanh toán thành công");
        //             }} exact to="/menu" className="btn btn-primary mt-4">Đăng ký</NavLink>
        //         </div>
        //     </form>
        // </div>
        <NavLink exact to="/menu">Menu</NavLink>
    )
}
