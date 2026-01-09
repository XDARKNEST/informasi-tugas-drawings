/* DARK MODE */
const darkToggle=document.getElementById("darkToggle");
darkToggle.onclick=()=>{
document.body.classList.toggle("dark");
};

/* FULL VIEW */
const modal=document.getElementById("imageModal");
const modalImg=document.getElementById("modalImg");
document.querySelectorAll(".fullview-btn").forEach(b=>{
b.onclick=()=>{
modal.style.display="flex";
modalImg.src=b.dataset.img;
}
});
modal.onclick=e=>{if(e.target===modal)modal.style.display="none";}

/* MUSIC */
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
musicBtn.onclick=()=>{
if(music.paused){music.play();musicBtn.textContent="Pause Music";}
else{music.pause();musicBtn.textContent="Play Music";}
};

/* COUNTDOWN */
const deadline=new Date("2026-01-04").getTime();
const nextDeadline=new Date("2026-01-12").getTime();
setInterval(()=>{
const now=Date.now();
document.getElementById("countdown").innerHTML=
deadline-now<=0?"Deadline Berakhir":"⏳ Deadline Aktif";
document.getElementById("nextCountdown").innerHTML=
nextDeadline-now<=0?"Tugas Dibuka":"📅 Tugas Selanjutnya";
},1000);

/* POPUP SARAN */
const openSaran=document.getElementById("openSaran");
const closeSaran=document.getElementById("closeSaran");
const saranModal=document.getElementById("saranModal");

openSaran.onclick=()=>saranModal.style.display="flex";
closeSaran.onclick=()=>saranModal.style.display="none";

document.getElementById("kirimSaran").onclick=()=>{
const nama=nama.value.trim();
const pesan=pesan.value.trim();
if(!nama||!pesan)return alert("Lengkapi semua field!");

db.ref("saran").push({
nama,pesan,waktu:new Date().toISOString()
});

alert("Saran terkirim 🙏");
saranModal.style.display="none";
};
