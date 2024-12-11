'use client'
import React, {useState, useEffect, useRef} from 'react';
// import Popup from '../../../../../../code-tests/react/Dropdown-Menu-in-React/src/components/Popup';

export function Nav() {

  const [open, setOpen] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);


  useEffect(() => {
    setTimeout (() => {
      setTimedPopup(true);
    }, 5000);
  }, []); 


  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);

      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">

      {/* User's Profile Picture Functionality */}


        <div className='userpfp'>
          <img src="/user.png"></img>
        </div>

        {/* Logo Functionality */}

        <div className="logo-container">
          <img src="/petlogo.jpg" alt="PetModel Logo" className="logo-image"/>
        </div>


        <div className="nav-flex">
          {/* Drop Down Menu Functionality */}
          <div className='settings-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => {
              setOpen(!open)
            }}>
              <img src="/gear.png"></img>
            </div>
          </div>
        </div>



          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>

            {/* Drop Down Items */}
            <ul>
              <DropdownItem img="/edit.png" text={"Edit Profile"}/>
              <DropdownItem img="/pawprint.png" text={"My Pets"}/>
              <DropdownItem img="/gear.png" text={"Settings"}/>
              <DropdownItem img="/log-out.png" text={"Logout"}/>
            </ul>
          </div>

        {/*<Popup trigger={timedPopup} setTrigger={setTimedPopup}>*/}
        {/*      </Popup>  */}

      </div>
      );
      }

      function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>


  );
}

