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
      .select('nama, invite_code')
      .order('nama')
    console.log(error)
    console.log(data)
    setTamus(data)
  }

  const uploadTamu = async () => {
    console.log('inserting')
    const { data, error } = await supabase
      .from('tamu')
      .insert(
        [
          {
            "nama": "KALTENG 56",
            "tujuan": "Kalimantan Tengah",
            "acara": 1,
            "sesi": 2,
            "invite_code": "KALTENG56"
          },
          {
            "nama": "STIS JOMBANG",
            "tujuan": "Di Tempat",
            "acara": 1,
            "sesi": 2,
            "invite_code": "STISJOMBANG"
          },
          {
            "nama": "ALUMNI KOSAN IJO",
            "tujuan": "Di Tempat",
            "acara": 1,
            "sesi": 2,
            "invite_code": "KOSANIJO"
          },
          {
            "nama": "Siti Mariyah, SST. MT",
            "tujuan": "Di Tempat",
            "acara": 1,
            "sesi": 2,
            "invite_code": "SITIMARIYAH"
          },
          {
            "nama": "Mbak Lina & Keluarga",
            "tujuan": "Barito Selatan",
            "acara": 1,
            "sesi": 2,
            "invite_code": "LINA88"
          },
          {
            "nama": "Bu Dina",
            "tujuan": "Barito Selatan",
            "acara": 1,
            "sesi": 2,
            "invite_code": "DINA25"
          },
          {
            "nama": "Eddy Surahman, SST., M.Si",
            "tujuan": "BPS Kotawaringin Timur",
            "acara": 1,
            "sesi": 2,
            "invite_code": "EDDY87"
          },
          {
            "nama": "Desy Erviana, SST. & Suami",
            "tujuan": "BPS Kabupaten Purwakarta",
            "acara": 1,
            "sesi": 2,
            "invite_code": "DESY87"
          },
          {
            "nama": "Alumni X.4 SMA N 7 Bandar Lampung",
            "tujuan": "Di Tempat",
            "acara": 2,
            "sesi": 2,
            "invite_code": "X4SMA7"
          },
          {
            "nama": "Abednego Delta Pradana",
            "tujuan": "BPS Gunung Mas",
            "acara": 1,
            "sesi": 2,
            "invite_code": "ABED95"
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
    console.log("fetch tamu")
    let { data, error } = await supabase
      .from('tamu')
      .select('*')
      .eq('invite_code', code)
      .single()
    console.log(data)
    console.log(error)
    setGuest(data)
    console.log(guest)
  }

  const getWA = () => {
    let tamu = guest ?? { "nama": "A", "tujuan": "B", "acara": 1, "sesi": 1, "invite_code": "A11" }
    tamu.waktu = (tamu.acara == 2 ? "Minggu, 6 Juni 2021" : "Sabtu, 22 Mei 2021")
    tamu.lokasi = (tamu.acara == 2 ? "Gunung Terang, B. Lampung" : "Jombang, Jawa Timur")
    console.log('getwa')
    const template = `Kepada Yth, 
Bapak/Ibu/Saudara/i : *${tamu.nama}*

_Bismillahirrahmanirrahim_
_Assalamu'alaykum Warahmatullahi Wabarakatuh_

”Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum : 21)"

Dengan mengharap Rahmat dan Ridho Allah Subhanallahu wa Ta'ala, kami bermaksud menyelenggarakan acara pernikahan kami:

        *Chintia Arisandi Hidayat*
                            *&*
                  *Ahlul Karom*

yang insyaAllah akan dilaksanakan pada:

🗓  *${tamu.waktu}*
📍  *${tamu.lokasi}*
📨. https://ckwedding.id/invite/${tamu.invite_code}

Merupakan suatu kehormatan dan kebahagiaan apabila teman-teman berkenan hadir dan atau memberikan doa restu kepada kami.
Terima kasih.

_Wassalamu'alaykum Warahmatullahi Wabarakatuh_
    `
    return (template)
  }

  return (
    <>
      Welcome to Tezt!
      <button className="border-1 m-2 px-4 py-2 border-green-50" onClick={uploadTamu} >Upload Template Data</button>
      {/* <br />
      <textarea className="w-full h-full" value={JSON.stringify(tamus)} />
      <br />
      <button className="border-1 px-2 py-4 border-green-50" onClick={fetchAllTamu} >Refresh Data</button>
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
      {/* <select onChange={(e) => {setInviteCode(e.target.value)} } > */}
      <select onChange={(e) => { fetchTamu(e, e.target.value)}} >
        <option value={""}>-- Pilih Nama Tamu Undangan --</option>
        {tamus.map((tamu) =>
          <option value={tamu.invite_code}>{tamu.nama}</option>
        )}
      </select>
      {/* <button className="border-1 rounded m-2 px-4 py-2 border-green-50" onClick={e => fetchTamu(e, inviteCode)} >Get Data</button> */}
      <CopyToClipboard text={getWA()}>
        <button className="border-1 rounded my-2 px-4 py-2 border-green-50">Copy to clipboard</button>
      </CopyToClipboard>
      <br />
      <textarea className="w-full h-100" value={getWA()}/>
      <br />
    </>
  )
}

export default People;


