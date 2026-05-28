const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const search = document.querySelector("#search");
const input = document.querySelector("input");

login.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/login/?locale=en_GB";
});

signup.addEventListener("click", () => {
  window.location.href =
    "https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s|c|589460569870|b|facebook%20create%20account|&placement=&creative=589460569870&keyword=facebook%20create%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221432%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-12091220328%26loc_physical_ms%3D9050481%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gad_campaignid=14884913640&gbraid=0AAAAAD2MkOWtw-20xuom7lcSoM-bQthDX&gclid=Cj0KCQjwz9_QBhD_ARIsADnSCfBaL-HOQA8WcORIRWuLX6tdVtLH394h0wFRKi-HzTqudTA1DC-6wo4aAo-5EALw_wcB";
});

search.addEventListener("click", () => {
  let name = input.value;
  if (name.trim() !== "") {
    window.location.href = `https://www.facebook.com/search/top/?q=${name}`;
  } else {
    alert("Please enter a name");
  }
});
