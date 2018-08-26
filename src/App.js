import React, { Component } from 'react';
import ReactTimeout from 'react-timeout'
import './App.css';
import List from './List';
import SearchInput from './search_input';
// import Musician from './Musician';
// import Album from './Album';
import Loading from './Loading';



class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      articleList: [],
      SearchItems: []
  }
}


  componentDidMount(){

  setInterval(()=>{
      fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story").then(function(response) {
          return response.json();
          }).then(data => {
            console.log(data);
            this.setState({articleList: data.hits});   
            this.setState({SearchItems: data.hits});
          });   
    }, 10000);
  }

  

    changeList(prop) {
        var term = prop['prop'].toLowerCase(),
            items = this.state.SearchItems,
            newList = [];

        for (var i = 0; i < items.length; i++) {
            if (items[i]['title'].toLowerCase().indexOf(term) > -1) {
                newList.push(items[i]);
            }
        }
        if (newList.length == 0){
           this.setState({articleList: [{title:'Nothing found'}]});
        }else{
        this.setState({articleList: newList});
      }
    }


  render(){
    if (this.state.articleList.length !== 0) {
          return (
          <div>
          <div className="search">
            <SearchInput onSearchTermChange={prop => this.changeList({prop})}/>
          </div>
          <div>
            <List myList={this.state.articleList} />
          </div>
          </div>  
                    
          )
    } else {
      return (<Loading/> )
    }
  }
}



export default App;
