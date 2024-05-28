import Titulo from "../components/Titulo";
import ChartCostes from "../components/ChartCostes";
import Dataday from "../components/Dataday";

function Body() {
  return (
    <section className='p-4 flex justify-center mb-4 mx-4 bg-white rounded-3xl'>
    <div className="w-full">
       <Titulo />
       <ChartCostes />
       <Dataday />
    </div>
    </section>
  );
}

export default Body;