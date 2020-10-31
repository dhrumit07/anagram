import React from 'react';
import ls from 'local-storage';
import './App.css';
import {Compare} from "./Compare";
import {List} from "./List";


class App extends React.Component {

    // const [data, setData] = useState(ls.get('data') ? ls.get('data') : []);


    constructor(props) {
        super(props);
        this.state = {
            data: ls.get('data') ? ls.get('data') : []
        }
        this.handleSetData = this.handleSetData.bind(this);
    }

    handleSetData(received) {
        this.setState({data: received});
    }

    render() {

        return (
            <div className='container'>
                <Compare data={this.state.data} setData={this.handleSetData}/>
                <List data={this.state.data}/>
            </div>

        );
    }

}

export default App;
