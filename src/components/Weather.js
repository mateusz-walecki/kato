import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Weather.scss";
const CITIES = ["London", "München", "Wrocław"];

const fetch = async (location) => {
  const appid = `e1ad444819435f8265e9d03101b37691f`;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${appid}`;
  const { data } = await axios.get(url);
  return data;
};

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    if (location) {
      fetch(location).then((result) => {
        return setData(result);
      });
      const interval = setInterval(() => {
        fetch(location).then((result) => setData(result));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [location]);
  console.log(data);

  return (
    <div className="weather ">
      <Form.Select
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      >
        <option> Select City </option>
        {CITIES.map((city) => {
          return <option key={city}>{city}</option>;
        })}
      </Form.Select>

      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>HUMIDITY</th>
            <th>TEMP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.list ? <td>{data.list[0].dt_txt}</td> : null}
            {data.list ? <td>{data.list[0].main.humidity}</td> : null}
            {data.list ? <td>{data.list[0].main.temp}</td> : null}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Weather;
