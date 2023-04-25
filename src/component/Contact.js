import React,{useState} from 'react'

export default function Contact() {
    const [data,setData]=useState({
        email:"",
        text:"",
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,

            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Here is my email address:${data.email} and my message is: ${data.text}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="text" value={data.text} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
