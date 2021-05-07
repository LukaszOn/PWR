import './VictimSearch.css'
import { spisOfiar } from '../ofiary.js';
import { Component } from 'react';

class VictimSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ofiara: {spisOfiar},
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    wyswieltOfiary = () => {
        const filterOfiara = this.state.ofiara.spisOfiar.filter(ofiara => {
            return ofiara.opis.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        const wyswielt = filterOfiara.map(ofiara => {
            return <div className={'id' + ofiara.id}>{ofiara.opis} <p>{ofiara.urodzony}</p></div>
        })

        return wyswielt;
    }
    
    galeriaZdjec = () => {
        const filterImg = spisOfiar.map(zdjecie => {
            if (!(zdjecie.imgPATH === '')) {
                    return (
                    <img alt={'obrazek numer ' + zdjecie.imgPATH} src={zdjecie.imgPATH} className={'idIMG' + zdjecie.id}></img>
                    );
                }
        })
        return filterImg;
    }
    render() {
        return (
            <div className="VictimSearch">
                <div className="searchBar">
                    <h5>Ofiary Zbrodni</h5>
                    <p>Ofiary zbrodni hitlerowskiej z 30 maja 1940 roku.</p>
                    <form>
                        <input 
                            type="search" 
                            onChange={this.onSearchChange}>    
                        </input>
                    </form>
                </div>
                <div className="searchTable">
                    { this.wyswieltOfiary() }
                </div>
                <div className="galeria">
                    { this.galeriaZdjec() }
                </div>
            </div>
        );
    
    }
}

export default VictimSearch;