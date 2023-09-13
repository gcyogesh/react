import Header from "./Header";
import Students from "./Footer";
import "./Style.css";


function App(){
let datas= [
	{id:1, name:'yogesh', address:'ktm'},
	{id:2, name:'heheh', address:'kd'},
	{id:3, name:'yogsdfjesh', address:'sdhf'},
];

	return(
		<>
		<Header></Header>
		<Students></Students>
		{/* <ul>
			{datas.length > 0 ? <div>
				{datas.map((item,index)=>{
				return <li key={index}>{item}</li>
			})}
			</div> : 'data not found'}
			
		</ul> */}
		  <table  width="100%" border={1}>
			<thead>
				<tr>
					<td>Id</td>
					<td>Name</td>
					<td>Address</td>
				</tr>
			</thead>
            <tbody>
          {datas.map((datas,index)=>{
            return(
              <tr key={index}>
                <td>{++ index}</td>
                <td>{datas.name}</td>
                <td>{datas.address}</td>
              </tr>
            )})}
        </tbody>

		  </table>


		  {(()=>{
			if(datas){
             return (
				<div>Yes it is</div>
			 )else()
			}
		  })}

		  



     



		</>
	)
}

export default App;




