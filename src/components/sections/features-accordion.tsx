'use client';

import { useEffect, useState } from 'react';

import {
	Box,
	Container,
	Grid,
	Stack,
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Typography,
} from '@mui/material';
import { useCountUp } from 'use-count-up';

import Mockup from '@/components/ui/mockup';
import RevealSection from '@/components/ui/reveal-section';

interface Feature {
	title: string;
	content: string;
	imageDark: string;
	imageLight: string;
}

// Put Section Headline here
const headline = `Features`;

// Put Section SubHeadline here
const subHeadline = `Feedology makes it simple to manage and optimize your Google product feed - from clean data mapping to real-time sync monitoring.`;

// Put Section Features here
const features: Feature[] = [
	{
		imageDark: '/dark/screenshot-01.jpg',
		imageLight: '/light/screenshot-01.jpg',
		title: `Smart Product-level Mapping`,
		content: `Map and control every product attribute - from title to GTIN - directly at the product level. Ensure each item meets Google's data requirements perfectly.`,
	},
	{
		imageDark: '/dark/screenshot-02.jpg',
		imageLight: '/light/screenshot-02.jpg',
		title: `Free Listings Optimization`,
		content: `Boost your visibility on Google's free product listings by ensuring your data is complete, compliant, and perfectly formatted for discovery.`,
	},
	{
		imageDark: '/dark/screenshot-03.jpg',
		imageLight: '/light/screenshot-03.jpg',
		title: `Support Free Local Listings`,
		content: `Easily publish your in-stock products to Google's free local listings. Help nearby shoppers find your items and visit your store with real-time availability.`,
	},
	{
		imageDark: '/dark/screenshot-04.jpg',
		imageLight: '/light/screenshot-04.jpg',
		title: `Local Inventory Ads`,
		content: `Promote your physical store inventory across Google surfaces. Keep your online and in-store data in sync to drive local foot traffic and sales.`,
	},
	{
		imageDark: '/dark/screenshot-04.jpg',
		imageLight: '/light/screenshot-04.jpg',
		title: `Smart Analyze & Optimizer`,
		content: `Get instant insights into your feed performance and product data quality. Identify missing fields, errors, and opportunities to improve visibility on Google Shopping.`,
	},
];

// duration to display each feature in seconds
const duration = 5;

export default function FeaturesAccordion() {
	const [activeStep, setActiveStep] = useState<number>(-1);
	const [mounted, setMounted] = useState(false);

	const { reset } = useCountUp({
		isCounting: true,
		duration: duration,
		start: 0,
		end: 100,
		onComplete: () => {
			const nextStep = features.length > activeStep + 1 ? activeStep + 1 : 0;
			setActiveStep(nextStep);
			reset();
		},
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Container id="features" sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<Stack spacing={{ xs: 4, md: 8 }}>
				<RevealSection delay={0.1} direction="up">
					<Container disableGutters sx={{ maxWidth: '560px !important' }}>
						<Stack spacing={1.5}>
							<Typography textAlign={'center'} variant="h2">
								{headline}
							</Typography>
							<Typography
								color="textSecondary"
								component={'p'}
								textAlign={'center'}
								variant="h6"
							>
								{subHeadline}
							</Typography>
						</Stack>
					</Container>
				</RevealSection>
				<RevealSection delay={0.3} direction="up">
					<Box>
						<Grid
							container
							direction={{ xs: 'column-reverse', md: 'row' }}
							spacing={{ xs: 3.75, md: 7.5 }}
						>
							<Grid size={{ xs: 12, md: 5 }}>
								<Box sx={{ position: 'relative', width: '100%' }}>
									<Stepper
										activeStep={activeStep}
										nonLinear
										orientation="vertical"
										sx={{
											'& .MuiStepLabel-root': {
												py: 2.5,
											},
											'& .completed': {
												'& .MuiStepLabel-iconContainer': {
													backgroundColor: '#3949B1',
												},
											},
											'& .MuiStepLabel-iconContainer': {
												backgroundColor: '#97A0D6',
												borderRadius: '50vh',
												height: 20,
												mr: 2.5,
												overflow: 'hidden',
												position: 'relative',
												width: 20,
												zIndex: 1,
												'&:after': {
													backgroundColor: '#3949B1',
													content: '""',
													height: '0px',
													left: 0,
													position: 'absolute',
													top: 0,
													width: 20,
												},
												'&.Mui-completed': {
													'&:after': {
														height: '20px',
													},
												},
												'&.Mui-active': {
													'&:after': {
														height: '20px',
														transition: `height 2s ease-in-out`,
													},
												},
												'& svg': {
													display: 'none',
												},
											},
											'& .MuiStepConnector-root': {
												display: 'none',
											},
											'& .MuiStepContent-root': {
												border: 'none',
												ml: 2.5,
												'&:after': {
													backgroundColor: '#3949B1',
													bottom: '100%',
													content: '""',
													left: 8,
													position: 'absolute',
													top: 30,
													width: 4,
												},
												'&:before': {
													backgroundColor: '#97A0D6',
													bottom: -30,
													content: '""',
													left: 8,
													position: 'absolute',
													top: 30,
													width: 4,
												},
												'&.active': {
													'&:after': {
														bottom: -30,
														transition: `bottom ${duration}s ease-in-out 1s`,
													},
												},
												'&.completed': {
													'&:before': {
														backgroundColor: '#3949B1',
													},
												},
												'&.MuiStepContent-last': {
													'&:after': {
														display: 'none',
													},
													'&:before': {
														display: 'none',
													},
												},
											},
										}}
									>
										{features.map((feature, index) => (
											<Step
												key={index}
												onClick={() => {
													if (index === activeStep) {
														return;
													}
													setActiveStep(index);
													reset();
												}}
												sx={{
													position: 'relative',
													'& .MuiStepLabel-label:not(.Mui-active)': {
														cursor: 'pointer',
													},
												}}
											>
												<StepLabel
													className={`
													${index === activeStep ? 'active' : 'not-active'}
                          ${index < activeStep ? 'completed' : 'not-completed'}
												`}
												>
													<Typography color="textPrimary" variant="subtitle1">
														{feature.title}
													</Typography>
												</StepLabel>
												<StepContent
													className={`
													${index === activeStep ? 'active' : 'not-active'}
                          ${index < activeStep ? 'completed' : 'not-completed'}
												`}
												>
													<Typography
														color="textSecondary"
														variant="subtitle2"
														sx={{ whiteSpace: 'pre-line' }}
													>
														{feature.content}
													</Typography>
												</StepContent>
											</Step>
										))}
									</Stepper>
								</Box>
							</Grid>
							<Grid size={{ xs: 12, md: 'grow' }}>
								<Stack
									sx={{
										height: { xs: 260, md: '100%' },
										position: 'relative',
										width: '100%',
									}}
								>
									{features.map((feature, index) => {
										const isSelected =
											index === activeStep ||
											(index === 0 && activeStep === -1);
										return (
											<Box
												key={feature.title}
												sx={{
													opacity: isSelected ? 1 : 0,
													position: 'absolute',
													right: 0,
													top: '50%',
													transform: 'translateY(-50%)',
													transition: `opacity 0.3s ease-in-out`,
													width: '100%',
												}}
											>
												<Mockup
													darkImage={feature.imageDark}
													lightImage={feature.imageLight}
													aspectRatio="1271/831"
													borderRadius={24}
												/>
											</Box>
										);
									})}
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</RevealSection>
			</Stack>
		</Container>
	);
}
