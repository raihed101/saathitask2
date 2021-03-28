import useForm from './useFormSignin'
import validate from './validateInfo';



const FormSignin = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign in:</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label" >Username</label>
                    <input
                        id="username"
                        type="username"
                        name="username"
                        className="form-input"
                        placeholder="Enter username"
                        value={values.username}
                        onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}

                </div>

                <button className="form-input-btn">Sign in</button>
            </form>
        </div >
    );
}

export default FormSignin;