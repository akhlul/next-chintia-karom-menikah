import React, { useEffect, useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import supabase from '../supabase'

const People = () => {
  const [tamus, setTamus] = useState([])
  const [guest, setGuest] = useState({})
  const [inviteCode, setInviteCode] = useState("")

  useEffect(() => {
    fetchAllTamu()
  }, [])

  const fetchAllTamu = async () => {
    let { data, error } = await supabase
      .from('tamu')
      .select('*')
    console.log(error)
    console.log(data)
    setTamus(data)
  }

  const uploadTamu = async () => {
    console.log('inserting')
    const { data, error } = await supabase
      .from('tamu')
      .insert([
        {
          "nama": "R. Dwi Harwin Kusmaryo, S.E., M.A.",
          "tujuan": "Jakarta",
          "acara": 1,
          "sesi": 2,
          "invite_code": "HARWIN32"
        },
        {
          "nama": "Ianah El Sholikhah, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Tanah Laut",
          "acara": 1,
          "sesi": 2,
          "invite_code": "IANAH24"
        },
        {
          "nama": "Diyana Indah Sari, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Tapin",
          "acara": 1,
          "sesi": 2,
          "invite_code": "DIYANA11"
        },
        {
          "nama": "Dewi Intansari, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Kutai Kartanegara",
          "acara": 1,
          "sesi": 2,
          "invite_code": "INTAN50"
        },
        {
          "nama": "Liza Mega Yunita, SST & Suami",
          "tujuan": "BPS Kabupaten Maros",
          "acara": 1,
          "sesi": 2,
          "invite_code": "LIZAMEGA71"
        },
        {
          "nama": "Harista Dwi Kusumawardani, S.Tr.Stat & Suami",
          "tujuan": "BPS Kabupaten Landak",
          "acara": 1,
          "sesi": 2,
          "invite_code": "HARISTA97"
        },
        {
          "nama": "Khumaidi Subkhi, S.Tr.Stat. & Istri",
          "tujuan": "BPS Kabupaten Boalemo",
          "acara": 1,
          "sesi": 2,
          "invite_code": "KHUM87"
        },
        {
          "nama": "Yusriza Fahmi, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Seruyan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FAHMI71"
        },
        {
          "nama": "Nurul Afifah, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Tulangbawang",
          "acara": 1,
          "sesi": 2,
          "invite_code": "NURUL32"
        },
        {
          "nama": "Rahma Ardani, S.Tr.Stat. & Pasangan",
          "tujuan": "BPS Kabupaten Musi Banyuasin",
          "acara": 1,
          "sesi": 2,
          "invite_code": "RAHMA55"
        },
        {
          "nama": "Siti Sholikah, S.Tr.Stat",
          "tujuan": "Subdirektorat Neraca Jasa\nBPS RI",
          "acara": 1,
          "sesi": 2,
          "invite_code": "SISOL77"
        },
        {
          "nama": "Surya Kamala, S.Tr.Stat. & Suami",
          "tujuan": "BPS Kabupaten Bengkalis",
          "acara": 1,
          "sesi": 2,
          "invite_code": "SUR47"
        },
        {
          "nama": "Wahyu Nuraini, S.Tr.Stat",
          "tujuan": "BPS Kabupaten Kubu Raya",
          "acara": 1,
          "sesi": 2,
          "invite_code": "WAHY14"
        },
        {
          "nama": "Wirda Avie Nurizza, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Paser",
          "acara": 1,
          "sesi": 2,
          "invite_code": "WIRD38"
        },
        {
          "nama": "Easbi Ikhsan, S.Tr.Stat.",
          "tujuan": "",
          "acara": 1,
          "sesi": 2,
          "invite_code": "EASB66"
        },
        {
          "nama": "Fadlilah Rahmawati, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Nunukan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FADL35"
        },
        {
          "nama": "Sanjaya Abdillah Karim, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Penajam Paser Utara",
          "acara": 1,
          "sesi": 2,
          "invite_code": "SANJ45"
        },
        {
          "nama": "Fajar Khairiah Shafa, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Bone Bolango",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FAJR20"
        },
        {
          "nama": "Bagas Indra Sakti, S.Tr.Stat. & Pasangan",
          "tujuan": "BPS Kabupaten Raja Ampat",
          "acara": 1,
          "sesi": 2,
          "invite_code": "BAGAS50"
        },
        {
          "nama": "Anugrah Alief Pratama, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Manokwari",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ANUG58"
        },
        {
          "nama": "Sandhi Yoga Wiratama, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Kepulauan Sula",
          "acara": 1,
          "sesi": 2,
          "invite_code": "SANDH26"
        },
        {
          "nama": "Yusuf Arief Pratama, S.Tr.Stat. & Istri",
          "tujuan": "\tBPS Kabupaten Tana Toraja",
          "acara": 1,
          "sesi": 2,
          "invite_code": "YUSF47"
        },
        {
          "nama": "Desta Febriana Indriyantika, S.Tr.Stat.",
          "tujuan": "Subdirektorat Statistik Mobilitas Penduduk dan Tenaga Kerja\nBPS RI",
          "acara": 1,
          "sesi": 2,
          "invite_code": "DESF11"
        },
        {
          "nama": "Hardianshar, S.Tr.Stat",
          "tujuan": "BPS Kabupaten Timor Tengah Selatan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "HARRS64"
        },
        {
          "nama": "Zulfa Mufakkir Habibi, S.Tr.Stat.",
          "tujuan": "BPS Kota Tarakan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ZULL72"
        },
        {
          "nama": "Febriana Dwi Jayanti, S.Tr.Stat.",
          "tujuan": "BPS Kabupaten Lampung Selatan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FDJ76"
        },
        {
          "nama": "Fenanda Dwitha Kurniasari, SST.",
          "tujuan": "Subdirektorat Pengembangan Desain Sensus & Survei\nBPS RI",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FDK11"
        },
        {
          "nama": "Desnacita Harly Putri, SST.",
          "tujuan": "\tBPS Kabupaten Minahasa Selatan",
          "acara": 1,
          "sesi": 2,
          "invite_code": "DHP65"
        },
        {
          "nama": "Arina Rahmatika, SST. & Suami",
          "tujuan": "BPS Kabupaten Barru",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ARAH33"
        },
        {
          "nama": "Anggita Silmi Nabilah, SST. & Suami",
          "tujuan": "BPS Kabupaten Hulu Sungai Utara",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ASN27"
        },
        {
          "nama": "Fenny Afifah & Suami",
          "tujuan": "Jakarta",
          "acara": 1,
          "sesi": 2,
          "invite_code": "FEAF63"
        },
        {
          "nama": "Anita Desmarini, SST. & Suami",
          "tujuan": "BPS Kabupaten Gunung Mas",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ANID36"
        },
        {
          "nama": "Anita Dwi Permathasari, S.Tr.Stat.",
          "tujuan": "BPS Kota Pontianak",
          "acara": 1,
          "sesi": 2,
          "invite_code": "ANIP76"
        },
        {
          "nama": "Dannar Kurniawan Ajie Prasetya, S.Tr.Stat. & Pasangan",
          "tujuan": "BPS Kabupaten Toraja Utara",
          "acara": 1,
          "sesi": 2,
          "invite_code": "DANR77"
        },
        {
          "nama": "Saburai",
          "tujuan": "-",
          "acara": 2,
          "sesi": 2,
          "invite_code": "SABURAI32"
        }
      ])
    console.log(error)
    console.log(data)
    fetchAllTamu()
  }

  const deleteTamu = async (event, id) => {
    console.log('deleting')
    const { data, error } = await supabase
      .from('tamu')
      .delete()
      .eq('id', id)
    console.log(error)
    console.log(data)
    fetchAllTamu()
  }

  const fetchTamu = async (event, code) => {
    let { data, error } = await supabase
      .from('tamu')
      .select('*')
      .eq('invite_code', code)
      .single()
    console.log(error)
    console.log(data)
    setGuest(data)
  }

  const getWA = (guest = tamus[0  ]) => {
    console.log('getwa')
    return (`Kepada Yth, 
Bapak/Ibu/Saudara/i : *${guest.nama}*

_Bismillahirrahmanirrahim_
_Assalamu'alaykum Warahmatullahi Wabarakatuh_

”Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum : 21)"

Dengan mengharap Rahmat dan Ridho Allah Subhanallahu wa Ta'ala, kami bermaksud menyelenggarakan acara pernikahan kami:

        *Chintia Arisandi Hidayat*
                            *&*
                  *Ahlul Karom*

yang insyaAllah akan dilaksanakan pada:

🗓  *Sabtu, 22 Mei 2021*
📍  *Jombang, Jawa Timur*
📨. https://ckwedding.id/invite/${guest.invite_code}

Merupakan suatu kehormatan dan kebahagiaan apabila teman-teman berkenan hadir dan atau memberikan doa restu kepada kami.
Terima kasih.

_Wassalamu'alaykum Warahmatullahi Wabarakatuh_
    `)
  }

  return (
    <>
      Welcome to Tezt!
      {/* <br />
      <textarea className="w-full h-full" value={JSON.stringify(tamus)} />
      <br />
      <button className="border-1 px-2 py-4 border-green-50" onClick={fetchAllTamu} >Refresh Data</button>
      <button className="border-1 px-2 py-4 border-green-50" onClick={uploadTamu} >Insert Data</button>
      <button className="border-1 px-2 py-4 border-red-50" onClick={e => deleteTamu(e, tamus.length - 1)} >Delete Data</button>

      <br />
      <br />
      Invite Code :
      <input className="w-full h-full border-2" onChange={e => setInviteCode(e.target.value)} />
      <br />
      <button className="border-1 rounded px-2 py-4 border-green-50" onClick={e => fetchTamu(e, inviteCode)} >Get Data</button>
      <br />
      <br /> */}
      <p>Generate invite tamu undangan : </p>
      <select onChange={(e) => setInviteCode(e.target.value)} >
        <option value={""}>-- Pilih Nama Tamu Undangan --</option>
        {tamus.map((tamu) =>
          <option value={tamu.invite_code}>{tamu.nama}</option>
        )}
      </select>
      <button className="border-1 rounded m-2 px-4 py-2 border-green-50" onClick={e => fetchTamu(e, inviteCode)} >Get Data</button>
      <CopyToClipboard text={getWA(guest)}>
        <button className="border-1 rounded my-2 px-4 py-2 border-green-50">Copy to clipboard</button>
      </CopyToClipboard>
      <br />
      <textarea className="w-full h-100" value={getWA(guest)} />
      <br />
    </>
  )
}

export default People;


