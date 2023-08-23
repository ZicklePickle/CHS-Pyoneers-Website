/** @type {import('next').NextConfig} */
const fs = require('fs');

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
