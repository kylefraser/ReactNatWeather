import React, { Component } from 'react';
import {weatherApi} from '../utils'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false
    };
  }

  componentWillMount() {
    this.getWeather('autoip');
  }

  getWeather(query) {
    this.setState({
      error: null,
      loaded: false, 
      tides: [],  
    });
    weatherApi(query)
      .then(response => {
        if (response.response.error) {
          this.setState({
            error: 'Unable to get weather. Please try again.'
          })
        } else {
          const current = response.current_observation;
          this.setState({
            temp: current.temp_f,
            location: current.display_location.full,
            icon_url: current.icon_url,
            time: current.observation_time,
            forecast: response.forecast.simpleforecast.forecastday,
            tides: response.tide.tideSummary
          });
        }
        this.setState({ loaded: true });                
      });
  }
  render() {
    const tideType = [];
    const tideHour = [];
    const tideMin = [];

    this.state.tides.map((tide, key) => {
      if(tide.data.type == 'High Tide' || tide.data.type == 'Low Tide') {
        tideType.push(tide.data.type)
        tideHour.push(tide.date.hour)
        tideMin.push(tide.date.min)
      }
    })    
    return (
      <View>
        <View>
          <Text>{this.state.location}</Text>  
          <Text>{tideType[0]}</Text>          
          <Text>{tideHour[0]}:{tideMin[0]}</Text>
        </View>        
      </View>
    )
  }  
}

export default Weather