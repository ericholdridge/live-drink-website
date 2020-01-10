// Example `tailwind.config.js` file
module.exports = {
    important: true,
    theme: {
        container: {
            padding: '0 1rem',
        },
        fontFamily: {

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
            },
            margin: {

            },
            height: {
                half: '50%',
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
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