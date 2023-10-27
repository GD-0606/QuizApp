import React from 'react'


export const TextArea = (props) => {
    const {label,tag,f1,name,val,errormsg,isShowError}=props
   
  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{label} : </b>
        </div>
        <div className='col-sm-3'>
            <textarea name={name} value={val} className='form-control' onChange={f1} ></textarea>

        </div>
        <div className='col-sm-4'>
        {isShowError && <b className='text-danger'>{errormsg}</b>}

        </div>
    </div>
  )
}
