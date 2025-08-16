let equips = JSON.parse(localStorage.getItem("equips")) || [];

function addEquip() {
  let equip = {
    name: prompt("装备名称：", "雷神之锤"),
    time: new Date().toLocaleString(),
    quantity: prompt("数量：", 1),
    quality: prompt("品质：", "史诗"),
    need: prompt("满级还需多少数量：", 10),
    exp: prompt("升级所需经验：", 200),
    img: "assets/hammer.png"
  };
  equips.push(equip);
  localStorage.setItem("equips", JSON.stringify(equips));
  renderEquips();
}

function renderEquips() {
  let list = document.getElementById("equip-list");
  list.innerHTML = "";
  equips.forEach((e, i) => {
    list.innerHTML += `
      <div class="equip-card">
        <img src="${e.img}" alt="${e.name}">
        <p><b>${e.name}</b>（${e.quality}）</p>
        <p>获取时间: ${e.time}</p>
        <p>数量: ${e.quantity}</p>
        <p>升级需求: 还需${e.need}件 / ${e.exp}经验</p>
        <button onclick="deleteEquip(${i})">删除</button>
      </div>
    `;
  });
}

function deleteEquip(i) {
  equips.splice(i, 1);
  localStorage.setItem("equips", JSON.stringify(equips));
  renderEquips();
}

renderEquips();