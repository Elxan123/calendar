document.addEventListener('DOMContentLoaded', function () {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		themeSystem: 'bootstrap',
		slotMinTime: '08:00',
		slotMaxTime: '20:00',
		initialView: 'timeGridWeek',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		editable: true,
		views: {
			dayGridMonth: {
				// name of view
				titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
				// other view-specific options here
			}
		},
		eventDrop: function (info) {

			console.log(info);

			// alert(info.event.title + " was dropped on " + info.event.start.toISOString());

			// if (!confirm("Are you sure about this change?")) {
			//    info.revert();
			// }
		},
		slotEventOverlap: false,
		allDaySlot: true,
		// eventContent: { html: '<i>some html</i>' },
		// slotDuration: '02:00' // 2 hours
		// slotLabelFormat: {
		//     hour: 'numeric',
		//     minute: '2-digit',
		//     omitZeroMinute: true,
		//     meridiem: 'short'
		// },
		nowIndicator: true,
		selectable: true,
		// hiddenDays: [ 2, 4 , 5, 6],
		// dayHeaders: false,
		dayHeaderFormat: { weekday: 'long' },

		// dateClick: function (info) {
		// 	alert('clicked ' + info.dateStr);
		// },
		selectMirror: false,
		unselectAuto: false,
		// selectOverlap: function (event) {
		//     return event.rendering === 'background';
		// }
		events: [
			{ title: 'salammmm', start: '2020-12-18', end: '2020-12-21' },
			{ title: 'salammmm', start: '2020-12-18' },
			{
				groupId: 'blueEvents', // recurrent events in this group move together
				daysOfWeek: ['4'],
				startTime: '10:45:00',
				endTime: '12:45:00'
			}
		],
		// selectAllow: function(selectInfo){
		//     console.log(selectInfo);
		// },

		// businessHours: {
		//     startTime: '12:00',
		//     endTime: '14:00',
		//     daysOfWeek: [1, 2, 3, 4, 5] // Mon,Wed,Fri
		// },
		// dayClick: function() {
		// 	day_select(info);
		// },

		select: function(info) {
			day_select(info);
		},

	});


	//========kalendarin dilin deyisir========
	// calendar.setOption('locale', 'en');
	// calendar.getOption('locale')
	// console.log(calendar.getOption('locale'));
	//========kalendarin dilin deyisir========


	//============bunedi hele bilmirem :D========
	var view = calendar.view;
	console.log("The view's title is " + view.title);
	//============bunedi hele bilmirem :D========


	calendar.batchRendering(function () {
		// calendar.changeView('dayGridMonth');
		calendar.addEvent({ title: 'new event', start: '2020-12-18' });
		calendar.addEvent({ title: 'new event', start: '2020-12-18' });
		calendar.addEvent({ title: 'new event', start: '2020-12-17' });
		calendar.addEvent({ title: 'new event', start: '2020-12-12' });
		calendar.addEvent({ title: 'new event', start: '2020-12-16' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
		calendar.addEvent({ title: 'new event', start: '2020-12-15' });
	});

	calendar.on('eventClick', function (event, jsEvent, view) {
		$('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
		$('.event-title').html(event.title);
		$('.event-body').html(event.description);
		$('.eventUrl').attr('href',event.url);
		$('#modal-view-event').modal();
	});


	//yeniden render etme
	calendar.refetchEvents();

	calendar.render();





	function day_select(info){
		console.log(info);

		$('#c_date').datepicker().data('datepicker').selectDate(info.start);

		$('#modal-view-event-add').modal();
	}



	$("#c_add_btn").click(() => {
		$('#modal-view-event-add').modal();
	});


	$("#add-event").submit(function(e){
		e.preventDefault();
		var values = {};
		$.each($('#add-event').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		console.log({...values});

		calendar.addEvent({...values, start: new Date(values.start), id: 12});

		console.log(calendar.getEventById(12).extendedProps);

	});

});
