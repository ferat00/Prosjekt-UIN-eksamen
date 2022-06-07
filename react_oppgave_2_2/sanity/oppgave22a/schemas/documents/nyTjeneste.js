/* 
koden her er inspirert av:
https://xn--fullstkk-o0a.no/courses/sanity/
*/
const nyTjeneste = {
    type: 'document',
    name: 'tjeneste',
    title: 'Tjeneste',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: Rule => Rule.required(),
            description: 'Write your event title here',
        },
        {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            description: 'Unique url for each tjeneste/service',
            validation: Rule => Rule.required(),            
        },
        {
            type: 'string',
            name: 'slogan',
            title: 'Slogan',
            validation: Rule => Rule.required(),
            description: 'slogan for each service',
        },
         {
            type: 'array',
            name: 'initialContent',
            title: 'initialContent',
            of: [{type: 'tekst'}]
        },  
        {
            type: 'text',
            name: 'preAmble',
            title: 'Ingress',
            validation: Rule => Rule.required(),
            description: 'Write your text here',
        },
        {
            type: 'content',
            name: 'portable',
            title: 'Portable Text',
        },
        {
            type: 'string',
            name: 'box',
            title: 'Hex Color',
            validation: Rule => Rule.required(),
            description: 'HexColor code',
        },
      
    ],

}

export default nyTjeneste;