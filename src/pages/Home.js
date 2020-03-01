import React from 'react';
import Layout from '../components/Layout';
import { WEATHER_API_URL } from '../utils/constants';
import Axios from 'axios';
import Error from '../components/Error';
import Loading from '../components/Loading';
import CityCard from '../components/CityCard';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWeather: {},
            error: false,
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(async position => {
            if (position) {
                try {
                    const url = `${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                    const receivedData = (await Axios.get(url)).data;

                    this.setState({ currentWeather: receivedData });
                } catch {
                    this.setState({ error: true });
                }
            }
        }, error => {
            this.setState({ error: true });
            console.error(error);
        }, {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 600000
        });
    }

    render() {
        return (
            <Layout>
                {'weather' in this.state.currentWeather ?
                    <CityCard weather={this.state.currentWeather} current />
                    :
                    this.state.error ?
                        <Error>Can't get your location.</Error>
                        :
                        <Loading />
                }
            </Layout>
        );
    }
}

export default Home;