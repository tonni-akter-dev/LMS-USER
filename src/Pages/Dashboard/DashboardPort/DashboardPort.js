import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Dashboard/Dashboard.css';
const DashboardPort = () => {
    const isLoggedIn = window.localStorage.getItem('loggedIn');
    const logout = () => {
        window.localStorage.clear();
        window.location.href = "/login"
    }
    return (
        <div>


            <div>
                <button className='btn notice_board_btn'>
                    <Link to="/noticeboard" className='navlink_design1'>Notice Board</Link>
                </button>
                {isLoggedIn === 'true' ? (
                    // <NavLink className="navDesign1 dropdown text-dark" to="/dashboard/myaccount">
                    <button type="" className='btn btn-dark' onClick={logout}>Log Out</button>
                    // </NavLink>
                ) : (
                    <NavLink className='navlink_design text-dark' to="/login"> <button type="">Login</button></NavLink>)}
            </div>

         
            {/* second part */}
            <div className='mt-5'>
                <table className="table table-bordered texts" >
                    <tbody>
                        <tr>
                            <td>TOTAL BOOKS</td>
                            <td>10000</td>
                            <td>TOTAL USERS</td>
                            <td>920</td>
                            <td>LIBRARIANS</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>TOTAL THESIS</td>
                            <td>25</td>
                            <td>TOTAL E-BOOKS</td>
                            <td>5
                            </td>
                            <td>TOTAL JOURNALS</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* third part */}
            <div className='librarians_btn'>
                <button className='btn btn-dark librarians_btn1'>LIBRARIANS</button>
            </div>
            <div className='mt-5 card_div' >

                <div className='librarians_cards'>
                    <img width="220" src="https://i.ibb.co/mbmFVK2/Picture1.png" alt="" />
                    <p>Tahmina Akter</p>
                    <p>Gulshan & Baridhara Branch</p>
                    <p>tahmina@pu.edu.bd</p>
                </div>
                <div className='librarians_cards'>
                    <img width="220" src="https://i.ibb.co/mbmFVK2/Picture1.png" alt="" />
                    <p>Tahmina Akter</p>
                    <p>Gulshan & Baridhara Branch</p>
                    <p>tahmina@pu.edu.bd</p>
                </div>
                <div className='librarians_cards'>
                    <img width="220" src="https://i.ibb.co/mbmFVK2/Picture1.png" alt="" />
                    <p>Tahmina Akter</p>
                    <p>Gulshan & Baridhara Branch</p>
                    <p>tahmina@pu.edu.bd</p>
                </div>



            </div>
        </div>
    );
};

export default DashboardPort;