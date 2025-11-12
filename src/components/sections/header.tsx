'use client';
import { useState } from 'react';
import {
	Box,
	Link,
	Container,
	Dialog,
	DialogContent,
	IconButton,
	Stack,
	Typography,
	Grid,
	useColorScheme,
} from '@mui/material';

import { IconMenu, IconX as IconClose } from '@tabler/icons-react';

import GetStarted from '@/components/buttons/get-started-button';
import LoginButton from '@/components/buttons/login-button';

// Put Logo text here
// const logoText = `Geneva`;

// Put Navigation links here
const navigationLinks: NavigationLink[] = [
	{
		label: 'Why choose us?',
		href: '/#why-choose-us',
	},
	{
		label: 'Features',
		href: '/#features',
	},
	{
		label: 'Pricing',
		href: '/#pricing',
	},
	{
		label: 'Blogs',
		href: '/#blogs',
	},
	{
		label: 'Support',
		href: '/#support',
	},
];

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Box>
				<Container maxWidth="lg">
					<Stack
						alignItems="center"
						direction={'row'}
						justifyContent="space-between"
						sx={{ height: 120 }}
					>
						<LogoWrapper />
						<Stack
							alignItems="center"
							direction="row"
							spacing={5}
							sx={{ display: { xs: 'none', lg: 'flex' } }}
						>
							{navigationLinks.map((link) => (
								<Link key={link.label} href={link.href} underline="none">
									<Typography color="textPrimary" variant="subtitle2">
										{link.label}
									</Typography>
								</Link>
							))}
						</Stack>
						<Stack
							alignItems="center"
							direction="row"
							spacing={2.5}
							sx={{ display: { xs: 'none', lg: 'flex' } }}
						>
							<GetStarted />
						</Stack>
						<Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
							<IconButton onClick={() => setOpen(true)}>
								<IconMenu />
							</IconButton>
						</Box>
					</Stack>
				</Container>
			</Box>
			<Dialog
				fullScreen
				keepMounted
				onClose={() => setOpen(false)}
				open={open}
				sx={{ '& .MuiDialog-paper': { borderRadius: 0 } }}
			>
				<DialogContent
					sx={{ py: { xs: 3.75, md: 3.75 }, px: { xs: 2, md: 3 } }}
				>
					<Container
						disableGutters
						maxWidth="xl"
						sx={{
							height: '100%',
						}}
					>
						<Stack
							justifyContent="space-between"
							sx={{
								height: '100%',
							}}
						>
							<Stack
								alignItems={'center'}
								direction={{ xs: 'row' }}
								justifyContent={{ xs: 'space-between' }}
							>
								<LogoWrapper />
								<Box>
									<IconButton
										onClick={() => setOpen(false)}
										size="large"
										sx={{ p: 0 }}
									>
										<IconClose size={32} />
									</IconButton>
								</Box>
							</Stack>
							<Stack alignItems="center" spacing={5}>
								{navigationLinks.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setOpen(false)}
										underline="none"
									>
										<Typography
											color="textPrimary"
											component={'div'}
											variant="h3"
										>
											{link.label}
										</Typography>
									</Link>
								))}
							</Stack>
							<Container maxWidth="sm">
								<Grid
									container
									alignItems="center"
									direction="row"
									spacing={2.5}
								>
									<Grid size={{ xs: 12, md: 6 }}>
										<LoginButton fullWidth />
									</Grid>
									<Grid size={{ xs: 12, md: 6 }}>
										<GetStarted fullWidth />
									</Grid>
								</Grid>
							</Container>
						</Stack>
					</Container>
				</DialogContent>
			</Dialog>
		</>
	);
}

interface NavigationLink {
	label: string;
	href: string;
}

function LogoWrapper() {
	const { mode } = useColorScheme();
	return (
		<Link href="/" underline="none">
			<Stack alignItems="center" direction="row" spacing={1.5}>
				{/* Logo SVG từ /public */}
				<img
					src="/logo.svg"
					alt="Logo"
					style={{ height: 70 }} // tuỳ chỉnh kích thước
				/>
			</Stack>
		</Link>
	);
}
