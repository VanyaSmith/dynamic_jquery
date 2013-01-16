$(function() {
    var mydiv = $('<div/>', {
        id:     'mydiv',
        class:  'mydiv',
        text: 	'Содержимое блока' 
    });
    $('.content').append(mydiv);

    //Form
    var myform = $("<form/>", {
    	action: "/", 
    }).appendTo('.content');

    $('<input/>', {
        id:     'myinput-1',
        class:  'myinput',
        type: 	'text',
        name: 	'myinput-1',
        val: 	'Habr',
        css: {
            	'border': '1px solid red'
        } 
    }).appendTo(myform);

     $('<input/>').attr({
        id:     'myinput-2',
        class:  'myinput',
        type: 	'text',
        name: 	'myinput-2',
        placeholder: 	'Поиск...'
    }).appendTo(myform);

    $('<input/>', {
        type: 	'submit',
        name: 	'send',
        val: 	'Отправить' 
    }).appendTo(myform);


    var myselect = $('<select/>', { id: 'myselect'});
    var items = ["Google","Yandex","Bing"];

	$.each(items,function() {
		$('<option/>', {
			val:  this,
			text: this
		}).appendTo(myselect);
	});
	//myselect.val('Yandex');
	$('option[value="Yandex"]', myselect).attr('selected', 'selected');
	$('.content').append(myselect);


	//Radio
	var myradiodiv = $('<div/>', {
        id:     'myradiodiv'
    }).appendTo(".content");

	var items = ["Google","Yandex","Bing"];
	$.each(items, function(i,item) {
	  	$('<label/>',{text:	item}).append(
	  		$('<input/>', {
				type: 'radio',
				name: 'myradio',
				val: 	item
			})
		).appendTo(myradiodiv);
	});
	
	$.each(items, function(i,item) {
	  	$('<label/>').append(
	  		$('<input/>', {
				type: 'radio',
				name: 'myradio',
				val: 	item
			})
		).append(item).appendTo(myradiodiv);
	});


	//Button
	var mybutton = $('<button/>',
    {
        text: 'Click Me',
        click: function () { alert('Hello Habr'); }
    }).appendTo('.content');


	//iframe
	$('<iframe/>', {
    	name: 'myframe',
    	id:   'myframe',
    	src:  'about:blank'
	}).appendTo('.content');

	//Table

	//Данные
	var TableTitle = ["Site", "Google","Yandex","Bing"];
	var TableValue = [
		["http://habr.ru/","4","6","26"],
		["http://habrahabr.ru/","3","1","6"],
		["http://google.ru/","1","1","1"]
	];
	
	//Создадим структуру
	var mytable = $('<table/>',{
						class:'mytable'
					}).append(
						$('<thead/>'),
						$('<tfoot/>'),
						$('<tbody/>')
					);

	//Нополняем табличку
	//Заголовок
	var TitleCell = $('<tr/>');
	$.each(TableTitle,function( myIndex, myData ) {
		TitleCell.append(
			$('<th/>',{
				text:myData
			})
		);
	});
	$("thead",mytable).append(TitleCell);

	//Данные
	$.each(TableValue,function() {
		//Переопределяем строку
		var DataCell = $('<tr/>');
		//Пробегаемся по ячейкам, если они фиксированые можно не использовать цикл, а указать индекс
		$.each(this,function() {
			DataCell.append(
				$('<td/>',{
					text:this
				})
			);
		});
		$("tbody",mytable).append(DataCell);
	});

	$("tbody",mytable).append($('<tr/>').append($("<td/>",{'colspan':'4',text:"Без цикла"})));
	//Без цикла
	$.each(TableValue,function( i, myData ) {
		$("tbody",mytable).append(
			$('<tr/>').append(
				$('<td/>',{text:this[0]}),
				$('<td/>',{text:this[1]}),
				$('<td/>',{text:myData[2]}), //Или так
				$('<td/>',{text:myData[3]})
			)
		);
	});

	$('.content').append(mytable);

	//Списки
	var lang = ['Russian', 'English', 'Ukraine'];
	var mylist = $('<ul/>');
	//Наполняем
	$.each(lang, function() {
	    $('<li/>',{text:this}).appendTo(mylist);
	    //Добавим ссылку
	    $('<li/>').wrapInner(
	    	$("<a/>",{
	    		"href":"#",
	    		text:this
	    	}))
	    .appendTo(mylist);

	});
	$('.content').append(mylist);

	//Скрипты
	$("<script/>",{
		src:'js/inc.js'
	}).appendTo("body");

	//Стили
	$("<link/>",{
		href:'css/inc.css',
		rel:'stylesheet'
	}).insertAfter("link:last");

    var mydiv = $('<div/>', {
        class:  'inc-style'
    });
    $('.content').append(mydiv);
	
});