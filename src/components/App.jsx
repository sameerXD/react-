import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://api.covid19india.org/raw_data4.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.items
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li>current : {item.currentstatus}</li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
export default App;
