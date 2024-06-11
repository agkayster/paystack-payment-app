import React, { useState } from 'react';
/* define our form */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

import { authFormSchema } from '../lib/utils';
import { Form } from './ui/form';
import CustomInput from './CustomInput';
import { Button } from './ui/button';

const Pay = () => {
	const [isLoading, setIsLoading] = useState(false);

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
			<div className='flex items-center justify-center border w-full h-16 bg-green-500'>
				<h1 className='text-white font-bold text-lg'>PAYMENT PAGE</h1>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-4'>
					<div className='flex flex-col gap-4 py-6 px-6'>
						<CustomInput
							control={form.control}
							name='userName'
							label='Username'
							placeholder='e.g john Doe'
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
						<Button
							type='submit'
							className='bg-[#0179FE] text-16 rounded-lg border font-semibold text-white'
							disabled={isLoading}>
							{isLoading ? (
								<>
									<Loader2
										size={20}
										className='animate-spin'
									/>{' '}
									Loading...
								</>
							) : (
								'Submit'
							)}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default Pay;
