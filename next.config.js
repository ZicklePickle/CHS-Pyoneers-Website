/** @type {import('next').NextConfig} */
const fs = require('fs');

const nextConfig = {
    output: "export",
    basePath: "/Website",
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
