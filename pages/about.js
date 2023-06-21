import React, { useState, useEffect, useContext } from "react";
//INTRNAL IMPORT
import { UserCard } from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContect } from "../Context/ChatAppContext";

const alluser = () => {
  const { userLists, addFriends } = useContext(ChatAppContect);
  return (
    <div>
    
      <div className={Style.alluser_info}>
      <h1>WELCOME TO DECENTRALIZED MESSAGING APPLICATION</h1>
       <div class="one">
 <h3> Our decentralized messaging application is a secure way for users to send messages on the Ethereum network.<br/>
            
        <br/>
Built using a range of technologies, including Hardhat for smart contract development, Metamask API for blockchain interactions, Solidity language for smart contract programming, and HTML, CSS, and ReactJS for the user interface, our messaging app provides a seamless and user-friendly experience for sending and receiving messages.<br/>
<br />
Our decentralized messaging app provides users with a secure alternative to traditional messaging services, with no centralized entity controlling their data. This app is an example of the power and potential of decentralized applications and highlights the benefits of using blockchain technology to build secure and decentralized messaging systems.
</h3>   </div>
        
      </div>

    </div>
  );
};

export default alluser;
