import { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './index.css';


const Form = () => {

    const [isSubmited, setIsSubmited] = useState(false)
    function submitForm() {
        setIsSubmited(true)
    }

    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/img-2.svg" alt="spaceship" className="form-img" />
            </div>
            {!isSubmited ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>

    );
}

export default Form;