import React from 'react';
// import Image from 'next/image'

// Styles
import styles from './landing.module.css'

// Components
import QuotationMark from './quotation-mark.svg.js'

const Landing = () => {

  const tamu = {
    nama: "Ianah El Sholikhah S.Tr.Stat. dan Pasangan",
    alamat: "BPS Kabupaten Tanah Laut"
  }

  return (<>
    <header className={styles.header + " relative lg:overflow-hidden"}>
      {/* <p className="font-display text-stroke-md">
        This is header!
      </p> */}

      {/* lg:opacity-100 opacity-50 */}
      <div className="absolute inset-0 z-negative">
        <div className="w-full h-full bg-brand-400"></div>
      </div>

      <section className="flex items-center justify-center flex-col min-h-screen text-white body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="font-semibold text-lg">The Wedding of</h3>
            <h1 className="md:text-8xl text-6xl font-display title-font mt-4 mb-2">Chintia & Karom</h1>
            <p className="lg:w-2/3 mx-auto font-semibold leading-relaxed">Saturday, May 22<sup>th</sup>, 2021</p>
          </div>
          <div className="flex flex-col text-center mt-16 mx-auto">
            <h3 className="font-semibold">Kepada: </h3>
            <p className="mb-2 text-sm">{tamu.nama}<br />({tamu.alamat})</p>
            <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg">Buka Undangan</button>
          </div>
        </div>
      </section>

    </header>

    <section name="ayat" className="flex items-center justify-center <lg:flex-wrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8">
      <div className="h-full w-full bg-brand-400">
        {/* xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 p-2 block mx-auto mb-10 */}
        <div className="object-cover object-center relative rounded-full">
          <img src="/photos/IMG-20210424-WA0007.jpg" alt="prayer" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"/>
          {/* <Image src="/photos/IMG-20210424-WA0007.jpg" height={500} width={500} layout="responsive" objectFit="cover" /> */}
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <QuotationMark className="inline-block w-8 h-8 text-brand-400 mb-8" />
          <p className="leading-relaxed text-lg">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</p>
          <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">QS Ar-Rum</h2>
          <p className="text-gray-500">Ayat 21</p>
        </div>
      </div>
    </section>

    {/* <section className="flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8" >
      <div className="px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <h2 className="text-brand-900 leading-relaxed text-3xl font-semibold">QS Ar-Rum</h2>


        </div>
      </div>
    </section> */}

    <section name="couples" className="text-white body-font bg-brand-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1> */}
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s pb-2">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"> Dengan mengharap Rahmat dan Ridho Allah SWT. Kami bermaksud menyelenggarakan <br />Resepsi Pernikahan Putra - Putri kami :</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            {/* <div className="relative w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-white-500 mb-5 flex-shrink-0"> */}
            <img src="/photos/IMG-20210424-WA0006.jpg" alt="cpw" className="h-350px w-350px object-cover object-center relative rounded-full" />
            {/* <svg fill="none" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg> */}
            {/* </div> */}
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Chintia Arisandi Hidayat, S. Tr. Stat</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a className="mt-3 text-white-500 inline-flex items-center">Learn More </a>

            </div>
          </div>
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-100 text-white-500 mb-5 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ahlul Karom, S. Tr. Stat.</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <a className="mt-3 text-white-500 inline-flex items-center">Learn More </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section name="event" className={styles['section-pattern'] + " flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8"} >

    </section>

  </>)
}

export default Landing;