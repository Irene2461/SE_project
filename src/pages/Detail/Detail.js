
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetailAction } from "../../action/FilmAction";
import TabMenu from "./TabMenu";
import Footer from "../../component/Footer/Footer";
import "./styleDetail.css";

export default function Detail(props) {

    const dispatch = useDispatch();
    const { thongTinChiTiet } = useSelector((state) => state.FilmReducer);
    // lay du lieu load ra giao dien khi trang vua load xong
    useEffect(() => {
        const action = getFilmDetailAction(props.match.params.postId);
        dispatch(action);
    }, []);

    // Do API thiếu 1 số trường như thời lượng, đạo diễn, diễn viên,... nên set cứng minh họa
    return (
        <div className="film-Detail" style={{background: "url(/img/bg-star.jpg) center center",backgroundSize: "cover",}}>
            <div className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-4">
                        <div className="img-detailFilm">
                            <img className="w-100 h-100" src={thongTinChiTiet.hinhAnh} alt="movie"/>
                        </div>
                    </div>
                    <div className="col-6 mt-5">
                        <div className="row mb-3">
                            <div className="col-12">
                                <h2 className="text-white mb-0">{thongTinChiTiet.tenPhim}</h2>
                                <span>120 phút</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">Release date</div>
                            <div className="col-8">
                                22-12-2020
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">Director</div>
                            <div className="col-8">Joe Russo</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Cast</div>
                            <div className="col-8">Chris Evans, Robert Downey Jr.</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Content</div>
                            <div className="col-8 text-justify">Nói chung là xem đi là thấy nó hấp dẫn cỡ nào</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Genre</div>
                            <div className="col-8">Hành động/Viễn tưởng</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Format</div>
                            <div className="col-8">2D/Digital</div>
                        </div>
                        <div className="voteDetail row mt-3">
                            <div className="bd-voteDetail">10/10</div>
                        </div>
                        <div className="voteDetail row mt-2">
                            <div>
                                <i className="fa fa-star icon-star"></i>
                                <i className="fa fa-star icon-star"></i>
                                <i className="fa fa-star icon-star"></i>
                                <i className="fa fa-star icon-star"></i>
                                <i className="fa fa-star icon-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    {/* Phần hiển thị lịch chiếu phim & reviews*/}
                    <div className="mt-5 mb-3 ml-5">
                        <ul className="nav nav-pills pills-tab-movie mb-5 ml-4" id="pills-tab-detail" role="tablist">
                            <li className="nav-item mr-2" role="presentation">
                                <a className="nav-link active" id="pills-home-tab-detail" data-toggle="pill" href="#pills-home-detail" role="tab" aria-controls="pills-home-detail" aria-selected="true">
                                    Show times
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-profile-tab-detail" data-toggle="pill" href="#pills-profile-detail" role="tab" aria-controls="pills-profile-detail" aria-selected="false">
                                    Reviews
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent-detail">
                            <div className="tab-pane fade show active" id="pills-home-detail" role="tabpanel" aria-labelledby="pills-home-tab-detail">
                                <div className="cine-detail">
                                    <TabMenu heThongRapChieu={thongTinChiTiet.heThongRapChieu} />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile-detail" role="tabpanel" aria-labelledby="pills-profile-tab-detail">
                                <div className="detail-reviews ml-4 mb-4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt fugiat consequuntur maiores ipsum nulla. Perferendis aliquid doloribus quisquam porro eum mollitia beatae fuga, necessitatibus provident ad delectus nihil eos. Eos.
                                    </p>
                                </div>
                                <div className="detail-reviews ml-4 mb-4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores voluptas architecto, perspiciatis voluptates recusandae.
                                    </p>
                                </div>
                                <div className="detail-reviews ml-4">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
