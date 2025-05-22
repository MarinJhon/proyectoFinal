import Proyect from "@/modules/proyect";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <Proyect>
     <main className="min-h-screen flex items-center justify-center bg-amber-50 gap-4 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6 ">
        <h1 className="text-4xl font-bold text-gray-900">¿Qué es una Startup?</h1>
        <p className="text-gray-700 text-lg">
          Una <strong>startup</strong> es una empresa emergente que busca desarrollar un modelo de negocio escalable, generalmente apalancado en tecnología e innovación. Se caracteriza por operar en un entorno de alta incertidumbre, con un enfoque ágil para adaptarse rápidamente al mercado y validar su propuesta de valor.
        </p>
        <p className="text-gray-700 text-lg">
          Este tipo de empresas suelen buscar inversión externa para crecer aceleradamente y alcanzar una posición dominante en su sector.
        </p>
        <div className="flex justify-end">
          <Link href="/blog">
            <button className="text-gray-950 bg-amber-50 hover:text-blue-700">Saber más</button>
          </Link>
        </div>
      </div>
      <img src="https://www.inversionsimple.com/wp-content/uploads/2019/10/Foto-trabajar-en-startups.png" alt="imagen" width={400} height={400}/>
    </main>
    </Proyect>
  );
}
