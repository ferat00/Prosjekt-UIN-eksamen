/* 
koden her er hentet fra:
https://xn--fullstkk-o0a.no/courses/sanity-events-2/02-sanity-create/
*/

import client from '../client'

export const createTjeneste = async (body) => {
  const { title, slug, slogan,preAmble,box } = body
  try {
    await client.create({ _type: 'tjeneste', title, slug:{"current": slug}, slogan, preAmble,box })
  } catch (error) {
    throw new Error(error)
  }
}