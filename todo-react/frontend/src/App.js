import React, { Component } from "react";
import axios from "axios";

const usernamePasswordBuffer = Buffer.from("admin: admin");
const base64data = usernamePasswordBuffer.toString("base64");

const server = "http://127.0.0.1:8000/api/todo/";
class Home extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get(server).then(res => {
      // console.log(res);
      this.setState({
        tasks: res.data
      });
    });
  }

  putEvent(text, id) {
    console.log(text);
    axios({
      // withCredentials: true,
      method: "put",
      url: "http://127.0.0.1:8000/api/todo/" + id + "/",
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4=",
        "Content-Type": "application/json"
      },

      auth: {
        username: "admin",
        password: "admin"
      },
      data: {
        done: "true",
        text: text
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { tasks } = this.state;

    const textList = tasks.length ? (
      tasks.map(task => {
        return (
          <div className="post card" key={task.id}>
            <div className="card-content">
              {task.done === false ? (
                <div>
                  <input
                    type="checkbox"
                    onClick={() => this.putEvent(task.text, task.id)}
                  />
                  <p>{task.created_at}</p>
                  <p>{task.done}</p>
                  <span>
                    <bold>{task.text}</bold>
                  </span>
                </div>
              ) : (
                <div>
                  <p>
                    <del>{task.created_at}</del>
                  </p>
                  <p>
                    <del>{task.done}</del>
                  </p>
                  <span>
                    <del>
                      <bold>{task.text}</bold>
                    </del>
                  </span>
                </div>
              )}
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
