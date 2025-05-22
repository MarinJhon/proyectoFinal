export function useLayout(pathname: string ) {
    const routes= [{
        path: '/',
        name: 'Home'
    }, 
    {
        path: '/user',
        name: 'Usuarios'
    },
    
    ];

    const title = pathname === "/"
    ? "Login"
    : pathname === "/user"
    ? "User"
    : "blog";
    return{
       title, routes
    }
}