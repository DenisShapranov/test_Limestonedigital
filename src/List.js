import React, { Component } from 'react';
import ListItem from './List_Item';
import './App.css';


// import { Link} from 'react-router-dom';
class List extends Component {



  render() {
    let {myList} = this.props;
   
    const ListItems = myList.map((item) => {
        return <ListItem
            key={item.id}
            item={item}
        />;
    });
   
   

        return (
           <table className="artList">
           <thead>
              <tr>
                <td>title</td>
                <td>author </td>
                <td>created</td>
                <td>url</td>
              </tr>
              </thead>
            <tbody>
                {ListItems}
            </tbody>
        
        </table>
              

          );
  }
}

export default List;


