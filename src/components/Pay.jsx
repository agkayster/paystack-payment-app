import React from 'react';
/* define our form */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { authFormSchema } from '../lib/utils';
import { Form } from './ui/form';
import CustomInput from './CustomInput';

const Pay = () => {
	const formSchema = authFormSchema();

	// 1. Define your form.
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			amount: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = () => {};

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4'>
					<div className='flex flex-col gap-4 py-6 px-6 border-black border-2'>
						<CustomInput
							control={form.control}
							name='userName'
							label='Username'
							placeholder='john Doe'
						/>
						<CustomInput
							control={form.control}
							name='firstName'
							label='First Name'
							placeholder='e.g John'
						/>
						<CustomInput
							control={form.control}
							name='lastName'
							label='Last Name'
							placeholder='e.g Doe'
						/>
						<CustomInput
							control={form.control}
							name='email'
							label='Email Address'
							placeholder='e.g johnDoe@gmail.com'
						/>
						<CustomInput
							control={form.control}
							name='amount'
							label='Amount'
							placeholder='e.g 500'
						/>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default Pay;
