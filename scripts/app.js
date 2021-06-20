let app = new Vue({
    el: '#app',
    data: {
        show: true,
        clients: [
            { id: 0, image: 'assets/images/rtbf.jpg', text: "Gestion des applications iOS Auvio et RTBF" },
            { id: 1, image: 'assets/images/andaman_logo.jpg', text: "Travail sur une application iOS permettant la synchronisation des dossiers médicaux en solution non-cloud (peer-to-peer)" },
            { id: 2, image: 'assets/images/optimum.jpg', text: "Création d'un intranet en Angular et NodeJS permettant de gérer les clients de la fiduciaire et les tâches de collaborateur" },
        ],
    },
    methods: {
        display: function(el, i) {
            this.$set(this.clients, i, el)
            el.show == false ? el.show = true : el.show = false;
        }

    },
    mounted() {
        this.clients = this.clients.map(e => {
            let t = e;
            e.show = false;
            return t;
        })
    }
})


$(document).ready(function () {

    $('.burger_menu').on("click", function () {
        $('.sidebar').toggleClass('show');
        $('.burger_menu').toggleClass('rotate');
    })

    $('#switch').on("click", function () {
        $('.texts_phone').toggleClass('dark_mode');
    })


    // Animate.css //
    $('#icon_animation').on("mouseenter", function () {
        $(this).addClass('animate__animated')
    });

    $('#icon_animation').on("mouseout", function () {
        $('#icon_animation').removeClass('animate__animated');
    });

    // ScrollMagic //

    // Controller ScollMagic
    var controller = new ScrollMagic.Controller();

    // Scene Header //

    var headerScene = new ScrollMagic.Scene({
        triggerElement: '.header',
        reverse: false
    })
    .setClassToggle('.header, .logo h2', 'animate__animated')
    .addTo(controller)

    // Scene accroche //

    var accrocheScene = new ScrollMagic.Scene({
        triggerElement: ".accroche",
    })
    .setClassToggle('.accroche h1','fade_accroche')
    .addTo(controller)


    // Scene Idees
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.vos_idees h2',
    })
        .setClassToggle('.etapes_idees', 'fade-in')
        .addTo(controller)


    // Scene section devis //
    var sceneDevis = new ScrollMagic.Scene({
        triggerElement: '.devis',
    })
        .setClassToggle('.devis', 'transition_devis')
        .addTo(controller)


    // Scene section Team //

    var sceneTeam = new ScrollMagic.Scene({
        triggerElement: '.about_team h2'
    })
    .setClassToggle('.about_team', 'transition_team')
    .addTo(controller)

    var sceneTeam2 = new ScrollMagic.Scene({
        triggerElement: '.about_team h2'
    })
        .setClassToggle('.henrard', 'transition_team2')
        .addTo(controller)

    var sceneTeam3 = new ScrollMagic.Scene({
        triggerElement: '.about_team h2'
    })
        .setClassToggle('.marot', 'transition_team3')
        .addTo(controller)

    // Scene section clients //

    var sceneClients = new ScrollMagic.Scene({
        triggerElement: '.clients h2'
    })
        .setClassToggle('.container', 'fade_clients')
        .addTo(controller)


    // Scene formulaire

    var sceneForm = new ScrollMagic.Scene({
        triggerElement: '.form h2'
    })
        .setClassToggle('.contact', 'transition_contact')
        .addTo(controller)
});




