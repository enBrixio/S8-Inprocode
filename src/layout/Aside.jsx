import arrowFront from '../assets/arrow.svg';
import arrowBack from '../assets/arrow_back.svg';

function Aside() {
    return (
        <aside className="p-4 mb-4">
            <div className="bg-orange-500 h-20 w-full rounded-3xl flex justify-between items-center px-10">
                <div>       
                    <h3 className="text-white text-lg">Balance total</h3>
                    <span className="text-white text-2xl font-bold">3.323 €</span>
                </div>
                <div className="flex items-center">
                    <img src={arrowBack} alt="arrow back" className="h-10 w-10 mr-2 cursor-pointer"/>
                    <img src={arrowFront} alt="arrow front" className="h-10 w-10 cursor-pointer"/>
                </div>
            </div>
        </aside>
    );
}

export default Aside;


  
  
  