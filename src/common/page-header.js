import {Link} from "react-router-dom";
import "./page-header.css"

/*
    <header>
        <span id="nav-logo">👻👻👻</span>   
        <!-- Nav is used for navigation links -->
        <nav id="main-nav">
            <!-- Inside of nav, you will usually place another tags. -->
            <a href="./index.html">Home</a> | <a href="./about.html">About</a>
        </nav>
    </header>
 */




function PageHeader(){
    return(
        <header className="page-header">
            <span className="page-header__logo" id="nav-logo">👻👻👻</span> 
            <nav className="page-header__nav">
                <Link to="/">Home</Link> | <Link to="/quiz">Quiz</Link> | <Link to="/about">About</Link> | <Link to="/demos">Demo</Link>
            </nav>
        </header>
    );

}

export default PageHeader;