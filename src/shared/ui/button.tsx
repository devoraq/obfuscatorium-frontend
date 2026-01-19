import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@shared/lib';

const buttonVariants = cva(
	cn(
		'cursor-pointer disabled:cursor-not-allowed',
		'inline-flex items-center justify-center gap-2',
		'[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
		'text-sm font-medium transition-all',
		'disabled:opacity-50 disabled:hover:opacity-50',
		'whitespace-nowrap rounded-md shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
	),
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90 disabled:hover:bg-primary',
				destructive: cn(
					'bg-destructive hover:bg-destructive/90 disabled:hover:bg-destructive',
					'dark:bg-destructive/60 dark:disabled:hover:bg-destructive/60',
					'text-white',
					'focus-visible:ring-destructive/20 disabled:focus-visible:ring-destructive/20',
					'dark:focus-visible:ring-destructive/40 dark:disabled:focus-visible:ring-destructive/40',
				),
				outline: cn(
					'bg-background hover:bg-accent disabled:hover:bg-background',
					'dark:bg-input/30 dark:hover:bg-input/50 dark:disabled:hover:bg-input/30',
					'border',
					'dark:border-input',
					'shadow-xs',
					'hover:text-accent-foreground disabled:hover:text-inherit',
				),
				secondary: cn('bg-secondary hover:bg-secondary/80 disabled:hover:bg-secondary', 'text-secondary-foreground'),
				ghost: cn('hover:bg-accent disabled:hover:bg-inherit', 'dark:hover:bg-accent/50', 'hover:text-accent-foreground disabled:hover:text-inherit'),
				link: cn('text-primary underline-offset-4', 'hover:underline disabled:hover:decoration-none'),
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
				'icon-sm': 'size-8',
				'icon-lg': 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
