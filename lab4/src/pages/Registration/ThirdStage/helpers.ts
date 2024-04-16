import {z} from 'zod';

export enum PasswordStrength {
    Good,
    Bad,
    None,
}

export const inputDataSchema = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .refine((value) => {
            return /[A-Z]/.test(value);
        }, {message: 'Password must contain at least one uppercase letter'})
        .refine((value) => {
            return /\d/.test(value);
        }, {message: 'Password must contain at least one number'})
        .refine((value) => {
            return /[!@#$%^&*()_+\-=\[\]{};':",./<>?|\\ ]/.test(value);
        }, {message: 'Password must contain at least one special symbol'})
});

export const passwordSchema = inputDataSchema.pick({
    password: true
});

export const getStrengthTextColor = (strength: PasswordStrength) => {
    switch (strength) {
        case PasswordStrength.Good:
            return 'text-green-400';
        case PasswordStrength.Bad:
            return 'text-red-400';
        default:
            return '';
    }
}