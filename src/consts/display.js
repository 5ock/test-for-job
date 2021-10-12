export const PAGES = [
    {
        url: '/home',
        active: false,
        label: 'Home'
    },
    {
        url: '/hookRedux',
        active: false,
        label: 'Hook Redux'
    },
    {
        url: '/videoAndPTZ',
        active: false,
        label: 'Video And PTZ'
    },
    {
        url: '/testParent',
        active: false,
        label: 'test parent',
        children: [
            {
                url: '/testChildren1',
                active: false,
                label: 'children 1'
            },
            {
                url: '/testChildren2',
                active: false,
                label: 'children 2'
            }
        ]
    }
]