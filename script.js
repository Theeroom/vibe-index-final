
const API_KEY = "AIzaSyBnzGv5joUq8cFftHTyGeTJECTLQzYxNf8";

function showSingleAnalysis() {
  document.getElementById("single-analysis").style.display = "block";
  document.getElementById("compare-analysis").style.display = "none";
  document.getElementById("single-tab").classList.add("active-tab");
  document.getElementById("compare-tab").classList.remove("active-tab");
}

function showCompareAnalysis() {
  document.getElementById("single-analysis").style.display = "none";
  document.getElementById("compare-analysis").style.display = "block";
  document.getElementById("compare-tab").classList.add("active-tab");
  document.getElementById("single-tab").classList.remove("active-tab");
}

function fetchSingleChannelData() {
  alert("이 기능은 서버 연동 후 사용 가능합니다.");
}

function fetchCompareChannels() {
  alert("이 기능은 서버 연동 후 사용 가능합니다.");
}
