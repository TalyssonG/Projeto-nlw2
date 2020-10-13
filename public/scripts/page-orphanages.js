const map = L.map('mapid').setView([-27.222633, -49.6455874], 16)






L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
.addTo(map)

//create icon

const icon = L.icon({

    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]

})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1 class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')


L.marker([-27.222633, -49.6455874],{icon: icon})
.addTo(map)
.bindPopup(popup)
