import React from 'react'

function Miscellaneous() {
    const Data=[
      {id:1,  role:' React Js Front end developer',location:'Chennai',exp:'Experience 2 year',type:"Full-time",salary:"Up to 2,00,000 a year",requirement:'Minimum 3year of experience is required',skill:"HTML,Javascript,css",tool:'Experience with popular React.js workflows (Redux)API Integration'},
      {id:2,  role:' Python developer', location:' Pune',exp:'Experience 2 year',type:"Full-time ",salary:"Up to 2,00,000 a year",requirement:'Minimum 3year of experience is required',skill:"HTML,Javascript,css",tool:'Experience with popular React.js workflows (Redux)API Integration'},
      {id:3,  role:'.Net Full Stack Developer', location:' Bangalore',exp:'Experience 2 year',type:"Full-time ",salary:"Up to 2,00,000 a year",requirement:'Minimum 3year of experience is required',skill:"HTML,Javascript,css",tool:'Experience with popular React.js workflows (Redux)API Integration'},
      {id:4,  role:' Flutter Developer',location:' Mumbai',exp:'Experience 2 year',type:"Full-time ",salary:"Up to 2,00,000 a year",requirement:'Minimum 3year of experience is required',skill:"HTML,Javascript,css",tool:'Experience with popular React.js workflows (Redux)API Integration'},
    ];
  return (
    <div className='container mt-5'>
    <div className='row mb-4 ' >
      {Data.map((data) => (
        <div className='col-md-6' key={data.id}>
          <div className='card mb-3' style={{cursor:"pointer"}} >
            <div className='card-body'>
          
              <h5  id='job-role' className='card-title'>{data.role}</h5>
              <h5 id='job-location' className='card-title'><i class="bi bi-geo-alt"></i>{data.location}</h5>
              <div className='row '>

              <h5 id='job-exp' className='col-md-6 p-1 me-2 ms-3'>{data.exp}</h5>
              <h5 id='job-type' className=' col-md-6 p-1'>{data.type}<i class="bi bi-heart"></i></h5>
              </div>
             
              <h5 className='job-salary p-1'>{data.salary}</h5>
              <div className='job-require'>
                <p><i class="bi bi-dot"></i>{data.requirement}</p>
                <p><i class="bi bi-dot"></i>{data.skill}</p>
                <p><i class="bi bi-dot"></i>{data.tool}</p>
              </div>
              <button className='job-apply'>More Info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
  )
}

export default Miscellaneous