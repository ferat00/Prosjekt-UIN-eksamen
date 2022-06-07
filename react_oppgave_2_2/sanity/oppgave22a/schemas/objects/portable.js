/* 
koden her er inspirert av:
https://xn--fullstkk-o0a.no/courses/sanity-events-2/
*/
const portable = {
    type: 'portableText',
    name: 'content',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'},
                {title: 'Span', value: 'span'},
                
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'code', value: 'code'},
                    {title: 'EM', value: 'em'},
                ],
            }
        },  
    ],
}
export default portable;