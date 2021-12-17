import React, {useState, useEffect} from 'react';
import "../Style/First.css";
import bird1 from '../assets/bird1.png';
import bird2 from '../assets/bird2.png';
import forest from "../assets/forest.png";
import rocks from "../assets/rocks.png"; 
import water from "../assets/water.png";

export default function Home() {
    const [offsetY , setOffsetY] = useState(0);
   const handleScroll =()=>setOffsetY(window.pageYOffset);

   useEffect(()=>{
     window.addEventListener('scroll',handleScroll);
     return () => window.removeEventListener('scroll',handleScroll);                                                                                                                                                         
   },[]); 
  return (
    
    <div>
      <section className ="parallax">
        <h2 id="text"   >It's time for a new <br /> <span>Adventure</span> </h2>
        <img src={bird1} style ={{transform: `translateY(${offsetY * 0.4}px)`}}   id="bird1" alt="" />
        <img src={bird2} style ={{transform: `translateY(${offsetY * 0.4}px)`}}   id="bird2" alt="" />
        <img src={forest} style ={{transform: `translateY(${offsetY * 0.4}px)`}}   id="forest" alt="" />
        <a href="#" id="btn" style ={{transform: `translateY(${offsetY * 0.6}px)`}} > Explore</a>
        <img src={rocks} style ={{transform: `translateY(${offsetY * 0.4}px)`}}  id="rocks" alt="" />
        <img src={water}  alt="" />
       
      </section>
      <div class="sec">
        <h2>Parallax scrolling Effect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam ab
          aperiam cumque obcaecati deleniti animi numquam velit assumenda unde
          qui eius nostrum culpa consequatur, ipsa earum ad perspiciatis nemo
          laborum mollitia, inventore quaerat. Aspernatur consectetur aut porro
          tempora! Odit deleniti consectetur quam, asperiores molestias nihil.
          Aliquid totam, ipsum dicta, autem unde odio libero, similique nemo
          illum ut eius non.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          dolores tempora debitis quidem, quisquam voluptates aperiam laudantium
          nesciunt consequuntur quis illum, illo veniam quia quas,
          exercitationem voluptatibus odio molestias voluptatem? Autem incidunt,
          eius eveniet deserunt delectus repellat blanditiis consequuntur quidem
          libero, sequi expedita sed minima sint nemo eum doloremque aspernatur,
          beatae rem. Perferendis libero obcaecati accusamus nostrum quasi ab
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          dolores tempora debitis quidem, quisquam voluptates aperiam laudantium
          nesciunt consequuntur quis illum, illo veniam quia quas,
          exercitationem voluptatibus odio molestias voluptatem? Autem incidunt,
          eius eveniet deserunt delectus repellat blanditiis consequuntur quidem
          libero, sequi expedita sed minima sint nemo eum doloremque aspernatur,
          beatae rem. Perferendis libero obcaecati accusamus nostrum quasi ab
          vero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          dolores tempora debitis quidem, quisquam voluptates aperiam laudantium
          nesciunt consequuntur quis illum, illo veniam quia quas,
          exercitationem voluptatibus odio molestias voluptatem? Autem incidunt,
          eius eveniet deserunt delectus repellat blanditiis consequuntur quidem
          libero, sequi expedita sed minima sint nemo eum doloremque aspernatur,
          beatae rem. Perferendis libero obcaecati accusamus nostrum quasi ab
          vero.
        </p>
      </div>
    </div>

  );
}


