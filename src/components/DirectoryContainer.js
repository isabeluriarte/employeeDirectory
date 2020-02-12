import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import ResultsTable from "./ResultsTable";

class DirectoryContainer extends Component {
    state = {
      result: {},
      search: ""
    };
  
    // // When this component mounts, search the Giphy API for pictures of kittens
    // componentDidMount() {
    //   this.searchMovies("");
    // }
  
    // searchMovies = query => {
    //   API.search(query)
    //     .then(res => this.setState({ result: res.data }))
    //     .catch(err => console.log(err));
    // };
  
    // handleInputChange = event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   this.searchMovies(this.state.search);
    //   this.setState({search: ""})
    // };
  
    render() {
      return (
        <div className="container-fluid justify-content-center text-center">
            <Jumbotron />
            <SearchForm />
            <ResultsTable />
        </div>
      );
    }
  }


export default DirectoryContainer;

