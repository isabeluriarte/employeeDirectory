import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import ResultsTable from "./ResultsTable";

class DirectoryContainer extends Component {
    state = {
      result: [],
      search: "",
    };
  
    componentDidMount() {
      API.search().then(res=>{
        console.log(res.data.results)
        this.setState({result: res.data.results})
      })
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  
    sortTypes = {
      up: {
        class: 'sort-up',
        fn: (a, b) => a.name > b.name
      },
      down: {
        class: 'sort-down',
        fn: (a, b) => b.name < a.name
      },
      default: {
        class: 'sort',
        fn: (a, b) => a
      }
    };
  
    render() {
      return (
        <div className="container-fluid justify-content-center text-center">
            <Jumbotron />
            <SearchForm value={this.state.search} handleInputChange={this.handleInputChange}/>
            <ResultsTable employees=
            {this.state.result
              .filter(employee=>{
                return employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || employee.name.first.toLowerCase().includes(this.state.search.toLowerCase())
              })
            }/>
        </div>
      );
    }
  }


export default DirectoryContainer;

