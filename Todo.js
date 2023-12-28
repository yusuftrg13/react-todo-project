import './App.css';
import React,{useState} from 'react'
function TodoList(){
    const[dutys,setDutys]=useState([]);
    const[newduty,setNewDuty]=useState('');

    function catchInput(event){
        setNewDuty(event.target.value);

    }
    function addDuty(){
        if(newduty.trim() !== ""){
            setDutys([...dutys,newduty]);
            setNewDuty('');
    

        }

       

    }
    function deleteDuty(index){
        const uptadedDuty=dutys.filter((_,i) => i !== index);
        setDutys(uptadedDuty);

    }
    return (
        <div className='todo-list'>

        <h1>TO-DO-LİST</h1>

        <div>
            <input type='text'
            placeholder='Yeni bir görev giriniz...'
            value={newduty}
            onChange={catchInput}
             />
             <button className='addbutton'
             onClick={addDuty}
             >Ekle</button>
        </div>

        <ol>
            {dutys.map((duty,index)=>
            <li key={index}>
                <span className='text'>{duty}</span>
                <button className='deletebutton' 
                onClick={()=>deleteDuty(index)}>
                Sil
                </button>
            </li>
            )}
        </ol>

        </div>);

    




}
export default TodoList;