import { useRef, useState } from "react"


function App() {


  const [show , setShow] = useState(false) 


const handleShow = ()=>{
  setShow(!show)
}

  const refshow = useRef(null) 

  const handleShowR =()=>{
    if (refshow.current.hidden) {
      refshow.current.hidden = false
    } else {
      refshow.current.hidden = true
    }
  }

  return (
    <>

      <div className="max-w-330 mx-auto text-center py-20">
        <button onClick={handleShow} className="px-3 py-2 cursor-pointer">Menu</button>
        <div className="">
        {show && (
          <ul className="flex flex-col gap-y-10 mt-5 p-5 border border-gray-500 inline-block">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        )}
        </div>
      </div>


      <div className="max-w-330 mx-auto text-center py-20">
        <button onClick={handleShowR} className="px-3 py-2 cursor-pointer">Menu</button>
        <div  className="">
          <ul ref={refshow} className="flex flex-col gap-y-10 mt-5 p-5 border border-gray-500 inline-block " hidden>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      

    </>
  )
}

export default App
