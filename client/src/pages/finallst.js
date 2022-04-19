import ProffSelect from '../components/pselect';
import AppliedProffs from '../components/pdeselect';
import SideNavbar from "../components/sidenavbar";
import {useState} from 'react';

let proff = [['AKT',['Rahul','Ramon']],['SKS',['stud1','stud2','stud3','stud4']],['RNC',['stud5','stud6']],['RSS',['NILLL']]];


function FinalLst(){ 
    
    const [ openn,setopenn] = useState(false);
    function open(){
        setopenn(true);
    }

    return(
        <div>
    <SideNavbar />
    <div className='card-group'>
        <div className='card out'>
            <h4>Proffesor</h4>
            {list1}
        </div>
        {setopenn ? <Openflist/>: null}
    </div>
    </div>
    );
}

export default FinalLst;