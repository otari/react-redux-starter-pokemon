import React from 'react';
import routes from '../routes';
import styles from './App.scss';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            height: window.innerHeight - 52
        };
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ height: window.innerHeight - 42 })
        })
    }
    render() {
        //Based on user login state we can show hide partial views and show only login component etc..
        //To be implemented
        return (
            <BrowserRouter>
                <div className={styles.wrap}>
                    <Sidebar />
                    <article>
                        <Header />
                        <Scrollbars autoHeight
                            autoHeightMax={this.state.height}>
                            <div className={styles.inner}>
                                {routes}
                            </div>
                        </Scrollbars>
                    </article>

                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(App);