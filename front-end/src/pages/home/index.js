import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">

            <section>
                <strong>
                    Oxe Food!
                </strong>
                <span>
                    Deixa de arrudeio e vem comer.<br />
                    As melhores comidas da região,<br />
                    e se não for eu cegue.
                </span>
            </section>
            <div className="aside">
                <Link to="/login">
                    <button type="submit" className="button-home">
                        Login
                    </button>
                </Link>
                <a href="/corr">cadastre-se, é sem frescura</a>
            </div>
            
        </div>
    );
}

export default Home;
