// eslint-disable-next-line no-unused-vars
import React from 'react'
import {RxCalender} from 'react-icons/rx'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Search = () => {
  return (
      <div className='search container section'>
        <div className="sectionContainer grid">

        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Where do you wanna go?' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Add Guests?' />
            </div>
             
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalender className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalender className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Flights</button>

        </div>

      </div>
    </div>
  )
}

export default Search
