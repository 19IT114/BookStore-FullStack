import React, { Component } from "react";

class FooterComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">
            Advanced Java Programming 19IT114 ViragKumar Patel
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponents;
