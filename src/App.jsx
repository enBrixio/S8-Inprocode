import Aside from './layout/Aside'
import Body from './layout/Body'
import Header from './layout/Header'

export default function App() {
  return (
    <>
      <section className='min-h-screen w-full bg-orange-50 flex justify-center'>
        <div className='w-full max-w-2xl'>
          <Header />
          <Aside />
          <Body />
        </div>
      </section>
    </>
  )
}


