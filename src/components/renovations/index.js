import React from 'react';
import './styles.scss';







const Renovations = () => {
    return (
      <div className="photo-lib">
        <p>Here are some before and after photos of the garden renovation this year!<br />Give them a swipe to compare.</p>
        <div class='container'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider" name='slider' id="slider"></input>
      </div>
      <div class='container1'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider1" name='slider1' id="slider1"></input>
      </div>
      <div class='container2'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider2" name='slider2' id="slider2"></input>
      </div>
      <div class='container3'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider3" name='slider3' id="slider3"></input>
      </div>
      <br />
      <p>And here are some of the kitchen revamp!</p>
      <div class='container4'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider4" name='slider4' id="slider4"></input>
      </div>
      <div class='container5'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider5" name='slider5' id="slider5"></input>
      </div>
      <div class='container6'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider6" name='slider6' id="slider6"></input>
      </div>
      <div class='container7'>
        <div class='img background-img'></div>
        <div class='img foreground-img'></div>
        <input type="range" min="1" max="100" value="50" class="slider7" name='slider7' id="slider7"></input>
      </div>
      </div>
    )
}

export default Renovations