import React from 'react'
const Input = (props) => {
    const {label,tag,type,options,f1,name,val,errormsg,isShowError,values}=props;
    function f11(){
        switch(type){
            case "text":return <input type={type} onChange={f1} name={name} value={val} className='form-control'/>
            case "radio":return options.map((val1,ind)=>{return <><input type={type}  onChange={f1} value={values[ind]} name={name}/><span className='m-2'>{val1}</span></>})
        }
    }
  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{label} : </b>
        </div>
        <div className='col-sm-3'>
            {f11()}

        </div>
        <div className='col-sm-4'>
            {isShowError && <b className='text-danger'>{errormsg}</b>}

        </div>
    </div>
  )
}
export default Input
