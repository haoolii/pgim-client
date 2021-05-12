module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-navy)',
        'primary-navy': 'var(--primary-navy)',
        'primary-blue': 'var(--primary-blue)',
        'primary-gold': 'var(--primary-gold)'
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
