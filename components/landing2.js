import React, { useState, useEffect } from 'react';
// import Image from 'next/image'

import ReactBnbGallery from 'react-bnb-gallery';
import { useForm } from "react-hook-form";
import ReactAudioPlayer from 'react-audio-player';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import supabase from '../supabase'

// Styles
import styles from './landing.module.css'
import 'react-bnb-gallery/dist/style.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

// Components
import { Gallery } from "./gallery";
import { QuotationMark, EngagementRing } from './quotation-mark.svg.js'

const Landing2 = ({ tamu } = { tamu: { nama: "", tujuan: "", acara: "1", } }) => {
  const { register, handleSubmit } = useForm();
  const [ucapans, setUcapans] = useState([]);

  useEffect(() => {
    fetchAllUcapans()
  }, [])

  const onSubmitUcapan = (ucapan) => {
    console.log(ucapan)
    insertUcapan(ucapan)
  }

  const insertUcapan = async (ucapan) => {
    let { data, error } = await supabase
      .from('ucapan')
      .insert([ucapan])
    console.log(error)
    console.log(data)
    fetchAllUcapans()
  }

  const fetchAllUcapans = async () => {
    let { data, error } = await supabase
      .from('ucapan')
      .select('*')
    console.log(data)
    setUcapans(data)
  }


  const [countdownDate, setCountdownDate] = useState(new Date('05/22/2021').getTime());
  const [countdownTimer, setCountdownTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1500);
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60),);
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      hours = `0${hours}`.slice(-2);
      minutes = `0${minutes}`.slice(-2);
      seconds = `0${seconds}`.slice(-2);
      // if (numbersToAddZeroTo.includes(minutes)) {
      //   minutes = `0${minutes}`;
      // } 
      // if (numbersToAddZeroTo.includes(seconds)) {
      //   seconds = `0${seconds}`;
      // }
      setCountdownTimer({ days: days, hours: hours, minutes, seconds });
    }
  };

  const photos_names = [
    { filename: "IMG-20210424-WA0005.jpg", },
    { filename: "IMG-20210424-WA0006.jpg", },
    { filename: "IMG-20210424-WA0007.jpg", },
    { filename: "IMG-20210424-WA0008.jpg", },
    { filename: "IMG-20210424-WA0009.jpg", },
    { filename: "IMG-20210424-WA0010.jpg", },
    { filename: "IMG-20210424-WA0011.jpg", },
    { filename: "IMG-20210424-WA0013.jpg", },
    { filename: "IMG-20210424-WA0014.jpg", },
    { filename: "IMG-20210424-WA0015.jpg", },
    { filename: "IMG-20210424-WA0016.jpg", },
    { filename: "IMG-20210424-WA0017.jpg", },
    { filename: "IMG-20210424-WA0018.jpg", },
    { filename: "IMG-20210424-WA0019.jpg", },
    { filename: "IMG-20210424-WA0020.jpg", },
    { filename: "IMG-20210424-WA0021.jpg", },
    { filename: "IMG-20210424-WA0022.jpg", },
    { filename: "IMG-20210424-WA0023.jpg", },
    { filename: "IMG-20210424-WA0024.jpg", },
    { filename: "IMG-20210424-WA0025.jpg", },
  ];
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const output = photos_names.map((photo) => {
      return {
        'photo': `/photos/${photo.filename}`,
        'thumbnail': `/photos/thumbnail/${photo.filename}`,
        'caption': '',
        'number': '',
      }
    })
    // console.log(output)
    setPhotos(output)
  }, [])

  // console.log(tamu)
  // const tamu = {
  //   // nama: "",
  //   nama: "Ianah El Sholikhah S.Tr.Stat. dan Pasangan",
  //   tujuan: "BPS Kabupaten Tanah Laut"
  // }

  return (<>
    <header className={styles.header + " relative lg:overflow-hidden font-sans"}>
      <div className="absolute inset-0 z-negative">
        <img src="/photos/IMG-20210424-WA0024.jpg" className="w-full h-full object-cover object-center rounded"></img>
      </div>

      <div className="absolute inset-0 z-negative">
        <div className="p-2 w-full h-full bg-brand-900 opacity-75"></div>
      </div>

      <section className="flex items-center justify-center flex-col min-h-screen text-white body-font">
        <div className="container px-5 lg:pt-24rem pt-12rem pb-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="font-semibold font-sans text-lg">The Wedding of</h3>
            <h1 className="md:text-8xl text-6xl font-display title-font mt-4 mb-2">Chintia & Karom</h1>
            <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Saturday, May 22<sup>th</sup>, 2021</p>
          </div>
          <div className="flex flex-col text-center mt-16 mx-auto">
            <h3 className="font-semibold font-sans">Kepada: </h3>
            <p className="mb-4 text-sm font-sans">{tamu.nama ?? "Tamu Undangan"}<br />({tamu.tujuan ?? "Di Tempat"})</p>
            <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg font-sans">Buka Undangan</button>
          </div>
        </div>
      </section>

    </header>

  </>)

    // <section name="ayat" className="bg-white flex items-center justify-center <lg:flex-wrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8">
    //   <div className="h-full w-full bg-brand-400">
    //     <div className="object-cover object-center relative rounded-full">
    //       <img src="/photos/IMG-20210424-WA0007.jpg" alt="prayer" className="w-full h-auto object-cover object-center rounded" />
    //     </div>
    //   </div>
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    //       <QuotationMark className="inline-block w-8 h-8 text-brand-400 mb-8" />
    //       <p className="leading-relaxed text-lg">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</p>
    //       <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-6"></span>
    //       <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">QS Ar-Ruum:21</h2>
    //       {/* <p className="text-gray-500">Ayat 21</p> */}
    //     </div>
    //   </div>
    // </section>

    // {/* <section className="flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8" >
    //   <div className="px-5 py-24 mx-auto">
    //     <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    //       <h2 className="text-brand-900 leading-relaxed text-3xl font-semibold">QS Ar-Rum</h2>


    //     </div>
    //   </div>
    // </section> */}

    // <section name="couples" className="text-white body-font bg-brand-300">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="text-center mb-20">
    //       {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1> */}
    //       <img src="\bismillah.png" className="w-3/4 lg:w-1/3 h-full mx-auto mb-2" />
    //       <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s pb-2">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
    //       <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"> Dengan mengharap Rahmat dan Ridho Allah SWT. Kami bermaksud menyelenggarakan <br />Pernikahan Putra - Putri kami :</p>
    //       <div className="flex mt-6 justify-center">
    //         <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center content-center">
    //       <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
    //         <img src="/photos/her.jpg" alt="cpw" className="h-350px w-350px object-cover object-center relative rounded-full" />
    //         <div className="flex-grow">
    //           <h2 className="text-gray-900 title-font text-5xl font-display font-medium mt-4">Chintia Arisandi Hidayat</h2>
    //           <span className="inline-block h-1 w-10 rounded bg-white mt-4 mb-2"></span>
    //           <p className="text-gray-900 title-font tracking-wider text-sm font-light">
    //             <span className="font-medium">Putri Ke-1 dari </span><br />
    //             Bapak Arif Hidayat, S. Kep. Ns. <br />&<br />
    //             Ibu Endang Sumarmi, SST.
    //           </p>
    //           <div className="inline-flex space-x-2">
    //             <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
    //               <img src="/logo/iconfinder_twitter_2959740.svg" className="h-24px w-24px fill-white" />
    //             </a>
    //             <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
    //               <img src="/logo/iconfinder_instagram_4691240.svg" className="h-24px w-24px fill-white" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
    //         {/* <div className="md:w-1/2 inline-flex items-center justify-center rounded-full bg-white-100 text-white-500 mb-5 flex-shrink-0"> */}
    //         <img src="/photos/me.jpg" alt="cpp" className="h-350px w-350px object-cover object-center relative rounded-full" />
    //         <div className="flex-grow">
    //           <h2 className="text-gray-900 title-font text-5xl font-display font-medium mt-4">Ahlul Karom</h2>
    //           <span className="inline-block h-1 w-10 rounded bg-white mt-4 mb-2"></span>
    //           <p className="text-gray-900 title-font tracking-wider text-sm font-light">
    //             <span className="font-medium">Putra Ke-3 dari </span><br />
    //             Bapak Drs. H. Maksum <br />&<br />
    //             Ibu Hj. Sulastri, S.Pd.
    //           </p>
    //           <div className="inline-flex space-x-2">
    //             <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
    //               <img src="/logo/iconfinder_twitter_2959740.svg" className="h-24px w-24px fill-white" />
    //             </a>
    //             <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
    //               <img src="/logo/iconfinder_instagram_4691240.svg" className="h-24px w-24px fill-white" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </section>

    // {/* <section name="event" className={styles['section-pattern'] + " flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8"} >

    // </section> */}

    // <section className="relative lg:overflow-hidden font-sans">
    //   {/* lg:opacity-100 opacity-50 */}
    //   <div className="absolute inset-0 z-negative">
    //     <img src="/photos/IMG-20210424-WA0012.jpg" className="w-full h-full object-cover object-center rounded"></img>
    //   </div>

    //   <div className="absolute inset-0 z-negative flex justify-center">
    //     <div className="box-border mx-2 mt-0 mb-0 w-full h-full lg:m-8 lg:(w-11/12 h-11/12) bg-brand-900 opacity-75"></div>
    //   </div>

    //   <div className="flex items-center justify-center flex-col min-h-[screen-5] text-white body-font">
    //     <div className="container px-5 py-8 mx-auto text-center">
    //       {/* <img src="/engagement.svg" className="h-24px w-24px fill-white" /> */}
    //       <EngagementRing className="inline-block mx-auto w-100px h-100px fill-white my-8" />
    //       <div className="flex flex-col w-full mb-6">
    //         <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Akad Nikah</h3>
    //         <span className="inline-block self-center h-1 w-10 rounded bg-white mt-2 mb-4"></span>
    //         <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed mb-1">Saturday, May 22<sup>th</sup>, 2021</p>
    //         <p className="lg:w-2/3 mx-auto font-sans font-thin mb-4">07.00 - 09.00 WIB</p>
    //         <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Masjid Agung Baitul Mukminin Jombang</p>
    //         <p className="lg:w-2/3 mx-auto font-sans font-thin">Jl. KH. A. Dahlan No.28, Jombatan, Kec. Jombang, Kab. Jombang</p>
    //       </div>
    //       {(tamu.acara == '1') ?
    //         <div className="flex flex-col text-center mt-16 mx-auto">
    //           <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Resepsi</h3>
    //           <span className="inline-block self-center h-1 w-10 rounded bg-white mt-2 mb-4"></span>
    //           <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed mb-1">Saturday, May 22<sup>th</sup>, 2021</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-thin mb-4">11.00 - 12.00 WIB</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Kediaman Mempelai Wanita</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-thin">Desa Plandi Utara RT 21/RW 05 Kec. Jombang, Kab. Jombang</p>
    //         </div>
    //         :
    //         <div className="flex flex-col text-center mt-16 mx-auto">
    //           <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Ngunduh Mantu</h3>
    //           <span className="inline-block self-center h-1 w-10 rounded bg-white mt-2 mb-4"></span>
    //           <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed mb-1">Sunday, June 6<sup>th</sup>, 2021</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-thin mb-4">12.00 - 15.00 WIB</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Kediaman Mempelai Pria</p>
    //           <p className="lg:w-2/3 mx-auto font-sans font-thin">Jl. Pagar Alam, Perum Griya Sejahtera, Blok L, No 13 Gunung Terang, Kec. Langkapura, Bandar Lampung</p>
    //         </div>
    //       }
    //       {/* <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg font-sans">Menuju Lokasi</button> */}
    //       <div className="flex flex-row text-center justify-center space-x-2 font-sans mt-12 mb-16 mx-auto">
    //         <div className='time-section'>
    //           <div className='font-thin text-4xl -mb-2'>{countdownTimer.days || '0'}</div>
    //           <small className="font-semibold">Days</small>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-semibold'>:</div>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-thin text-4xl -mb-2'>{countdownTimer.hours || '00'}</div>
    //           <small className="font-semibold">Hours</small>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-semibold'>:</div>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-thin text-4xl -mb-2'>{countdownTimer.minutes || '00'}</div>
    //           <small className="font-semibold">Minutes</small>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-semibold'>:</div>
    //         </div>
    //         <div className='time-section'>
    //           <div className='font-thin text-4xl -mb-2'>{countdownTimer.seconds || '00'}</div>
    //           <small className="font-semibold">Seconds</small>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </section>


    // <section name="galeri" className="flex flex-col justify-center text-gray-600 body-font my-4 mx-4 lg:mx-8">
    //   {/* <div className="h-full w-full"> */}
    //   {/* <button > Open gallery </button> */}
    //   <h3 className="font-medium text-2xl lg:text-4xl font-serif text-center tracking-wide my-4">Our Happy Moments Together</h3>
    //   <div className="block aspect-1">
    //     <div className={styles['masonry']} onClick={() => setIsGalleryOpen(true)}>
    //       {photos.map((photo) => (
    //         <div className={styles['masonry-brick']}>
    //           <img alt="gallery" className="w-full object-cover h-full object-center block" src={photo.thumbnail} />
    //         </div>
    //       ))}
    //       {/* <img src="/photos/IMG-20210424-WA0007.jpg" alt="prayer" className="w-full h-auto object-cover object-center rounded" /> */}
    //     </div>
    //   </div>

    //   <ReactBnbGallery
    //     show={isGalleryOpen}
    //     photos={photos}
    //     onClose={() => setIsGalleryOpen(false)}
    //   />
    //   {/* </div> */}
    // </section>


    // <section className="text-gray-600 body-font">
    //   <div className="container px-5 py-12 mx-auto flex flex-col">
    //     <h3 className="font-medium text-2xl lg:text-4xl font-serif text-center tracking-wide my-4">Our Story</h3>
    //     <div className="flex flex-wrap w-full">
    //       <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
    //         <div className="flex relative pb-12">
    //           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
    //             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //           </div>
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">1 Oktober 2018</h2>
    //             <p className="leading-relaxed">Berada dalam satu kolam yang sama selama 4 tahun, tak lantas membuat kami bisa saling bertemu. Hingga akhirnya kami dipertemukan untuk pertama kali pada saat magang di Subdirektorat SHPB BPS RI.</p>
    //           </div>
    //         </div>
    //         <div className="flex relative pb-12">
    //           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
    //             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //           </div>
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">21 Desember 2018</h2>
    //             <p className="leading-relaxed">
    //               Kami mulai bertukar pesan pribadi melalui whatsapp adalah saat libur natal ketika Kak Karom berada di kereta dalam perjalanan menuju Semarang. Percakapan kami pun berlanjut dari hari ke hari dan cukup intensif. Hingga akhirnya Chintia merasa bahwa jika diteruskan maka hal ini akan berpengaruh pada rasa dalam hatinya.</p>
    //           </div>
    //         </div>
    //         <div className="flex relative pb-12">
    //           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
    //             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //           </div>
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <circle cx="12" cy="5" r="3"></circle>
    //               <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">24 Januari 2019</h2>
    //             <p className="leading-relaxed">
    //               Kak Karom menceritakan bahwa sudah lama Chintia sering muncul dalam mimpinya dan membuatnya terbangun tengah malam. Di hari itu juga, Kak Karom mengakui bahwa dia menyukai Chintia.</p>
    //           </div>
    //         </div>
    //         <div className="flex relative pb-12">
    //           <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
    //             <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //           </div>
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    //               <circle cx="12" cy="7" r="4"></circle>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">31 Januari 2019</h2>
    //             <p className="leading-relaxed">
    //               Kak Karom pertama kalinya merasa cemburu. Untuk mengusir kegundahannya, kami memutuskan untuk membicarakan hal tersebut sepulang kantor. Di hari itulah Kak Karom menyatakan bahwa ia ingin menjadi lebih dari sekedar teman. Chintia kala itu tak lantas meng-iyakan, karena dia sedang menunggu orang lain yang sudah bertahun-tahun menjadi teman dekatnya. Kak Karom pun menyanggupi untuk menunggu Chintia memberi kepastian.</p>
    //           </div>
    //         </div>
    //         <div className="flex relative pb-12">
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //               <path d="M22 4L12 14.01l-3-3"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">15 Februari 2019</h2>
    //             <p className="leading-relaxed">Chintia menemukan jawaban dari pertanyaan dalam hatinya. Haruskah dia melanjutkan menunggu dia yang tak pasti atau menjalani hubungan jarak jauh dengan seseorang yang baru dekat dengannya satu bulan. Di hari itu dengan penuh keyakinan Chintia memutuskan untuk menjalani hubungan dengan Kak Karom. Dan memulai perjalanan LDR di tanggal 26 Februari 2019.</p>
    //           </div>
    //         </div>
    //         <div className="flex relative pb-12">
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //               <path d="M22 4L12 14.01l-3-3"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">1 November 2020</h2>
    //             <p className="leading-relaxed">Long story short setelah menjalani hubungan jarak jauh selama hampir dua tahun, Kak Karom bersama kedua orang tuanya datang untuk melamar Chintia. Lamaran pun diterima. Kak Karom dan Chintia sepakat untuk melanjutkan komitmen mereka bersama</p>
    //           </div>
    //         </div>
    //         <div className="flex relative/'
    //         ">
    //           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 inline-flex items-center justify-center text-white relative z-10">
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
    //               <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //               <path d="M22 4L12 14.01l-3-3"></path>
    //             </svg>
    //           </div>
    //           <div className="flex-grow pl-4">
    //             <h2 className="font-sans font-semibold leading-relaxed text-sm text-gray-900 mb-1">22 Mei 2021</h2>
    //             <p className="leading-relaxed">Akhirnya, tibalah hari bahagia yang akan menjadi tanda dimulainya babak baru dari perjalanan hidup mereka berdua. Semoga Kak Karom dan Chintia menjadi keluarga yang sakinah, mawaddah, warahmah.</p>
    //             <p>"I do believe in fate and destiny. I also believe that we are only fated to do the things that we'd choose anyway. And I choose you."</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:w-2/5 md:w-1/2 space-y-2 mt-12">
    //         <img className="w-full h-250px object-cover object-center rounded-lg md:mt-0 mt-4 hidden md:block" src="/photos/IMG-20190222-WA0023.jpg" alt="step" />
    //         <img className="w-full h-250px object-cover object-center rounded-lg md:mt-0 mt-4 hidden md:block" src="/photos/IMG20190728143233.jpg" alt="step" />
    //         <img className="w-full h-250px object-cover object-center rounded-lg md:mt-0 mt-4 hidden md:block" src="/photos/IMG20191006072105.jpg" alt="step" />
    //         <img className="w-full h-250px object-cover object-center rounded-lg md:mt-0 mt-4 hidden md:block" src="/photos/IMG_20191208_233948.jpg" alt="step" />
    //         <img className="w-full h-250px object-cover object-center rounded-lg md:mt-0 mt-4" src="/photos/IDE_C_K  220.jpg" alt="step" />
    //       </div>
    //     </div>
    //   </div>
    // </section>


    // <section name='RSVP' className="text-gray-600 body-font relative">
    //   <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
    //     <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    //       {/* style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} */}
    //       <iframe className="absolute inset-0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.7853547030128!2d112.24348062917821!3d-7.559555599659259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzMnMzQuNCJTIDExMsKwMTQnMzguNSJF!5e0!3m2!1sid!2sid!4v1621077842151!5m2!1sid!2sid&amp;width=100%&amp;height=100%&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameBorder="0"></iframe>
    //       {/* <iframe className="absolute inset-0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe> */}
    //       <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md font-sans invisible lg:visible">
    //         <div className="px-6">
    //           <h2 className="title-font font-sans font-semibold text-gray-900 text-xs">Alamat</h2>
    //           <p className="mt-1 font-sans">Desa Plandi Utara RT 21/RW 05 Kec. Jombang, Kab. Jombang  </p>
    //         </div>
    //         {/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
    //           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
    //           <a className="text-brand-500 leading-relaxed">example@email.com</a>
    //           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
    //           <p className="leading-relaxed">123-456-7890</p>
    //         </div> */}
    //       </div>
    //     </div>
    //     <div className="lg:w-1/3 md:w-1/2 bg-brand-400 text-white flex flex-col md:ml-auto w-full md:py-8 px-5 mt-8 md:mt-0">
    //       <form onSubmit={handleSubmit(onSubmitUcapan)}>
    //         {/* <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4 self-center">RSVP</h3> */}
    //         <h3 className="font-medium text-2xl lg:text-4xl font-serif text-center tracking-wide my-4">RSVP</h3>
    //         <p className="leading-relaxed mb-5 text-gray-600 font-sans text-center">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:</p>
    //         <div className="relative mb-4">
    //           <label className="leading-7 text-sm text-gray-600 font-sans">Nama</label>
    //           <input
    //             className="w-full bg-white rounded border-0 focus:ring-2 focus:ring-brand-200 text-base outline-none text-brand-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //             type="text" defaultValue={tamu.nama ?? ""}
    //             {...register('nama')}
    //           />
    //         </div>
    //         <div className="relative mb-4">
    //           <label className="leading-7 text-sm text-gray-600 font-sans">Pesan</label>
    //           <textarea
    //             className="w-full bg-white rounded border-0 focus:ring-2 focus:ring-brand-200 h-24 text-base outline-none text-brand-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
    //             {...register('ucapan')} ></textarea>
    //         </div>
    //         <div className="relative mb-4">
    //           <label className="leading-7 text-sm text-gray-600 font-sans">Apakah akan menghadiri?</label>
    //           <select {...register('rsvp')} className="text-brand-700 font-sans rounded border-0 focus:ring-2 focus:ring-brand-200 outline-none ">
    //             <option value='ya'>Ya</option>
    //             <option value='tidak'>Tidak</option>
    //             <option value='ragu'>Ragu-ragu</option>
    //           </select>
    //           {/* <div className="flex flex-row space-x-2">
    //             <span className="elementor-field-option">
    //               <input type="radio" value="Yes" name="is_attending" required="required" aria-required="true" />
    //               <label className="leading-7 text-sm text-gray-600 font-san">Ya</label>
    //             </span>
    //             <span className="">
    //               <input type="radio" value="No" name="is_attending" required="required" aria-required="true" />
    //               <label className="leading-7 text-sm text-gray-600 font-san">Tidak</label>
    //             </span>
    //             <span className="">
    //               <input type="radio" value="Uncertain" name="is_attending" required="required" aria-required="true" />
    //               <label className="leading-7 text-sm text-gray-600 font-san">Ragu-ragu</label>
    //             </span>
    //           </div> */}
    //         </div>
    //         <button className="text-brand-500 bg-white rounded-3xl border-0 py-1 px-8 mx-auto focus:outline-none hover:bg-brand-200 rounded text-lg">Kirim</button>
    //         <p className="text-xs text-gray-500 my-3">*Anda dapat mengirim konfirmasi lebih dari beberapa kali.</p>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    // <section name="wishes" className=" bg-brand-500 flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 " >
    //   <div className="flex items-center justify-center w-screen flex-col text-white my-4">
    //     <h2 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Ucapan</h2>
    //     <div className="container px-5 py-8 mx-auto text-center">
    //       <CarouselProvider
    //         visibleSlides={3}
    //         totalSlides={ucapans.length}
    //         step={1}
    //         naturalSlideWidth={400}
    //         naturalSlideHeight={400}
    //       >
    //         <Slider>
    //           {ucapans.map((ucap, idx) => (
    //             <Slide
    //               className=" w-1/2 p-4 font-sans"
    //               index={idx}
    //             >
    //               <div className="border border-gray-200 rounded-lg p-6 mx-2 text-white">
    //                 <h2 className="text-lg font-medium title-font mb-2">{ucap.nama ?? ""}</h2>
    //                 <p className="leading-relaxed text-base">{ucap.ucapan}<sup>{idx + 1}</sup></p>
    //               </div>
    //             </Slide>
    //           ))}
    //         </Slider>
    //         <ButtonBack className="border-1 border-white rounded py-2 px-4 mx-2" >Back</ButtonBack>
    //         <ButtonNext className="border-1 border-white rounded py-2 px-4 mx-2" >Next</ButtonNext>
    //       </CarouselProvider>
    //     </div>
    //     {/* <div className="container flex flex-wrap">
    //       <div className="lg:w-1/4 lg:w-1/3 w-1/2 p-4">
    //         <div className="border border-gray-200 rounded-lg p-6">
    //           <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
    //           <p class="leading-relaxed text-base">Optional className string. The slider uses the css transform property, applying translateX to move the slider tray east and west for a horizontal slider, and translateY to move the slider north and south for a vertical slider. The actual animation is the result of applying a CSS3 transition effect. If you supply your own classNameAnimation class, the default transition is disabled and ONLY the transitions specified by the classNameAnimation class are applied. Learn more about CSS3 transitions.</p>
    //         </div>
    //       </div>
    //       <div className="lg:w-1/4 lg:w-1/3 w-1/2 p-4">
    //         <div className="border border-gray-200 rounded-lg p-6">
    //           <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
    //           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
    //         </div>
    //       </div>
    //       <div className="lg:w-1/4 lg:w-1/3 w-1/2 p-4">
    //         <div className="border border-gray-200 rounded-lg p-6">
    //           <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
    //           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
    //         </div>
    //       </div>
    //       <div className="lg:w-1/4 lg:w-1/3 w-1/2 p-4">
    //         <div className="border border-gray-200 rounded-lg p-6">
    //           <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
    //           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    // </section>

    // {/* <ReactAudioPlayer
    //   src="my_audio_file.ogg"
    //   autoPlay
    //   controls
    // /> */}

}

export default Landing2;