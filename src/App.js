import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStoreActions } from 'easy-peasy'
import { useHistory, Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])
  const [day, setDay] = useState()
  const [time, setTime] = useState()
  const Restaurantlist = useStoreActions(actions => actions.order.addTorestaurantlist)
  const history = useHistory();
  //Getting data from using axios 
  useEffect(() => {
    axios.get("http://localhost:5000/data")
      .then(function (response) {
        setData(response.data.slice(1))
      })
      .catch(function (error) {
        console.error(error);
      })
  }, [])

  async function search(e) {
    e.preventDefault()
    const arr = []
    for (let i = 0; i < data.length; i++) {
      if ((time == data[i][1])) {

        if (JSON.stringify(data[i][2].split(",")[0]) !== JSON.stringify(day) &&
          JSON.stringify(data[i][2].split(",")[1]) !== JSON.stringify(day))
          arr.push(data[i])
      }
    }
    await Restaurantlist(arr)
    history.push("/Restaurantlist")
  }

  return (
    <div className='container'>
      <div className='layout'>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/previous-orders'>Previous Orders</Link>
        </div>
        <div className="wrap">

          <form onSubmit={search}>

            <label for="day">Select Day: </label>
            <select id="day" name="day" onChange={(e) => setDay(e.target.value)}>
              <option>Select Day</option>
              <option value="sun">Sunday</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thrusday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
            </select>

            <label for="time">Select Time</label>
            <select id="time" name="time" onChange={(e) => setTime(e.target.value)}>
              <option>Select Time</option>
              <option value="8am - 6pm">8am - 6pm</option>
              <option value="8am - 6pm">8am - 6am</option>
              <option value="10am - 9pm">10am - 9pm</option>
              <option value="9am - 10pm">9am - 10pm</option>
            </select>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;




