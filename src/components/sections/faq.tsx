'use client';

import { useState } from 'react';
import {
	Button,
	CardContent,
	Collapse,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import { IconPlus as IconExpand } from '@tabler/icons-react';
import { Card } from '@/components/ui/card';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `Support Center`;

// Put Section SubHeadline here
const subHeadline = `Frequently asked questions`;

// Put Section Items here
const items: Item[] = [
	{
		question: 'What is Feedology?',
		answer: `Feedology is a simple app that helps Shopify merchants create, manage, and sync their product feeds to Google Merchant Center - without using spreadsheets or manual uploads.`,
	},
	{
		question: 'Do I need a Google Merchant Center account?',
		answer: `Yes. Feedology connects directly to your existing Google Merchant Center account to publish your product feed. If you don't have one yet, we'll guide you through the setup process.`,
	},
	{
		question: 'How often does Feedology update my feed?',
		answer: `Your feed automatically stays in sync with your Shopify store. Any product change - price, inventory, title, or image - will be updated in Google Merchant Center according to your sync schedule.`,
	},
	{
		question: 'Can I choose which products appear in my feed?',
		answer: `Absolutely. You can include or exclude products based on collections, tags, or specific conditions - giving you full control over what goes live on Google Shopping.`,
	},
	{
		question: 'What happens if my products get disapproved?',
		answer: `Feedology's Dashboard shows exactly which items have issues and why. You can fix them directly in Shopify and re-sync instantly.`,
	},
];

interface Item {
	question: string;
	answer: string;
}

export default function Faq() {
	return (
		<Container id="support" maxWidth="md" sx={{ py: { xs: 5, md: 12.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Stack spacing={{ xs: 4, md: 8 }}>
					<Stack spacing={1.5}>
						<Typography
							color="accent"
							textAlign="center"
							sx={{ whiteSpace: 'pre-line' }}
							variant="subtitle1"
						>
							{headline}
						</Typography>
						<Typography textAlign="center" variant="h2">
							{subHeadline}
						</Typography>
					</Stack>
					<Stack spacing={2}>
						{items.map((item) => (
							<FaqItem
								key={item.question}
								question={item.question}
								answer={item.answer}
							/>
						))}
					</Stack>
				</Stack>
			</RevealSection>
		</Container>
	);
}

function FaqItem({ question, answer }: Item) {
	const [open, setOpen] = useState(false);
	return (
		<Card
			backgroundColor={{ light: 'rgba(255, 255, 255, 0.5)', dark: '#282828' }}
			borderColor={{ light: '#fff', dark: '#555' }}
			borderRadius={24}
			gradientColor={{ light: '#eee', dark: '#555' }}
			gradientOpacity={0.2}
			gradientSize={200}
		>
			<CardContent
				sx={{
					px: { xs: 3, md: 4 },
					py: { xs: 2, md: 3 },
					paddingBottom: { xs: '16px !important', md: '24px !important' },
				}}
			>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					spacing={2}
				>
					<Typography variant="h5">{question}</Typography>
					<Button
						color="secondary"
						onClick={() => setOpen(!open)}
						sx={{
							px: 2,
							minWidth: 'auto',
							transform: open ? 'rotate(225deg)' : 'rotate(0deg)',
							transition: 'transform 0.3s ease-in-out',
						}}
					>
						<IconExpand size={24} />
					</Button>
				</Stack>
				<Collapse in={open} timeout="auto">
					<Typography color="textSecondary" sx={{ mt: 2 }} variant="subtitle1">
						{answer}
					</Typography>
				</Collapse>
			</CardContent>
		</Card>
	);
}
