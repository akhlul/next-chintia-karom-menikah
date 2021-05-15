import React from 'react';
// import Image from 'next/image'

// Styles
import styles from './landing.module.css'

// Components
import { QuotationMark, EngagementRing } from './quotation-mark.svg.js'

const Landing = () => {

  const tamu = {
    nama: "Ianah El Sholikhah S.Tr.Stat. dan Pasangan",
    alamat: "BPS Kabupaten Tanah Laut"
  }

  return (<>
    <header className={styles.header + " relative lg:overflow-hidden font-sans"}>
      {/* <p className="font-display text-stroke-md">
        This is header!
      </p> */}

      {/* lg:opacity-100 opacity-50 */}
      {/* <div className="absolute inset-0 z-negative">
        <div className="w-full h-full bg-brand-400"></div>
      </div>

      <section className="flex items-center justify-center flex-col min-h-screen text-white body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3 className="font-semibold font-sans text-lg">The Wedding of</h3>
            <h1 className="md:text-8xl text-6xl font-display title-font mt-4 mb-2">Chintia & Karom</h1>
            <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Saturday, May 22<sup>th</sup>, 2021</p>
          </div>
          <div className="flex flex-col text-center mt-16 mx-auto">
            <h3 className="font-semibold font-sans">Kepada: </h3>
            <p className="mb-2 text-sm font-sans">{tamu.nama}<br />({tamu.alamat})</p>
            <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg font-sans">Buka Undangan</button>
          </div>
        </div>
      </section> */}
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
            <p className="mb-4 text-sm font-sans">{tamu.nama}<br />({tamu.alamat})</p>
            <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg font-sans">Buka Undangan</button>
          </div>
        </div>
      </section>

    </header>

    <section name="ayat" className="flex items-center justify-center <lg:flex-wrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8">
      <div className="h-full w-full bg-brand-400">
        <div className="object-cover object-center relative rounded-full">
          <img src="/photos/IMG-20210424-WA0007.jpg" alt="prayer" className="w-full h-auto object-cover object-center rounded" />
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <QuotationMark className="inline-block w-8 h-8 text-brand-400 mb-8" />
          <p className="leading-relaxed text-lg">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</p>
          <span className="inline-block h-1 w-10 rounded bg-brand-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">QS Ar-Ruum:21</h2>
          {/* <p className="text-gray-500">Ayat 21</p> */}
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
          <img src="\bismillah.png" className="w-3/4 lg:w-1/3 h-full mx-auto mb-2" />
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s pb-2">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"> Dengan mengharap Rahmat dan Ridho Allah SWT. Kami bermaksud menyelenggarakan <br />Pernikahan Putra - Putri kami :</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <img src="/photos/her.jpg" alt="cpw" className="h-350px w-350px object-cover object-center relative rounded-full" />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font text-5xl font-display font-medium mt-4">Chintia Arisandi Hidayat</h2>
              <span className="inline-block h-1 w-10 rounded bg-white mt-4 mb-2"></span>
              <p className="text-gray-900 title-font tracking-wider text-sm font-light">
                <span className="font-medium">Putri Ke-1 dari </span><br />
                Bapak Arif Hidayat, S. Kep. Ns. <br />&<br />
                Ibu Endang Sumarmi, SST.
              </p>
              <div className="inline-flex space-x-2">
                <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
                  <img src="/logo/iconfinder_twitter_2959740.svg" className="h-24px w-24px fill-white" />
                </a>
                <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
                  <img src="/logo/iconfinder_instagram_4691240.svg" className="h-24px w-24px fill-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            {/* <div className="md:w-1/2 inline-flex items-center justify-center rounded-full bg-white-100 text-white-500 mb-5 flex-shrink-0"> */}
            <img src="/photos/me.jpg" alt="cpp" className="h-350px w-350px object-cover object-center relative rounded-full" />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font text-5xl font-display font-medium mt-4">Ahlul Karom</h2>
              <span className="inline-block h-1 w-10 rounded bg-white mt-4 mb-2"></span>
              <p className="text-gray-900 title-font tracking-wider text-sm font-light">
                <span className="font-medium">Putra Ke-3 dari </span><br />
                Bapak Drs. H. Maksum <br />&<br />
                Ibu Hj. Sulastri, S.Pd.
              </p>
              <div className="inline-flex space-x-2">
                <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
                  <img src="/logo/iconfinder_twitter_2959740.svg" className="h-24px w-24px fill-white" />
                </a>
                <a className="mt-3 text-white bg-white inline-flex items-center rounded-full mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-brand-600">
                  <img src="/logo/iconfinder_instagram_4691240.svg" className="h-24px w-24px fill-white" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* <section name="event" className={styles['section-pattern'] + " flex items-center justify-center flex-wrap lg:flex-nowrap lg:flex-row text-gray-600 body-font my-4 mx-4 lg:mx-8"} >

    </section> */}

    <section className="relative lg:overflow-hidden font-sans">
      {/* lg:opacity-100 opacity-50 */}
      <div className="absolute inset-0 z-negative">
        <img src="/photos/IMG-20210424-WA0012.jpg" className="w-full h-full object-cover object-center rounded"></img>
      </div>

      <div className="absolute inset-0 z-negative">
        <div className="box-border mx-2 mt-0 mb-0 wx-[full-2rem] lg:m-8 lg:w-[full-4rem] h-full bg-brand-900 opacity-75"></div>
      </div>

      <div className="flex items-center justify-center flex-col min-h-[screen-5] text-white body-font">
        <div className="container px-5 py-8 mx-auto text-center">
          {/* <img src="/engagement.svg" className="h-24px w-24px fill-white" /> */}
          <EngagementRing className="inline-block mx-auto w-100px h-100px fill-white my-8" />
          <div className="flex flex-col w-full mb-6">
            <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Akad Nikah</h3>
            <span className="inline-block self-center h-1 w-10 rounded bg-white mt-2 mb-4"></span>
            <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed mb-1">Saturday, May 22<sup>th</sup>, 2021</p>
            <p className="lg:w-2/3 mx-auto font-sans font-thin">09.00 WIB</p>
          </div>
          <div className="flex flex-col text-center mt-16 mx-auto">
            <h3 className="font-medium text-2xl lg:text-4xl font-serif tracking-wide my-4">Resepsi</h3>
            <span className="inline-block self-center h-1 w-10 rounded bg-white mt-2 mb-4"></span>
            <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed mb-1">Saturday, May 22<sup>th</sup>, 2021</p>
            <p className="lg:w-2/3 mx-auto font-sans font-thin mb-4">09.00 WIB</p>
            <p className="lg:w-2/3 mx-auto font-sans font-semibold leading-relaxed">Kediaman Mempelai Wanita</p>
            <p className="lg:w-2/3 mx-auto font-sans font-thin">Desa Plandi Utara RT 21/RW 05 Kec. Jombang, Kab. Jombang</p>
          </div>
          <div className="flex flex-col text-center mt-16 mx-auto">
            <button className="mx-auto text-white bg-brand-500 rounded-3xl border-0 py-1 px-8 focus:outline-none hover:bg-brand-600 rounded text-lg font-sans">Buka Undangan</button>
          </div>
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} */}
          <iframe className="absolute inset-0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.7853547030128!2d112.24348062917821!3d-7.559555599659259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzMnMzQuNCJTIDExMsKwMTQnMzguNSJF!5e0!3m2!1sid!2sid!4v1621077842151!5m2!1sid!2sid&amp;width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe>
          {/* <iframe class="absolute inset-0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe> */}
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
</section>

  </>)
}

export default Landing;