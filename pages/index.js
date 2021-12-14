import Head from 'next/head'
import Nav from '../components/Nav'
import CourseCard from '../components/CourseCard'

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <Head>
        <title>Einstar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex space-x-4">
      <section className="h-screen"> 
        <p className="uppercase text-gray-400">topics</p>
        <ul> 
          <li className="nav-item">all</li>
          <li className="nav-item">client work</li>
          <li className="nav-item">design</li>
          <li className="nav-item">developement</li>
          <li className="nav-item">languages</li>
          <li className="nav-item">management</li>
          <li className="nav-item">tools</li>
        </ul>
      </section>
        <section className="flex-grow overflow-y-auto grid grid-cols-4 gap-5 p-3"> 
          {
            [...Array(8)].map((index) => <CourseCard key={index} />)
          }
        </section>
      </main>
      <footer className="">
       
      </footer>
    </div>
  )
}
