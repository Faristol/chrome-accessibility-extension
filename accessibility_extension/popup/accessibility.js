const buyMeACoffee = () => {
  document.getElementById("btnRedirect").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://ko-fi.com/faristol" });
  });
};
const initializeEvents = () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const tabId = tabs[0].id;
      const eventConfigs = [
        { selector: "#small", message: { fontsize: "small" } },
        { selector: "#medium", message: { fontsize: "medium" } },
        { selector: "#large", message: { fontsize: "large" } },
        { selector: "#x-large", message: { fontsize: "x-large" } },
        { selector: "#xx-large", message: { fontsize: "xx-large" } },
        { selector: "#xxx-large", message: { fontsize: "xxx-large" } },
        { selector: "#reset-size", message: { fontsize: "reset" } },
        { selector: "#contrast", message: { contrast: "contrast" } },
        { selector: "#reset-contrast", message: { contrast: "reset" } },
        { selector: "#arial", message: { fontfamily: "arial" } },
        { selector: "#opendyslexic", message: { fontfamily: "opendyslexic" } },
        { selector: "#hyperlegible", message: { fontfamily: "hyperlegible" } },
        { selector: "#reset-font", message: { fontfamily: "reset" } },
        { selector: "#bold", message: { bold: "bold" } },
        { selector: "#reset-bold", message: { bold: "reset" } },
        { selector: "#invert", message: { invert: "invert" } },
        { selector: "#invert-reset", message: { invert: "reset" } },
        { selector: "#button-play", message: { action: "play" } },
        { selector: "#button-pause", message: { action: "pause" } },
        { selector: "#button-resume", message: { action: "resume" } },
        { selector: "#button-cancel", message: { action: "cancel" } },
      ];

      const addEventListener = (selector, message) => {
        document.querySelector(selector).addEventListener("click", () => {
          chrome.tabs.sendMessage(tabId, message);
        });
      };

      eventConfigs.forEach((config) => {
        addEventListener(config.selector, config.message);
      });
    }
  );
};

document.addEventListener("DOMContentLoaded", () => {
  buyMeACoffee();
  initializeEvents();
});



