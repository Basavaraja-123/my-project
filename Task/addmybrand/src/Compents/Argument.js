import React, { useState, useEffect } from 'react'
import Operator from "./Operator.js";

const Argument = () => {
  const [Argument, setArgument] = useState([{ value: "myarg", label: "myarg", answer: "false", selected: true }]);
  const [largeMap, setlargeMap] = useState(new Map());
  

  useEffect(() => {
    
    setvalue();
  }, [Argument]
  )



  const setarg = (index) => {

    const addArgument = document.getElementsByClassName('myarg')[index].value;
    const addarg = [...Argument,];

    const argvalue = document.getElementsByClassName('mySelect')[index].value;

    addarg[index] = { value: addArgument, label: addArgument, answer: argvalue };

    setArgument(addarg);
    setvalue();

  }

  const constant = [
    { value: "false", label: "false", answer: "false", selected: true },
    { value: "true", label: "true", answer: "true" },
  ];
  const setvalue = () => {

    Argument.map((data, index) => {
      setlargeMap(map => new Map(map.set(data.value, data.answer)));
    })

    constant.map((data) => {
      setlargeMap(map => new Map(map.set(data.value, data.answer)));
    }
    )
  }
  const addArg = () => {
    const addarg = [...Argument, []];
    setArgument(addarg);


  }




  return (
    <>
      <div style={{ marginTop: "25px", marginLeft: "30px" }}>
        <div id='argContainer'>
          {Argument.map((data, index) => {
            return (
              <div key={index}>
                <input type="text" value={data.value} name="arg" className='myarg' placeholder='newarg' onChange={(data) => setarg(index)} />
                <select className="mySelect" onChange={() => setarg(index)}>
                  <option value="false">False </option>
                  <option value="true">True</option>
                </select>
              </div>
            )
          })}

        </div>
        <button id="btn" onClick={addArg}>+Add Arg</button>

        <br />
        <Operator Argument={Argument} largeMap={largeMap} constant={constant} />
      </div>
    </>
  )
}

export default Argument