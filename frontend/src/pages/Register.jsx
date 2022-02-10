import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

export const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const { name, email, password, confirmPassword } = formData

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
		if (password !== confirmPassword) {
			toast.error('Passwords dont match')
		} else {
			const userData = {
				name,
				email,
				password,
			}
			dispatch(register(userData))
		}
	}
	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser />
				</h1>
				<p>Please Create an account</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							value={name}
							onChange={onChange}
							placeholder='Enter Name'
							required
						/>
					</div>
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
						<input
							type='password'
							className='form-control'
							id='confirmPassword'
							name='confirmPassword'
							value={confirmPassword}
							onChange={onChange}
							placeholder='Confirm Your Password'
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
