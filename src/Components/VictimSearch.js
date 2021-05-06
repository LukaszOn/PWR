import './VictimSearch.css'
import { spisOfiar } from '../ofiary.js';
import { Component } from 'react';

class VictimSearch extends Component {
    render() {
        return (
            <div className="VictimSearch">
                <div className="searchBar">
                    <h5>Ofiary Zbrodni</h5>
                    <form>
                        <input 
                            type="search" 
                            onChange={this.onSearchChange}>    
                        </input>
                    </form>
                </div>
                <div className="searchTable">
                    {
                        spisOfiar.map(ofiara => {
                            return <div>{ofiara.opis} <p>{ofiara.urodzony}</p></div>
                        })
                    }
                </div>
            </div>
        );
    
    }
}

export default VictimSearch;