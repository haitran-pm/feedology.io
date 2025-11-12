import {
	Box,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { Card } from '@/components/ui/card';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `The simple setup process`;

// Put Section Items here
const items: Item[] = [
	{
		number: 1,
		title: 'Install the app',
		content: `Add Feedology to your Shopify store in a few clicks - no coding required.`,
	},
	{
		number: 2,
		title: 'Connect account',
		content: `Securely link your Merchant Center account to sync product data directly from Shopify.`,
	},
	{
		number: 3,
		title: 'Create your first feed',
		content: `Select your products, configure your feed settings, and publish to Google instantly.`,
	},
];

interface Item {
	title: string;
	content: string;
	number: number;
}

export default function Process() {
	return (
		<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Card
					backgroundColor={{ light: '#0E21A0', dark: '#0E21A0' }}
					gradientColor={{ light: '#3949B1', dark: '#3949B1' }}
					borderColor={{ light: '#3949B1', dark: '#3949B1' }}
					gradientOpacity={0.6}
				>
					<CardContent
						sx={{
							p: { xs: 6.25, md: 12.5 },
							paddingBottom: { xs: '50px !important', md: '100px !important' },
						}}
					>
						<Stack spacing={2}>
							<RevealSection delay={0.3} direction="up">
								<Typography color="#ffffff" variant="h3" textAlign="center">
									{headline}
								</Typography>
							</RevealSection>
							<RevealSection delay={0.5} direction="up">
								<Box>
									<Grid container spacing={{ xs: 2.5, md: 5 }}>
										{items.map((item, index) => (
											<ProcessItem key={index} {...item} />
										))}
									</Grid>
								</Box>
							</RevealSection>
						</Stack>
					</CardContent>
				</Card>
			</RevealSection>
		</Container>
	);
}

function ProcessItem({ title, content, number }: Item) {
	return (
		<Grid size={{ xs: 12, md: 4 }}>
			<Stack alignItems="center">
				<Box sx={{ mb: -10 }}>
					<Typography
						component="span"
						textAlign="center"
						sx={{
							background:
								'linear-gradient(180deg, #97A0D6 28%, rgba(151, 160, 214, 0) 72%)',
							backgroundClip: 'text',
							fontSize: '11.25rem',
							fontWeight: 'bold',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						{number}
					</Typography>
				</Box>
				<Stack spacing={1.5}>
					<Typography color="#ffffff" textAlign="center" variant="h5">
						{title}
					</Typography>
					<Typography color="#ffffff" textAlign="center">
						{content}
					</Typography>
				</Stack>
			</Stack>
		</Grid>
	);
}
