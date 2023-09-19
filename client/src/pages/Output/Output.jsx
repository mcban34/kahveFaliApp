import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { BsArrowLeftCircleFill } from 'react-icons/bs';

function Output() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const response = location.state.data
  const name = location.state.name

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 270) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='output'>
      <div className="outputHeader">
        <Link className={`backtoHome ${scrolled ? 'scrolled' : ''}`} to='/home'>
          <BsArrowLeftCircleFill /> <span>Geri Dön</span>
        </Link>
        <h3>İşte Falın Hazır! {name} {' '}
          <img width={35} src="http://localhost:3000/img/coffee-beans.png" alt="" />
        </h3>
      </div>
      <div className="outputRes">
        <p>{response}</p>
      </div>
    </div>
  )
}

export default Output