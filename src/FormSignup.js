import useForm from './useFormSignup'
import validate from './validateInfo';


const FormSignup = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started on a free membership
                to the gym for 6 months! Create
                your account by filling out the form
                below.
                </h1>
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
                    <label htmlFor="email" className="form-label">Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}

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
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button className="form-input-btn">Sign up</button>
                <span className="form-input-login">Already have an account?<a href="/signin">Login here</a>
                </span>
            </form>
        </div>
    );
}

export default FormSignup;