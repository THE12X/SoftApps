import React from 'react';
import '../Android/Android.css'
import Prog from '../Content/Programs'
const Programs = () => {

  return (
    <div>
      <h1 className='bigt'>Our Desktop Programs</h1>
      <div className='contain'>
        {Prog.map(item =>
            <div className="card">
              <img src={item.img} alt={item.title} />
              <div className='info'>
                <h3>{item.title}</h3>
                <a href={item.p} >Download</a>
            </div>
          </div>
        )}
      </div>
      <div className='bt'><a href="#"><button className='x'>Go up</button></a></div>
    </div>
  );
};

export default  Programs;