import React from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

const CustomInput = ({ control, name, label, placeholder }) => {
	return (
		<div>
			<FormField
				control={control}
				name={name}
				render={({ field }) => (
					<div className='flex flex-col gap-1.5'>
						<FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>
							{label}
						</FormLabel>
						<div className='flex w-full flex-col'>
							<FormControl>
								<Input
									placeholder={placeholder}
									className='text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500'
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-12 text-red-500 mt-2' />
						</div>
					</div>
				)}
			/>
		</div>
	);
};

export default CustomInput;
