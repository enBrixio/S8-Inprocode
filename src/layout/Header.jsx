import uk from '../assets/united-kingdom.webp'
import spain from '../assets/spain.webp'
import catalonia from '../assets/flag.webp'

function Header() {
  return (
    <header className='py-5 lg:py-10 px-4'>
        <div className='flex gap-2 justify-center lg:justify-end'>
          <img className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer' src={uk} alt="UK Flag" />
          <img className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer' src={spain} alt="Spain Flag" />
          <img className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer' src={catalonia} alt="Catalonia Flag" />
        </div>
    </header>
  );
}

export default Header;


