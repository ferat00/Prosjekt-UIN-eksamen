import {PortableText} from '@portabletext/react';
import BlockContent from '@portabletext/react';

/*  
koden til PortableContent ble hentet fra
https://xn--fullstkk-o0a.no/courses/sanity-events/11-sanity-portable-text/
*/
const PortableContent = ({data}) => {

    return <PortableText value={data || []}/>
}
 
export default PortableContent;