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
      <div class="pranshu"><h2>Frequently Asked Questions</h2></div>
<h3>Question 1: What is a decentralized messaging app?</h3>
<p>Answer: A decentralized messaging app is a messaging application that runs on a decentralized network, rather than a centralized server. It provides a secure and private way for users to send and receive messages, without the need for intermediaries.</p>
<h3>Question 2: What blockchain network does the messaging app run on?</h3>
<p>Answer: Our messaging app runs on the Ethereum network, which provides a secure and reliable platform for building decentralized applications.</p>
<h3>Question 3: Can I use the messaging app without a Metamask wallet?</h3>
<p>Answer: No, you need to have a Metamask wallet to use our messaging app. This ensures that your private key is securely stored and only accessible to you.</p>
<h3>Question 4: Is the messaging app free to use?</h3>
<p>Answer: Yes, our messaging app is free to use. However, users will need to pay for transaction fees on the Ethereum network when sending messages.</p>
<h3>Question 5: Can I use the messaging app to send attachments?</h3>
<p>Answer: No, currently our messaging app only supports sending text messages. However, we are working on adding support for sending attachments in the future.</p>
<h3>Question 6: Is my data stored on a centralized server?</h3>
<p>Answer: No, our messaging app is decentralized, which means that there is no centralized server controlling your data. Your messages are stored on the blockchain network, providing greater security and privacy.</p>
        
      </div>

    </div>
  );
};

export default alluser;
