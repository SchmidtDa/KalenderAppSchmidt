$(document).ready(function () {

    var alleMonate = ['Januar', 'Febuar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'september ', 'Oktobar', 'November', 'Dezember'];
    var alleWochentage = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    var anzahlDerTageAllerMonate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var woche = 0;
    var datum = new Date();
    //datum.setMonth(3);
    var datum2 = datum;
    datum2.setDate(1);
    var jahr = datum.getFullYear();
    var monat = datum.getMonth();
    var tag = datum.getDate();
    var wochentag = datum.getDay();
    var wochentag2 = datum2.getDay();

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        $('.app').fadeOut('slow');
        $('#startButton').fadeIn('slow');
    }
	$('#monat').html(alleMonate[monat])
    $('#startButton').click(function () {
        $('#startButton').addClass('disable');
        $('#startButton').fadeOut('fast');
        setTimeout(function () {
            $('#kalender').fadeIn('slow')
        }, 500);
        console.log(datum);
        createCalender();
    });

    function createCalender() {
		 $('#kalenderMain').html('');
		switch (wochentag2) {
            case 0:
                $('#kalenderMain').append('<td></td><td></td><td></td><td></td><td></td><td></td>');
                woche = 6;
                break;
            case 1:
                $('#kalenderMain').append('<td></td><td></td><td></td><td></td><td></td>');
                woche = 5;
                break;
            case 2:
                $('#kalenderMain').append('<td></td><td></td><td></td><td></td>');
                woche = 4;
                break;
            case 3:
                $('#kalenderMain').append('<td></td><td></td><td></td>');
                woche = 3;
                break;
            case 4:
                $('#kalenderMain').append('<td></td><td></td>');
                woche = 2;
                break;
            case 5:
                $('#kalenderMain').append('<td></td>');
                woche = 1;
                break;
            default:
                console.error("ERROR!");
                break;
        }
        for (var i = 1; i <= anzahlDerTageAllerMonate[monat]; i++) {
            if (woche === 0) {
                console.info('Neue TableRow hinzugeügt')
                $('#kalenderMain').append('<tr>');
            }
            console.log(alleWochentage[woche]);
            if (datum.getDate === (i)) {
                $('#kalenderMain').append('<td class="today">' + (i) + '</td>');
            } else {
                $('#kalenderMain').append("<td>" + (i) + "</td>");
            }
            woche++;
            if (woche === 7) {
                console.info('Neue TableRow geendet')
                $('#kalenderMain').append('</tr>');
                woche = 0;
            }
    	}
        
        for (var i = woche; i < 7; i++) {
            if (i === 0) {
                return;
            } else {
                if (i === 7) {
                    $('#kalenderMain').append('</tr>');
                } else {
                    $('#kalenderMain').append("<td></td>");
                }
            }
        }
	}
});