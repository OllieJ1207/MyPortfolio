const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

document.addEventListener("DOMContentLoaded", async () => {
  await wait(1000)
  document.getElementById("LoadingScreen").style.opacity = "0"
  await wait(300)
  document.getElementById("LoadingScreen").style.display = "none";
})

document.querySelectorAll(".NavigationBar a").forEach((element) => {
  element.addEventListener("click", async () => {
    if (element.getAttribute("link")) {
      document.getElementById("LoadingScreen").style.removeProperty("display");
      await wait(10)
      document.getElementById("LoadingScreen").style.opacity = "1";
      await wait(300)
      window.location.href = element.getAttribute("link")
    }
  })
})