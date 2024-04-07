import React, { useState, useEffect } from 'react';
import contact_img from './../img/auc.gif';
import './component.css'; // Import the CSS file for styling
import loadingImg from './../img/loading.gif'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fireexp-6380f-default-rtdb.firebaseio.com/fireexp.json');
                const jsonData = await response.json();
                if (jsonData) {
                    // const dataArray = Object.keys(jsonData).map(key => ({ id: key, message: jsonData[key].message }));
                    // setData(dataArray);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false); //akp
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any of the fields are empty
        if (!formData.name || !formData.email || !formData.message) {
            setAlert(<div className="alert alert-danger">Please fill out all fields.</div>);
            return;
        }

        setLoading(true);
        setAlert(<div className="alert alert-info">Submitting...</div>);
        try {
            const response = await fetch('https://fireexp-6380f-default-rtdb.firebaseio.com/fireexp.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const jsonData = await response.json();
            console.log('Form data submitted:', jsonData);
            setAlert(<div className="alert alert-success">Form submitted successfully!</div>);
            // Reset form data after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
            setAlert(<div className="alert alert-danger">Error submitting form data.</div>);
        }
        setLoading(false);
    };


    return (
        <div className='contact-form mt-3 position-relative'>
            <div className='contact-image' style={{ backgroundImage: `url(${contact_img})` }}>
                <h1 className='text-center text-white'>Contact Me</h1>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' className='form-control w-100 mt-2' placeholder='Name' value={formData.name} onChange={handleChange} />
                        <input type="text" name='email' className='form-control mt-2' placeholder='Email' value={formData.email} onChange={handleChange} />
                        <textarea name="message" cols="30" rows="5" className='form-control mt-2' placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit" className="btn btn-outline-primary mt-2 d-flex ms-auto">Submit</button>
                    </form>
                    {loading && <img src={loadingImg} alt='Loading' className='loading-img'/>}
                    <div className="mt-2">
                        {alert}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
