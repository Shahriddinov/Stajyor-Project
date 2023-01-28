import Filter from '../components/Filter';
import './Talants.scss';
import Freelancer from '../components/Freelancer';
// import Round from '../../NonAuth/Round'
function App() {
  return (
   <div className='App'>
   <Freelancer/>
   <Filter/>
   {/* <div className='Round'>
   <Round/>
   </div> */}
   </div>
  );
}

export default App;
