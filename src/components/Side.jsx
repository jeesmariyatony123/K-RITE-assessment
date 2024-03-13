import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

const Side = () => {
    return (
        <>
            <div className='border mt-2' >
                <div className='ps-2 pt-3 d-flex'>
                <i class="fa-brands fa-square-pied-piper pe-2 fa-3x"></i>
                    <div >
                        <h6 className='text-secondary'>INC</h6>
                        <h5>InnovateHub</h5>
                    </div>
                </div>
                <div className='mx-2 mt-4'>
                    <Table striped bordered hover >
                        <thead >
                            <tr><td><i className="fa-solid fa-pen-nib pe-1"></i>Design team</td></tr>
                            <tr><td><i className="fa-solid fa-bullhorn pe-1"></i>Marketing Team</td></tr>
                            <tr><td><i className="fa-solid fa-angle-left"></i><i className="fa-solid fa-angle-right pe-1"></i>Development Team</td></tr>
                            <tr><td><i className="fa-regular fa-square-plus pe-1"></i> Create a Team</td></tr>
                        </thead>
                    </Table>
                </div>
                <div>
                    <h6 className='ps-2 mx-2 mt-4'>FOLDERS <span style={{ float: 'right' }} className='fs-4'>+</span></h6>
                    <Dropdown className='mx-2 mt-4'>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='my-2  w-100' style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <i className="fa-regular fa-folder"><span style={{ fontFamily: 'sans-serif', paddingLeft: '5px' }}>Products</span></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Roadmap</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Feedback</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Performance</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Team</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Analytics</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">+ Add new sub</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mx-2'>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='my-2  w-100' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <i className="fa-regular fa-folder"><span style={{ fontFamily: 'sans-serif', paddingLeft: '5px' }}>Sales</span></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Roadmap</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Feedback</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mx-2'>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='my-2  w-100' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <i className="fa-regular fa-folder"><span style={{ fontFamily: 'sans-serif', paddingLeft: '5px' }}>Design</span></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Roadmap</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Feedback</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className='btn btn-light mx-2 my-2'><i className="fa-regular fa-folder pe-1"></i>Office</button> <br />

                    <button className='btn btn-light mx-2 my-2'><i className="fa-regular fa-folder pe-1"></i>Legal</button>

                </div>


                <div className=' mt-5 ms-3 pb-2 me-3' style={{ paddingTop: '100px' }}>
                    <h6><i className="fa-solid fa-user-plus pe-1"></i>Invite teammates</h6>
                    <h6><i className="fa-regular fa-circle-question pe-1"></i>Help and first steps</h6>
                    <button className='btn btn-light w-100 '><span className='bg-white text-dark p-1 rounded'>7</span> days left on trial <button className='btn btn-dark'>Add biling</button> </button>
                </div>
            </div>
        </>
    )
}

export default Side