import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { Box } from '@mui/material';

import { Providers } from '@/providers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const monaSans = Mona_Sans({
	variable: '--font-mona-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Feedology.IO | Smart Product Feed Management for Google Shopping',
	description:
		'Feedology helps merchants turn raw product data into growth-ready feeds that connect, perform, and convert - everywhere shoppers are.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${monaSans.variable} antialiased`}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme} defaultMode="dark">
						<InitColorSchemeScript attribute="class" />
						<Providers>
							<Box sx={{ position: 'relative', zIndex: 2 }}>
								<Header />
								{children}
								<Footer />
							</Box>
						</Providers>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
