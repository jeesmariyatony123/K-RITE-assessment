import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { productList } from '../products.js';

const Products = () => {

    const [items, setItems] = useState(productList)

    useEffect(() => {
        setItems(items)
    }, [])

    return (
        <div className='border border-top-0'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border p-1 mt-2 rounded'>
                <div className='fw-bold pt-1'>Products</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <form class="form-inline my-2 my-lg-0 mx-1">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button class="btn btn-light mx-1" ><i className="fa-solid fa-comments"></i></button>
                    <button class="btn btn-light mx-1" ><i className="fa-solid fa-gear"></i></button>
                </div>
            </div>

            <div className='border p-1 border-top-0' style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div style={{ display: 'flex' }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='mx-1'>
                        <i className="fa-solid fa-grip pe-1"></i> All brands
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='mx-1'>
                            Desk
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='mx-1'>
                            Tags
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button class="btn btn-light mx-1" ><i className="fa-solid fa-arrow-down-1-9 pe-1"></i>Sort</button>
                    <button class="btn btn-light mx-1" ><i className="fa-solid fa-arrow-down-short-wide pe-1"></i> Filter</button>
                </div>
                <div>
                    <button class="btn btn-light mx-1" ><i className="fa-regular fa-square-plus pe-1"></i> Meeting</button>
                    <button class="btn btn-light mx-1" ><i className="fa-solid fa-file-arrow-down pe-1"></i> Import/Export</button>
                </div>
            </div>

            <div className=' border border-end-0 border-start-0 p-1 border-top-0'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                    <div> <Form.Check aria-label="option 1" inline label="Brand" /></div>
                                    <div><span style={{ float: 'right' }}>+</span></div>
                                </div>
                            </th>
                            <th>Description</th>
                            <th>Members</th>
                            <th>Categories</th>
                            <th>Tags</th>
                            <th>Next Meeting</th>
                            <th>+</th>

                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td><Form.Check aria-label="option 1" inline label={item.brand} /></td>
                                <td>{item.description}</td>
                                <td>{item.member}</td>
                                <td>{item.categories}</td>
                                <td>{item.Tags}</td>
                                <td>{item.nextmeeting}</td>

                            </tr>
                        ))

                        }
                        <tr className='text-end'>
                            <td>{items.length} count</td>
                            <td>+ Add Calculation</td>
                            <td>+ Add Calculation</td>
                            <td>+ Add Calculation</td>
                            <td>+ Add Calculation</td>
                            <td></td>
                            <td></td>
                        </tr>


                    </tbody>
                </Table>
            </div>

            <div className='d-flex pt-5 mt-5 justify-content-center pb-2'>
                <div className=' d-flex justify-content-center border p-1 rounded'>
                    <button class="btn btn-light mx-1"><span className='bg-dark text-light p-1 rounded'>3</span> selected</button>
                    <button class="btn btn-light mx-1"><i className="fa-solid fa-box-archive pe-1"></i>Archive</button>
                    <button className='btn btn-light mx-1 text-danger'> <i className="fa-solid fa-trash pe-1"></i>Delete</button>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='mx-1'>
                            More
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className='btn btn-white mx-1 '><i className="fa-solid fa-xmark"></i></button>

                </div>
            </div>
        </div>
    )
}

export default Products