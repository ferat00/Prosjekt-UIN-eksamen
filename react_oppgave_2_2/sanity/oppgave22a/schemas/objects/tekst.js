/* 
koden her er inspirert av
https://xn--fullstkk-o0a.no/courses/sanity/03-schema/
*/

const tekst = {
    type: 'object',
    name: 'tekst',
    title: 'Tekst',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: Rule => Rule.required(),
            description: 'Write your event title here',
        },
        {
            type: 'text',
            name: 'text',
            title: 'Text',
        },
      
    ],

}

export default tekst;