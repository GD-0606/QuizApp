import React from 'react'

const Select = (props) => {
    const {label,tag,answer_options,f1,name,val,errormsg,isShowError}=props;
  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{label} : </b>
        </div>
        <div className='col-sm-3'>
            <select name={name} className='form-control' onChange={f1}>
                <option value="">Please Select Option</option>
                {
                    answer_options.map((k,i)=>{
                        return <option  selected={k==val} value={k} key={i}>{k}</option>
                    })
                }
            </select>

        </div>
        <div className='col-sm-4'>
        {isShowError && <b className='text-danger'>{errormsg}</b>}

        </div>
    </div>
  )
}
export default  Select
