
import './index.css';
/*
    function Card(){

    }
*/

const Card = (props) => {

    return <>
        <div className={props.color}>
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
            <div className="img-right">
                <img src={props.image} alt=""/>
            </div>
        </div>
    </>

}

export { Card };

