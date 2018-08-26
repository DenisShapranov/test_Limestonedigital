import React from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


// class myModal extends React.Component {
 

// }


const ListItem = ({item}) => {
    

    return <tr onClick= {() => alert('here should be raw JSON data ')}>
        <td>{item.title}</td>
        <td>{item.author}</td>
        <td>{item.created_at}</td>
        <td>{item.url}</td>
    </tr>;
};

export default ListItem;




