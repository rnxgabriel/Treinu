const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
<<<<<<< HEAD
config.resolver.sourceExts.push("cjs");

=======

config.resolver.sourceExts.push("sql");
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
module.exports = config;
