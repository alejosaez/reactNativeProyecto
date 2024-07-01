const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['jpeg', 'jpg', 'png', 'gif', 'bmp'], // Añade todos los tipos de archivo de imagen que necesitas
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
