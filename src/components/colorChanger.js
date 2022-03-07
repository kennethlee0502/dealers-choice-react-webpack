import React, { Component } from "react";
import axios from "axios";
import "../../css/style.css";

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      colors: [{ id: 0, name: "rgb(0,0,0)" }],
      h1: "this color is rgb(255,255,255)",
    };
    this.create = this.create.bind(this);
  }
  async componentDidMount() {
    const response = await axios.get("/api/color");
    const colors = response.data;
    this.setState({ colors });
  }

  async create() {
    const response = await axios.post("/api/color");
    const color = response.data;
    const colors = [...this.state.colors, color];
    document.body.style.backgroundColor = color.name;
    const h1 = `This color is ${colors[colors.length - 1].name}`;

    this.setState({ colors, h1 });
  }

  render() {
    return (
      <div>
        <div className="hello">
          <h1>{this.state.h1}</h1>

          <button
            className="button-55"
            role="button"
            onClick={() => {
              this.create();
            }}
          >
            Click to Change Background color
          </button>
        </div>
      </div>
    );
  }
}
export default Generator;
