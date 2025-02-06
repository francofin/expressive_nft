const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/'
    },
    {
        id: 2,
        name: 'About',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'About Us',
                links: '/about'
            },
            {
                id: 2,
                sub: 'Team',
                links: '/team'
            },
            {
                id: 3,
                sub: 'Road Map',
                links: '/road-map'
            },
            {
                id: 4,
                sub: 'Our Mission',
                links: '/our-mission'
            },
            {
                id: 5,
                sub: 'FAQ',
                links: '/faq'
            },
        ],
    },
    {
        id: 3,
        name: 'Collections',
        links: '/collections'
    },
    {
        id: 4,
        name: 'Contact',
        links: '/contact'
    },
    {
        id: 4,
        name: 'Artist',
        links: '/artists'
    },
    
]

export default menus;