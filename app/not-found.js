import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100vh"}}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Home</Link>
    </div>
  )
}