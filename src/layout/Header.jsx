import uk from '../assets/united-kingdom.webp'
import spain from '../assets/spain.webp'
import catalonia from '../assets/flag.webp'

function Header() {
  return (
    <header className='container mx-auto py-10 lg:py-20 lg:px-72 '>
        <div className='flex gap-4 justify-center lg:justify-end '>
        <img className='h-16 w-16 hover:rotate-180 transition-transform duration-[1500ms] cursor-pointer' src={uk} alt="" />
        <img className='h-16 w-16 hover:rotate-180 transition-transform duration-[1500ms] cursor-pointer' src={spain} alt="" />
        <img className='h-16 w-16 hover:rotate-180 transition-transform duration-[1500ms] cursor-pointer' src={catalonia} alt="" />
        </div>
    </header>
  );
}

export default Header;