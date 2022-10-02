import React from 'react'

function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt="" />
      </div>
      <div className='about-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error architecto est blanditiis natus harum obcaecati aspernatur eos? Adipisci cum voluptatem, cupiditate qui eligendi sit voluptatum nam repellat repellendus ea et, doloremque, reiciendis explicabo in libero! Repellendus, aspernatur reiciendis. </p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About