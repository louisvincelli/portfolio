import '../splitting.css';
//import Splitting from 'splitting';

function Split() {
      let circle = document.querySelector('.circle');
      console.log(circle);
      window.onmousemove = function(e) {
        let x = e.clientX/-2;
        const circleStyle = {
            transform: "perspective (1000px) rotateY(" + x + "deg) rotateX(150deg)"
        }
        circle.style.transform = "perspective (1000px) rotateY(" + x + "deg) rotateX(150deg)";
    }

    return (
        <div className="splitting">
        <div className="circle" data-splitting>
            HTML * CSS * JS * Express * NodeJS * React * Handlebars * Apollo * MongoDB * MySQL
        </div>
        </div>
    )
}


export default Split;