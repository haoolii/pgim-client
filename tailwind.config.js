module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-navy)',
        'primary-navy': 'var(--primary-navy)',
        'primary-blue': 'var(--primary-blue)',
        'primary-gold': 'var(--primary-gold)',
        'primary-navy': 'var(--primary-navy)',
        'primary-blue': 'var(--primary-blue)',
        'primary-gold': 'var(--primary-gold)',

        'secondary-50': 'var(--secondary-50)',
        'secondary-200': 'var(--secondary-200)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-800': 'var(--secondary-800)',

        'secondary-gradient-from': 'var(--secondary-gradient-from)',
        'secondary-gradient-to': 'var(--secondary-gradient-to)',

        'grayscale-50': 'var(--grayscale-50)',
        'grayscale-200': 'var(--grayscale-200)',
        'grayscale-400': 'var(--grayscale-400)',
        'grayscale-600': 'var(--grayscale-600)',
        'grayscale-800': 'var(--grayscale-800)',

        'periwinkle': 'var(--periwinkle)',
        'orange': 'var(--orange)',
        'red': 'var(--red)',
        'green': 'var(--green)',
        'error': 'var(--error)'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
