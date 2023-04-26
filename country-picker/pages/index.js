import Image from 'next/image'
import SearchComponent from './components/SearchComponent'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <SearchComponent/>
    </main>
     
  )
}
