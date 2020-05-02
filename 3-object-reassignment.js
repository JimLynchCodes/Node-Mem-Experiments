
// Gets the approximate memory used (in Mb)
const approxTotalMemory = () => {
    return process.memoryUsage().rss / 1024 / 1024
}



let obj = {}

const main = () => {

    console.log('Base: ', approxTotalMemory())

    const numbers = [...Array(50).keys()]

    numbers.forEach( (number, i) => {

        obj = {
            'repeat(5, 10)': {
                _id: '{{objectId()}}',
                index: '{{index()}}',
                guid: '{{guid()}}',
                isActive: '{{bool()}}',
                balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
                picture: 'http://placehold.it/32x32',
                age: '{{integer(20, 40)}}',
                eyeColor: '{{random("blue", "brown", "green")}}',
                name: {
                    first: '{{firstName()}}',
                    last: '{{surname()}}'
                },
                company: '{{company().toUpperCase()}}',
                email(tags) {
                    return `${this.name.first}.${this.name.last}@${this.company}${tags.domainZone()}`.toLowerCase();
                },
                phone: '+1 {{phone()}}',
                address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
                about: '{{lorem(1, "paragraphs")}}',
                registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
                latitude: '{{floating(-90.000001, 90)}}',
                longitude: '{{floating(-180.000001, 180)}}',
                tags: [
                    {
                        'repeat(5)': '{{lorem(1, "words")}}'
                    }
                ],
                range: '10',
                friends: [
                    {
                        'repeat(3)': {
                            id: '{{index()}}',
                            name: '{{firstName()}} {{surname()}}'
                        }
                    }
                ],
                greeting(tags) {
                    return `Hello, ${this.name.first}! You have ${tags.integer(5, 10)} unread messages.`;
                },
                favoriteFruit(tags) {
                    const fruits = ['apple', 'banana', 'strawberry'];
                    return fruits[tags.integer(0, fruits.length - 1)];
                },
                derp: Math.floor(Math.random() * 100)
            }
        }

        console.log(`After assignment ${i}: `, approxTotalMemory())
    })
    
    
    console.log(`Last: `, approxTotalMemory())

}

main()