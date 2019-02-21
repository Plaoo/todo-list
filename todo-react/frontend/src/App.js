import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/todo/").then(res => {
      console.log(res);
      this.setState({
        tasks: res.data
      });
    });
  }
  render() {
    const { tasks } = this.state;
    const textList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="post card" key={task.id}>
            <div className="card-content">
              <span className="card-title">{task.text}</span>
              <p>{task.done}</p>
              <p>{task.created_at}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No tasks yet</div>
    );
    return (
      <div className="container">
        <h1>Todo List</h1>
        <p>{textList}</p>
      </div>
    );
  }
}

export default Home;
