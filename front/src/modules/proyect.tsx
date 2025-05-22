"use client";
import { useLayout } from '@/hooks/rutas';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Children } from 'react'

interface Props{
    children : React.ReactNode;
}
export default function proyect({children}: Props) {
    const pathname = usePathname();
    const { title, routes } = useLayout(pathname);
  return (
   <main className="">
    <div className=" flex gap-6 items-center justify-center bg-amber-50 rounded-b-full   px-50 ">
    <img src="https://img.freepik.com/vector-premium/logotipo-inicio-proyecto-negocio-concepto-negocio-simbolo-identidad_136321-649.jpg"
        alt="logo" width={150} height={150}  /> 
    <div className='flex flex-col items-center'><h1 className='text-gray-950 font-bold text-2xl text-center'>
        Bienvenido A Tu Proyecto
    </h1></div>    
    </div>
    <div className='bg-amber-50 '>
       <div className="flex flex-col items-center bg-amber-50 rounded-b-full   px-50 ">
        {/* <h1 className="text-gray-950 font-bold text-2xl text-center">{user?.name || ''}</h1> */}
           <nav >
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-blue-400"
                        : "text-gray-950"
                    } font-semibold capitalize
                     text-lg`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav> 
       </div>
                 
    </div>
    {children}
  </main>
   
    
  )
}
