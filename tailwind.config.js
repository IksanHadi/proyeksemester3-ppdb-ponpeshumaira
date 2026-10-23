/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { brand: { 50:'#eff6ff',100:'#dbeafe',500:'#3572e8',600:'#2458cc',700:'#1747b5',900:'#102b66' }, sun:'#f4c84a' },
    boxShadow: { soft:'0 18px 50px rgba(24, 61, 125, .08)' }
  }},
  plugins: []
}