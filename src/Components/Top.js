import './Top.css';
import img4 from './images/4.jpg';

function Top () {
    return (
      <header className="header">
        <div className="intro-header-background">
          <img alt="obrazek" src={img4} />
        </div>
        <div className="header-title">
          <h1>Pacyfikacja Wsi Rudno</h1>
          <div className="header-description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </header>
    );   
}

export default Top;