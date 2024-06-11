import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const authFormSchema = () =>
	z.object({
		firstName: z.string().min(3),
		lastName: z.string().min(3),
		amount: z.string().min(2),
		email: z.string().email(),
		userName: z.string().min(8),
	});
