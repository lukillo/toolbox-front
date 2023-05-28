import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';


 

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({
      url: "http://localhost:3000/files/data",
    })
      .then((response) => {
        console.log(response);
        const formmatedLine = [];
        response.data.map((items)=>{
          items.lines.map((line)=>{
            formmatedLine.push({
              file: items.file,
              text: line.text,
              number: line.number,
              hex: line.hex
            })
          })
        })
        setList(formmatedLine);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">

      <div class="alert alert-primary" role="alert">
        <b>React Test App</b>
      </div>

      <table class="table table-dark table-striped">
        <thead class="table-light">
          <tr>
            <th scope="col">File name</th>
            <th scope="col">Text</th>
            <th scope="col">Number</th>
            <th scope="col">Hex</th>
          </tr>
        </thead>
        <tbody>

        {list.map((item)=>{
          return (
            <tr>
              <td>{item.file}</td>
              <td>{item.text}</td>
              <td>{item.number}</td>
              <td>{item.hex}</td>
            </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
