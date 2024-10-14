const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname, ''),
      '@comps': path.resolve(__dirname, 'src/components'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@mols': path.resolve(__dirname, 'src/components/molecules'),
      '@orgs': path.resolve(__dirname, 'src/components/organisms'),
      '@pgs': path.resolve(__dirname, 'src/components/pages'),
      '@temps': path.resolve(__dirname, 'src/components/templates'),
    },
  },
};

export {}