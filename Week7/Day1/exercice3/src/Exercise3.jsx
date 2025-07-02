import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>Mon titre stylisé avec style_header</h1>
        <p className="para">Ceci est un paragraphe stylisé avec la classe para.</p>
        <a href="https://www.example.com" target="_blank" rel="noreferrer">Lien vers example.com</a>
        <form>
          <label>
            Nom:
            <input type="text" name="name" />
          </label>
          <button type="submit">Envoyer</button>
        </form>
        <img 
          src="https://www.bing.com/images/search?view=detailV2&ccid=T9Y8u%2b4S&id=5E60AB9C45A34B641CD938AA881CCFBDE01CB439&thid=OIP.T9Y8u-4S5csWV8wOjaO2qwHaDt&mediaurl=https%3a%2f%2fik.imagekit.io%2flaxaar%2f1686313855890ReactJS_2400x1200.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4fd63cbbee12e5cb1657cc0e8da3b6ab%3frik%3dObQc4L3PHIiqOA%26pid%3dImgRaw%26r%3d0&exph=1200&expw=2400&q=photo+react&simid=608009912432018930&FORM=IRPRST&ck=B15CB1955F1336F77E79B8F394BF096D&selectedIndex=40&itb=0" 
          alt="exemple image" 
          style={{ display: 'block', marginTop: '10px' }}
        />
        <ul>
          <li>Premier élément</li>
          <li>Deuxième élément</li>
          <li>Troisième élément</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
