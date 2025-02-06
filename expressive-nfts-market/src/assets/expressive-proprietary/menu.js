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
                links: '/roadmap'
            },
            {
                id: 4,
                sub: 'Our Mission',
                links: '/ourmission'
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
        links: '/hellacollections'
    },
    {
        id: 4,
        name: 'Artist',
        links: '/artists'
    },
    
]

export default menus;