// Example `tailwind.config.js` file
module.exports = {
    important: true,
    theme: {
        container: {
            padding: '0 1rem',
        },
        maxWidth: {
            '1/4': '25%',
            '1/3': '33%',
            '1/2': '50%',
            '3/4': '75%',
            'custom280': '280px',
        },
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        maxHeight: {
            '1/2': '50%',
        },
        extend: {
            colors: {
                green: '#76aa6f',
                yellow: '#f9e95e',
                gray: '#777777',
                navBdrColor: 'rgba(255, 255, 255, 0.23)',
                flavorBgColor: '#F5F5F3',
                red: '#f96666',
                flavorGray: '#93a6ab',
                servicesBorder: '#e1e1e1',
                heroPrevNext: 'rgba(255, 255, 255, 0.3)',
                navActive: '#f9e95e',
            },
            margin: {

            },
            height: {
                half: '50%',
            },
            width: {
                '1/4': '25%',
                '3/4': '75%',
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '92': '23rem',
                '96': '24rem',
            }
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
      ],
  }