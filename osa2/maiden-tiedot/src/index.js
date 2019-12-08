import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Countries = ({countries, setSearchword, weather, getWeather}) => {

  if(countries.length > 10){
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if(countries.length === 1){
    
    const country = countries[0];
    const languages = country.languages.map(language =>
      <li key={language.name}>
        {language.name}
      </li>
    )
    return <div>
      <h1>{country.name}</h1>

      capital {country.capital}<br/>
      popuation {country.population}<br/>
      <h2>languages</h2>
      <ul>
        {languages}
      </ul>
      <img width={150}  src={country.flag} alt={country.name} />

      <h2>Weather in {country.name}</h2>
      {typeof weather.current !== 'undefined' && 
        <div>
          <b>Temperature:</b> {`${weather.current.temperature} celcius`}<br/>
          {weather.current.weather_icons.map(i => <img src={i} />)}
          <br />
          <b>Wind</b> 
          {` ${weather.current.wind_speed} kph direction ${weather.current.wind_dir}`}        
        </div>
      }
    </div>
  }

  const countryList = countries.map(country => 
    <div key={country.name}>
      {country.name}
      <button onClick={() => setSearchword(country.name)}>show</button>
    </div>
  )
  
  return(
    <div>
      {countryList}
    </div>
  )
}

const Search = ({searchword, handleSearchwordChange}) => {
  return (
    <div>
      find countries <input value={searchword} onChange={handleSearchwordChange}/>
    </div>
  )
}


const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ searchword, setSearchword ] = useState('')
  const [ weather, setWeather ] = useState([])
  const apiKey = "";

  const handleSearchwordChange = (event) => setSearchword(event.target.value)
  
  const getCountries = () => {
    if(searchword.length > 0){
      axios
        .get(`https://restcountries.eu/rest/v2/name/${searchword}`)
        .then(response => {
          setCountries(response.data)
        }).catch(response => {
          setCountries([])
        })
    }
  }

  const getWeather = () => {
    console.log("Get weather", countries.length, countries);
    
    if(countries.length === 1) {
      const country = countries[0];
      
      axios   
        .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.name}`)
        .then(response => {
          setWeather(response.data)
        }).catch(() => {
          setWeather([])
        })
    }
  }
  
  useEffect(getCountries, [searchword])
  useEffect(getWeather, [countries])
  
  return (
    <div>
      <Search 
        searchword={searchword}
        handleSearchwordChange={handleSearchwordChange}
      />

      <Countries 
        countries={countries}
        setSearchword={setSearchword}
        weather={weather}
        getWeather={getWeather}
      />
    </div>
  )

}

export default App

ReactDOM.render(<App />, document.getElementById('root'))