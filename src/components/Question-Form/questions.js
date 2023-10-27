import React from 'react'
import {data} from '@/components/Question-Form/data'
import { TextArea } from '../component/TextArea'
import Input from "@/components/component/Input"
import Select from "@/components/component/Select"
import { validate } from './validate'
import Loader from '../Loader/loader'
import axios from 'axios'
import { toast } from 'react-toastify';



const Questions = () => {
    var n=0;
    const [data1,setData1]=React.useState(data);
    const [showloader,setShowLoader]=React.useState(false);
    const f1=(eve)=>{
        const {value,name}=eve.target;
        let dup_data=JSON.parse(JSON.stringify(data1));
        let s=dup_data.find((obj)=>{return obj.name==name});
        s.val=value;
        validate(s)
        setData1(dup_data);
    }
    const fnSave=()=>{
        let  dataobj={}
        let content_obj=JSON.parse(JSON.stringify(data1))
        content_obj.forEach((obj)=>{
            dataobj[obj.name]=obj.val;
            validate(obj);
        })
        let isInvalid=content_obj.some((obj)=>{
            return obj.isShowError
        })
        setData1(content_obj);
        if(isInvalid)return;
        
        setShowLoader(true);
        axios.post("http://localhost:2021/que/que-save",{data:dataobj})
        .then((res)=>{
            const {acknowledged,insertedId} =res.data;
            setShowLoader(false);
        if(acknowledged && insertedId){
            toast.success('Successfully Inserted');
            content_obj.forEach((obj)=>{
                obj.val=''
             })
             setData1(content_obj)
            }else{
                toast.error('Not inserted , try again.');
            }
        }).catch((e)=>{
            setShowLoader(false)
            toast.error('Something went wrong '+e);
        })
        
        

        
    }

  return (
    <div className='container-fluid'>
        {
            data1.map((v,i)=>{
                switch(v.tag){
                    case "TextArea":return <TextArea key={i} f1={f1} {...v}/>
                    case "Input":return <Input key={i} f1={f1} {...v}/>
                    case "Select":return <Select key={i} f1={f1} {...v}/>

                }
            })
        }
        <div className='row'>
            <div className='offset-sm-5 col-sm-1'>
                <button onClick={fnSave} className='btn btn-primary'>Submit</button>
            </div>
        </div>
        {showloader && <Loader></Loader>}

    </div>
  )
}
export default Questions