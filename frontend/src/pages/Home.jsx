import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaClipboardCheck, FaUserPlus, FaHospital } from "react-icons/fa";
import oameni from "../assets/image/oameni.png";
import bgoameni from "../assets/image/bg-oameni.png";
import sase from "../assets/image/info-com/6.png"
import sapteunu from "../assets/image/info-com/7-1.png"
import optunu from "../assets/image/info-com/8-1.png"
import romania from "../assets/image/info-com/curs-prim-ajutor-romania-1.png"
import certificat from "../assets/image/info-com/certificat-curs-prim-ajutor-1.png"
import spital from "../assets/image/info-com/personal-medical-curs-prim-ajutor.png"

const Home = () => {
  return (
<div>
    <div className='bg-blue-700 text-white hidden md:block p-1 py-2 font-light'>
      <div className='lg:container mx-auto px-40'>
        <div className='grid grid-cols-2'>
          <div className='flex gap-3 items-center'>
            <div>Despre noi</div>
            <div>|</div>
            <div>Echipa</div>
            <div>|</div>
            <div>Defibrilatoare</div>
            <div>|</div>
            <div className='font-bold'>Contact</div>
          </div>
          <div className='justify-end items-center gap-1 flex'>
            <IoMdMail />
            <p>email@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    {/* 2nd navbar */}
    <div className='shadow-lg py-3'>
      <div className='bg-white lg:container mx-auto p-3 px-40 flex justify-between'>
        <img width={100} className='' src='https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-black-and-white.png' />
        <div className='w-full flex justify-end items-center gap-10'>
          <div className='flex gap-7'>
            <div>Acasa</div>
            <div>Educational</div>
            <div>Cursuri</div>
            <div>Companii</div>
            <div>Personal Medical</div>
            <div>Contact</div>
          </div>
          <div>
            <a href='#' className=' py-3 px-4 rounded-lg bg-blue-800 text-white text-center font-semibold'>Mă înscriu</a>
          </div>
        </div>
      </div>
    </div>

    <div className='h-[60vh] content-center' style={{backgroundImage: `url(${bgoameni})`,
                                  backgroundRepeat: `no-repeat`,
                                  backgroundSize: `cover`,
                                  backgroundPosition: `center`
  }}>
      <div className='container mx-auto px-40 flex justify-between'>
        <div className='my-auto'>
          <h1 className='text-7xl font-bold text-blue-700'>Salvăm vieți împreună</h1>
          <br />
          <h2 className='text-xl font-semibold'>Cursuri de prim ajutor în toată România pentru:</h2>
          <br />
          <ul>
            <li className='flex items-center gap-2'>
              <FaUserPlus size={18}/>
              <p className='text-lg'>începători, părinți și copii</p>
              </li>
            <li className='flex items-center gap-2 '>
              <FaClipboardCheck size={18}/>
              <p className='text-lg'>cerințe legale ale companiilor</p>
              </li>
          </ul>
          <br />
          <h2 className='text-xl font-semibold'>Suport vital avansat și primar pentru:</h2>
          <br />
          <ul>
            <li className='flex items-center gap-2'>
              <FaUserPlus size={18}/>
              <p className='text-lg'>medici și asistenți medicali</p>
              </li>
            <li className='flex items-center gap-2 '>
              <FaHospital size={18}/>
              <p className='text-lg'>
              acreditarea spitalelor, cabinetelor medicale și dentare</p>
              </li>
          </ul>
          <br />
          <div className='flex gap-5'>
            <a href='#' className=' py-2 px-4 rounded-lg bg-blue-800 text-white text-center font-semibold'>Înscrie-te la curs</a>
            <a href='#' className=' py-2 px-4 rounded-lg border border-blue-800 text-blue-800 text-center font-semibold'>Companii</a>
            <a href='#' className=' py-2 px-4 rounded-lg border border-blue-800 text-blue-800 text-center font-semibold'>Personal Medical</a>
          </div>

        </div>
        <img src={oameni} style={{width: `57vh`}}></img>
      </div>
    </div>

    <div className='container mx-auto px-40 my-24'>
      <div className='grid grid-cols-3 border bg-white rounded-xl shadow-2xl p-5'>
        <div className='flex items-center gap-2'>
          <img src={sase} alt="" width={115} />
          <p>CURSURI <b>PRACTICE</b> NĂSCUTE DIN <b>EXPERIENȚĂ REALĂ</b></p>
        </div>
        <div className='flex items-center gap-2'>
        <img src={sapteunu} alt="" width={115} />
          <p><b>200+</b> COMPANII PARTENERE <b>5000+</b> CURSANȚI</p>
        </div>
        <div className='flex items-center gap-2'>
        <img src={optunu} alt="" width={115} />
          <p>
          INSTRUCTORI MEDICI ȘI PARAMEDICI ÎN <b>SMURD ȘI TERAPIE INTENSIVĂ</b></p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={romania} alt="" width={115} />
          <p>CURSURI <b>ORIUNDE</b> ÎN <b>ROMÂNIA</b></p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={certificat} alt="" width={115}/>
          <p><b>35+</b> SPITALE, CABINETE MEDICALE ȘI DENTARE PARTENERE</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={spital} alt="" width={115}/>
          <p><b>CERTIFICAT</b> ÎN ROMÂNĂ, ENGLEZĂ, FRANCEZĂ, GERMANĂ SAU MAGHIARĂ</p>
        </div>
      </div>
    </div>

</div>
  )
}

export default Home