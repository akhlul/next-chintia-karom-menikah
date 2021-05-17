import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import supabase from '../../supabase'

// Library
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Component
import Landing2 from '../../components/landing2'

// export async function getStaticPaths() {
//   return { paths: [], fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { code } = params;
//   console.log(code)

//   try {
//     const tamu = await fetchTamu(code);
//     console.log(tamu)

//     // if (!tamu) {
//     //   return {
//     //     redirect: {
//     //       destination: '/',
//     //       permanent: false,
//     //     },
//     //   }
//     // }
//     // return { props: { tamu } }

//     // test only
//     return tamu ? { props: { tamu } } : { notFound: true };
//   } catch (error) {
//     console.error(error);
//     // return {
//     //   redirect: {
//     //     destination: '/',
//     //     permanent: false,
//     //   },
//     // }

//     // test only
//     return { notFound: true }
//   }
// }

const fetchTamu = async (code) => {
  let { data, error } = await supabase
    .from('tamu')
    .select('*')
    .eq('invite_code', code)
    .single()
  // console.log(error)
  // console.log(data)
  return data
}

const Invites = ({ tamu }) => {
  const router = useRouter()

  // // If the page is not yet generated, this will be displayed
  // // initially until getStaticProps() finishes running
  // if (router.isFallback) {
  //   return (
  //     <Loader
  //       className="absolute inset-0 z-100 flex items-center justify-center bg-brand-500"
  //       visible={true}
  //       type="Puff"
  //       color="#FFF"
  //       height={100}
  //       width={100}
  //     // timeout={3000} //3 secs
  //     />
  //   )
  //   // return <div>Loading...</div>
  // }

  return (
    <Landing2 tamu={tamu}/>
  )
}

Invites.getInitialProps = async (ctx) => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }

  try {
    const { code } = ctx.query;
    console.log(ctx.query)
    const tamu = await fetchTamu(code);
    console.log(tamu)

    if (!tamu) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return { tamu: tamu }

    // test only
    // return tamu ? { tamu } : { notFound: true };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

    // test only
    // return { notFound: true }
  }
}

export default Invites