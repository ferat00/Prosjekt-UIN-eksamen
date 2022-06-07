/* 
denne koden er hentet fra:
https://xn--fullstkk-o0a.no/courses/sanity/05-sanity-client/
*/


import sanityClient from '@sanity/client'

const options = {
  projectId: "bg172o0u",
  dataset: 'production',
  token: 'skGPigTVCfVNP65OnNgcu9WbWmxMpSYyfloFag8CRp3B43gr9PHKyGl4y5kayjVYiQVlU79ZYYW5jubm4CYNveIws1r8W96ZkRjOkHdArcl095wFA3RhaksllrtbJUlQA9UJIlghvomoxdjDdExP6obsWghyw8z26xT1lVJjgg4plFa6mNZu',
  apiVersion: '2021-05-07',
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client;