/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
  			mono: ['"SF Mono"', 'Monaco', 'Consolas', 'monospace'],
  			numeric: ['"IBM Plex Mono"', 'monospace']
  		},
  		colors: {
  			// Existing shadcn colors
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Custom design system colors
  			crypto: {
  				bg: {
  					primary: '#0B0F19',
  					secondary: '#151B28',
  					tertiary: '#1E2635',
  					card: '#1A1F2E',
  					hover: '#252B3B'
  				},
  				text: {
  					primary: '#FFFFFF',
  					secondary: '#94A3B8',
  					muted: '#64748B',
  					success: '#10B981',
  					danger: '#EF4444'
  				},
  				brand: {
  					primary: '#3B82F6',
  					secondary: '#6366F1'
  				},
  				accent: {
  					blue: '#3B82F6',
  					'blue-light': '#60A5FA',
  					'blue-dark': '#2563EB',
  					green: '#10B981',
  					'green-light': '#34D399',
  					'green-dark': '#059669'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
  			'gradient-card': 'linear-gradient(180deg, rgba(26, 31, 46, 0.5) 0%, rgba(26, 31, 46, 0.8) 100%)'
  		},
  		boxShadow: {
  			'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
  			'glow-strong': '0 0 30px rgba(59, 130, 246, 0.25)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
