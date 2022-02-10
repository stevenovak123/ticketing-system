import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const dispatch = useDispatch()

	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	)
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt />
				</h1>
				<p>Login</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							id='email'
							name='email'
							value={email}
							onChange={onChange}
							placeholder='Enter Email'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='Password'
							className='form-control'
							id='Password'
							name='pasword'
							value={password}
							onChange={onChange}
							placeholder='Enter Your Password'
							required
						/>
					</div>

					<div className='form-group'>
						<button className='btn btn-block'>Submit</button>
					</div>
				</form>
			</section>
		</>
	)
}
