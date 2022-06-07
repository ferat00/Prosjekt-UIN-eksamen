/* 
koden her ble tatt fra
https://xn--fullstkk-o0a.no/courses/sanity/06-sanity-groq-list/
og
https://xn--fullstkk-o0a.no/courses/sanity-events/12-react-portable-text/
*/

import client from "../client";

const eventFields = `
_id,
title,
"slug": slug.current,
slogan,
portable[]{...},
preAmble,
initialContent,
box,
`;

export const getTjeneste = async () =>{
        const data = await client.fetch(`*[_type == "tjeneste"]{${eventFields}}`);
    return data;
}