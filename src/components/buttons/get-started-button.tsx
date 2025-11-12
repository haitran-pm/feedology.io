'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import { IconArrowRight as IconRightArrow } from '@tabler/icons-react';

// Put Button label here
const label = 'Install now';

export default function GetStarted({
	buttonLabel = label,
	fullWidth = false,
}: {
	buttonLabel?: string;
	fullWidth?: boolean;
}) {
	return (
		<Button
			component={Link}
			endIcon={<IconRightArrow />}
			fullWidth={fullWidth}
			href={'https://apps.shopify.com/?utm'}
			target="_blank"
		>
			{buttonLabel}
		</Button>
	);
}
