import React, { Component } from "react";

import ProductService from "../services/product.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    ProductService.allItemsList().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {this.state.content && (this.state.content).map(item=><div className="container">
              <div className="card-row">
                <div className="card" style={{width: "18rem"}}> 
                  <img className="card-img-top" src={item.image} alt="Card image cap"/> 
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Rs. <b>100</b></p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>)}
        </header>
      </div>
    );
  }
}
