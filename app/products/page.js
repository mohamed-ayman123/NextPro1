import Link from "next/link"

const products=[{id:1,name:"phone",price:950},
    {id:2,name:"laptop",price:1000},
    {id:3,name:"headphone",price:150}
]
export default function prodctsPad(){
   return(
     <main className="min-h-screen">
        <h1 className="text-3xl font-bold mb-6">products pad</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            products.map((p)=>(
                <div key={p.id} className="bg-white p-4 rounded shadow">
                <h2 className="text-2xl font-bold text-amber-200">{p.name}</h2>
                <h2 className="text-2xl font-bold text-amber-200">{p.price}</h2>
                <Link href={`/products/${p.id}`} className="text-blue-700 inline-block">view details</Link>
                </div>
            ))
        }
        </div>

    </main>
   )
}