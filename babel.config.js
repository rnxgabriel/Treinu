module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo"]],
<<<<<<< HEAD
    plugins: ["react-native-reanimated/plugin"],
=======
    plugins: [
      ["inline-import", { extensions: [".sql"] }],
      "react-native-reanimated/plugin",
    ],
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
  };
};
