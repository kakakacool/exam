$(function () {
    $('.navbar-toggle').click(function () {
    	$('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');
        $('.navbar-toggle').toggleClass('_active');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');

    });

    // Remove menu for searching
    $('#search-trigger').click(function () {
        $('.navbar-nav').removeClass('slide-in');
        $('.side-body').removeClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').removeClass('slide-in');

    });


	//select all checkboxes
	$("#select_all").change(function(){  //"select all" change
		$('.checkbox-select-item>input').not(this).prop('checked', this.checked);

	});

	//uncheck "select all", if one of the listed checkbox item is unchecked
	$('.checkbox-select-item>input').change(function(){ //".checkbox" change
		if(this.checked == false){ //if this item is unchecked
			$("#select_all")[0].checked = false; //change "select all" checked status to false
		}
	});

	//select all checkboxes
	$("#select_all2").change(function(){  //"select all" change
		$('.checkbox-select-item2>input').not(this).prop('checked', this.checked);

	});

	//uncheck "select all", if one of the listed checkbox item is unchecked
	$('.checkbox-select-item2>input').change(function(){ //".checkbox" change
		if(this.checked == false){ //if this item is unchecked
			$("#select_all2")[0].checked = false; //change "select all" checked status to false
		}
	});
	$('.init-datetimepicker input').datetimepicker({
		icons: {
			date: 'glyphicon glyphicon-calendar'
		},
		//defaultDate: moment().format('dd/mm/yyyy'),
		format: 'DD/MM/YYYY',

		focusOnShow: true
	});
	$(".init-datetimepicker input").on("focus", function() {
		$('.init-datetimepicker').data("DateTimePicker").show();
	});
	$(".init-datetimepicker .input-group-addon").on("click", function() {
        $(".init-datetimepicker input").focus();
	});
	$(".init-datetimepicker input").val(moment().format('DD/MM/YYYY'));

    //add success
    $('.add-success').click(function (e) {
        alert('Đăng ký thành công.');
        $('input[type="text"], textarea').val('');
        $('select').find('option').eq(0).prop('selected', true);
        $('#model, #color').val('');
        $('.model-show').html('');
        $(".init-datetimepicker input").val(moment().format('DD/MM/YYYY'));
    });
});
$(function() {
	var  container = $("#age-select");

	$(window).load(function(event) {


		var width = $(this).width(),
			itemsInPage = 1;
        if (width >= 1024) {
            $('#age-select .item').eq(0).find('.btn-group').append( $('#age-select .item').eq(1).find('.btn-group').html());
            $('#age-select .item').eq(1).remove();
        }
		if (width >= 1024) {
			itemsInPage = 1
		} else if (width > 666) {
			itemsInPage = 1;
		} else if (width > 320) {
			itemsInPage = 1;
		}

		container.dragend({
			pageContainer: "#container",
			itemsInPage: itemsInPage,
			pageClass: "item",
			afterInitialize: function() {
				this.container.style.visibility = "visible";
			}
		});

	});
});

var models = [
	"Wave RS",
	"Wave a 100cc",
	"SH 125cc",
	"SH 150cc",
	"SH mode 125cc",
	"MSX 125cc",
	"PCX 125cc",
	"Future 125cc",
	"LEAD 125cc",
	"BLADE 110cc",
	"Wave RSX 110cc",
	"Super Dream 110cc",
	"VISION 110cc",
	"Air Blade 125cc",
];
var model_colors={
	"SH 150cc":[
		{
			name:'Đen',
			code:'#000'
		},
		{
			name:'Đỏ',
			code:'red'
		},
		{
			name:'Xanh đen',
			code:'#121b15'
		},
	],
	"SH 125cc":[
		{
			name:'Đen',
			code:'#000'
		},
		{
			name:'Đỏ',
			code:'red'
		},
		{
			name:'Xanh đen',
			code:'#121b15'
		},
	],
	"Future 125cc":[
		{
			name:'Đen',
			code:'#000'
		},
		{
			name:'Đen ghi',
			code:'#383839'
		},
		{
			name:'Nâu vàng',
			code:'#8c6231'
		},
		{
			name:'Xám ghi',
			code:'#808285'
		},
	]
};

var model_honda = [
    {
        "xe_ga": [
            {
                "0": {
                    name: "SH 125cc/150cc",
                    color: {
                        color1: "Đen",
                        color2: "Xanh lam đen",
                        color3: "Xanh lục đen",
                        color4: "Đỏ đen",
                        color4: "Trắng"
                    }
                }
            },
            {
                "1": {
                    name: "SH mode 125cc",
                    color: {
                        color1: "Xanh",
                        color2: "Đỏ",
                        color3: "Đỏ đậm",
                        color3: "Bạc mờ",
                        color3: "Vàng"
                    }
                }
            },
            {
                "2": {
                    name: "Air Blade 125cc",
                    color: {
                        color1: "Trắng bạc",
                        color2: "Đỏ bạc",
                        color3: "Vàng đen",
                        color4: "Xám đen"
                    }
                }
            },
            {
                "3": {
                    name: "PCX 125cc",
                    color: {
                        color1: "Bạc mờ",
                        color2: "Đen mờ",
                        color3: "Đỏ",
                        color4: "Xanh mờ"
                    }
                }
            },
            {
                "4": {
                    name: "LEAD 125cc",
                    color: {
                        color1: "Đỏ",
                        color2: "Đen",
                        color3: "Trắng nâu",
                        color4: "Xanh nâu"
                    }
                }
            },
            {
                "5": {
                    name: "VISION 110cc",
                    color: {
                        color1: "Đen mờ",
                        color2: "Xanh",
                        color3: "Trắng"
                    }
                }
            }
        ]
    },
    {
        "xe_so": [
            {
                "0": {
                    name: "Future 125cc",
                    color: {
                        color1: "Đen",
                        color2: "Đen đỏ",
                        color3: "Đen ghi đậm",
                        color4: "Đỏ ghi đậm"
                    }
                }
            },
            {
                "1": {
                    name: "BLADE 110cc",
                    color: {
                        color1: "Đen cam",
                        color2: "Đen đen",
                        color3: "Đen đỏ",
                        color4: "Đen trắng"
                    }
                }
            },
            {
                "2": {
                    name: "Wave RSX 110cc",
                    color: {
                        color1: "Đen đỏ",
                        color2: "Đỏ đen",
                        color3: "Vàng đen",
                        color4: "Cam trắng"
                    }
                }
            },
            {
                "3": {
                    name: "Wave Alpha 100cc",
                    color: {
                        color1: "Nâu huyền thoại",
                        color2: "Đen lịch lãm",
                        color3: "Xanh phong cách",
                        color4: "Xanh thanh lịch"
                    }
                }
            },
            {
                "4": {
                    name: "Super Dream 110cc",
                    color: {
                        color1: "Cam đen",
                        color2: "Đỏ đen bạc",
                        color3: "Xanh đen bạc",
                        color4: "Đen trắng"
                    }
                }
            }
        ]
    },
    {
        "xe_con": [
            {
                "0": {
                    name: "WINNER 150cc",
                    color: {
                        color1: "Đỏ đen",
                        color2: "Trắng đen",
                        color3: "Đen đỏ",
                        color4: "Xanh đỏ đen"
                    }
                }
            },
            {
                "1": {
                    name: "MSX 125cc",
                    color: {
                        color1: "Đen",
                        color2: "Trắng đen",
                        color3: "Đỏ đen",
                        color4: "Xanh đen"
                    }
                }
            }
        ]
    }
]

$('#model').autocomplete ({
	source: models,
	minLength:1,
	delay:200,
	appendTo:'.model-show',
	select: function( event, ui ) {
		event.preventDefault();
		$(this).val(ui.item.label);
		//$(this).val(ui.item.value);

		var model_key=ui.item.value;
		var colors=model_colors[model_key];

		var str='';
		$(colors).each(function (index, val) {
			str+='<div class="color-item" style="background-color: '+val.code+'"></div>';
		});
		
		$('.color-show').html(str);
		$('.colors').show();
	}
});
$(document).on('click','.color-item',function (e) {
	e.preventDefault();
	var $this=$(this);
	$('.color-item').each(function (index, element) {
		$(this).removeClass('color-selected');
		$this.addClass('color-selected');
	});
});


/*select city*/

var json_data={"1":{"name":" Cần Thơ","districts":{"66":"H Cờ Đỏ","67":"H Phong Điền","68":"H Thới Lai","69":"H Vĩnh Thạnh","70":"Q Bình Thủy","71":"Q Cái Răng","72":"Q Ninh Kiều","73":"Q Ô Môn","74":"Q Thốt Nốt"}},"2":{"name":" Đà Nẵng","districts":{"76":"H Hòa Vang","77":"H Hoàng Sa","78":"Q Cẩm Lệ","79":"Q Hải Châu","80":"Q Liên Chiểu","81":"Q Ngũ Hành Sơn","82":"Q Sơn Trà","83":"Q Thanh Khê"}},"3":{"name":" Hà Nội","districts":{"85":"H Ba Vì","86":"H Chương Mỹ","87":"H Đan Phượng","88":"H Đông Anh","89":"H Gia Lâm","90":"H Hoài Đức","91":"H Mê Linh","92":"H Mỹ Đức","93":"H Phú Xuyên","94":"H Phúc Thọ","95":"H Quốc Oai","96":"H Sóc Sơn","97":"H Thạch Thất","98":"H Thanh Oai","99":"H Thanh Trì","100":"H Thường Tín","101":"H Từ Liêm","102":"H ứng Hòa","103":"Q Ba Đình","104":"Q Cầu Giấy","105":"Q Đống Đa","106":"Q Hà Đông","107":"Q Hai Bà Trưng","108":"Q Hoàn Kiếm","109":"Q Hoàng Mai","110":"Q Long Biên","111":"Q Tây Hồ","112":"Q Thanh Xuân","113":"TX Sơn Tây"}},"4":{"name":" Hải Phòng","districts":{"115":"H An Dương","116":"H An Lão","117":"H Bạch Long Vĩ","118":"H Cát Hải","119":"H Kiến Thụy","120":"H Thủy Nguyên","121":"H Tiên Lãng","122":"H Vĩnh Bảo","123":"Q Đồ Sơn","124":"Q Dương Kinh","125":"Q Hải An","126":"Q Hồng Bàng","127":"Q Kiến An","128":"Q Lê Chân","129":"Q Ngô Quyền"}},"5":{"name":" Hồ Chí Minh","districts":{"131":"H Bình Chánh","132":"H Cần Giờ","133":"H Củ Chi","134":"H Hóc Môn","135":"H Nhà Bè","136":"Q 1","137":"Q 10","138":"Q 11","139":"Q 12","140":"Q 2","141":"Q 3","142":"Q 4","143":"Q 5","144":"Q 6","145":"Q 7","146":"Q 8","147":"Q 9","148":"Q Bình Tân","149":"Q Bình Thạnh","150":"Q Gò Vấp","151":"Q Phú Nhuận","152":"Q Tân Bình","153":"Q Tân Phú","154":"Q Thủ Đức"}},"6":{"name":"Tỉnh An Giang","districts":{"155":"H An Phú","156":"H Châu Phú","157":"H Châu Thành","158":"H Chợ Mới","159":"H Phú Tân","160":"H Thoại Sơn","161":"H Tịnh Biên","162":"H Tri Tôn","163":" Long Xuyên","164":"TX Châu Đốc","165":"TX Tân Châu"}},"7":{"name":"Tỉnh Bà Rịa-Vũng Tàu","districts":{"166":"H Châu Đức","167":"H Côn Đảo","168":"H Đất Đỏ","169":"H Long Điền","170":"H Tân Thành","171":"H Xuyên Mộc","172":" Vũng Tàu","173":"TX Bà Rịa"}},"8":{"name":"Tỉnh Bắc Giang","districts":{"174":"H Hiệp Hòa","175":"H Lạng Giang","176":"H Lục Nam","177":"H Lục Ngạn","178":"H Sơn Động","179":"H Tân Yên","180":"H Việt Yên","181":"H Yên Dũng","182":"H Yên Thế","183":" Bắc Giang"}},"9":{"name":"Tỉnh Bắc Kạn","districts":{"184":"H Ba Bể","185":"H Bạch Thông","186":"H Chợ Đồn","187":"H Chợ Mới","188":"H Na Rì","189":"H Ngân Sơn","190":"H Pác Nặm","191":"TX Bắc Kạn"}},"10":{"name":"Tỉnh Bạc Liêu","districts":{"192":"H Đông Hải","193":"H Giá Rai","194":"H Hòa Bình","195":"H Hồng Dân","196":"H Phước Long","197":"H Vĩnh Lợi","198":" Bạc Liêu"}},"11":{"name":"Tỉnh Bắc Ninh","districts":{"199":"H Gia Bình","200":"H Lương Tài","201":"H Quế Võ","202":"H Thuận Thành","203":"H Tiên Du","204":"H Yên Phong","205":" Bắc Ninh","206":"TX Từ Sơn"}},"12":{"name":"Tỉnh Bến Tre","districts":{"207":"H Ba Tri","208":"H Bình Đại","209":"H Châu Thành","210":"H Chợ Lách","211":"H Giồng Trôm","212":"H Mỏ Cày Bắc","213":"H Mỏ Cày Nam","214":"H Thạnh Phú","215":" Bến Tre"}},"13":{"name":"Tỉnh Bình Định","districts":{"216":"H An Lão","217":"H An Nhơn","218":"H Hoài  Ân","219":"H Hoài Nhơn","220":"H Phù Mỹ","221":"H Phù cát","222":"H Tây Sơn","223":"H Tuy Phước","224":"H Vân Canh","225":"H Vĩnh Thạnh","226":" Quy Nhơn"}},"14":{"name":"Tỉnh Bình Dương","districts":{"227":"H Bến Cát","228":"H Dầu Tiếng","229":"H Dĩ An","230":"H Phú Giáo","231":"H Tân Uyên","232":"H Thuận An","233":"TX Thủ Dầu Một"}},"15":{"name":"Tỉnh Bình Phước","districts":{"234":"H Bù Đăng","235":"H Bù Đốp","236":"H Bù Gia Mập","237":"H Chơn Thành","238":"H Đồng Phú","239":"H Hớn Quản","240":"H Lộc Ninh","241":"TX Bình Long","242":"TX Đồng Xoài","243":"TX Phước Long"}},"16":{"name":"Tỉnh Bình Thuận","districts":{"244":"H  Đức Linh","245":"H Bắc Bình","246":"H Hàm Tân","247":"H Hàm Thuận Bắc","248":"H Hàm Thuận Nam","249":"H Phú Qúi","250":"H Tánh Linh","251":"H Tuy Phong","252":" Phan Thiết","253":"TX La Gi"}},"17":{"name":"Tỉnh Cà Mau","districts":{"254":"H Cái Nước","255":"H Đầm Dơi","256":"H Năm Căn","257":"H Ngọc Hiển","258":"H Phú Tân","259":"H Thới Bình","260":"H Trần Văn Thời","261":"H U Minh","262":" Cà Mau"}},"18":{"name":"Tỉnh Cao Bằng","districts":{"263":"H Bảo Lạc","264":"H Bảo Lâm","265":"H Hạ Lang","266":"H Hà Quảng","267":"H Hòa An","268":"H Nguyên Bình","269":"H Phục Hòa","270":"H Quảng Uyên","271":"H Thạch An","272":"H Thông Nông","273":"H Trà Lĩnh","274":"H Trùng Khánh","275":"TX Cao Bằng"}},"19":{"name":"Tỉnh Đắk Lắk","districts":{"276":"H Buôn Đôn","277":"H Cư Kuin","278":"H Cư MGar","279":"H Ea Kar","280":"H Ea Súp","281":"H EaHLeo","282":"H Krông Ana","283":"H Krông Bông","284":"H Krông Búk","285":"H Krông Năng","286":"H Krông Pắc","287":"H Lắk","288":"H MDrắk","289":" Buôn Ma Thuột","290":"TX Buôn Hồ"}},"20":{"name":"Tỉnh Đắk Nông","districts":{"291":"H Cư Jút","292":"H Đắk GLong","293":"H Đắk Mil","294":"H Đắk RLấp","295":"H Đắk Song","296":"H KRông Nô","297":"H Tuy Đức","298":"TX Gia Nghĩa"}},"21":{"name":"Tỉnh Điện Biên","districts":{"299":"H Điện Biên","300":"H Điện Biên Đông","301":"H Mường Chà","302":"H Mương Nhé","303":"H Mường ảng","304":"H Tủa Chùa","305":"H Tuần Giáo","306":" Điện Biên phủ","307":"TX Mường Lay"}},"22":{"name":"Tỉnh Đồng Nai","districts":{"308":"H Cẩm Mỹ","309":"H Định Quán","310":"H Long Thành","311":"H Nhơn Trạch","312":"H Tân Phú","313":"H Thống Nhất","314":"H Trảng Bom","315":"H Vĩnh Cửu","316":"H Xuân Lộc","317":" Biên Hòa","318":"TX Long Khánh"}},"23":{"name":"Tỉnh Đồng Tháp","districts":{"319":"H Cao Lãnh","320":"H Châu Thành","321":"H Hồng Ngự","322":"H Lai Vung","323":"H Lấp Vò","324":"H Tam Nông","325":"H Tân Hồng","326":"H Thanh Bình","327":"H Tháp Mười","328":" Cao Lãnh","329":"TX Hồng Ngự","330":"TX Sa Đéc"}},"24":{"name":"Tỉnh Gia Lai","districts":{"331":"H Chư Păh","332":"H Chư Pưh","333":"H Chư Sê","334":"H ChưPRông","335":"H Đăk Đoa","336":"H Đăk Pơ","337":"H Đức Cơ","338":"H Ia Grai","339":"H Ia Pa","340":"H KBang","341":"H KBang","342":"H Kông Chro","343":"H Krông Pa","344":"H Mang Yang","345":"H Phú Thiện","346":" Plei Ku","347":"TX AYun Pa","348":"TX An Khê"}},"25":{"name":"Tỉnh Hà Giang","districts":{"349":"H Bắc Mê","350":"H Bắc Quang","351":"H Đồng Văn","352":"H Hoàng Su Phì","353":"H Mèo Vạc","354":"H Quản Bạ","355":"H Quang Bình","356":"H Vị Xuyên","357":"H Xín Mần","358":"H Yên Minh","359":" Hà Giang"}},"26":{"name":"Tỉnh Hà Nam","districts":{"360":"H Bình Lục","361":"H Duy Tiên","362":"H Kim Bảng","363":"H Lý Nhân","364":"H Thanh Liêm","365":" Phủ Lý"}},"27":{"name":"Tỉnh Hà Tĩnh","districts":{"366":"H Cẩm Xuyên","367":"H Can Lộc","368":"H Đức Thọ","369":"H Hương Khê","370":"H Hương Sơn","371":"H Kỳ Anh","372":"H Lộc Hà","373":"H Nghi Xuân","374":"H Thạch Hà","375":"H Vũ Quang","376":" Hà Tĩnh","377":"TX Hồng Lĩnh"}},"28":{"name":"Tỉnh Hải Dương","districts":{"378":"H Bình Giang","379":"H Cẩm Giàng","380":"H Gia Lộc","381":"H Kim Thành","382":"H Kinh Môn","383":"H Nam Sách","384":"H Ninh Giang","385":"H Thanh Hà","386":"H Thanh Miện","387":"H Tứ Kỳ","388":" Hải Dương","389":"TX Chí Linh"}},"29":{"name":"Tỉnh Hậu Giang","districts":{"390":"H Châu Thành","391":"H Châu Thành A","392":"H Long Mỹ","393":"H Phụng Hiệp","394":"H Vị Thủy","395":" Vị Thanh","396":"TX Ngã Bảy"}},"30":{"name":"Tỉnh Hòa Bình","districts":{"397":"H Cao Phong","398":"H Đà Bắc","399":"H Kim Bôi","400":"H Kỳ Sơn","401":"H Lạc Sơn","402":"H Lạc Thủy","403":"H Lương Sơn","404":"H Mai Châu","405":"H Tân Lạc","406":"H Yên Thủy","407":" Hòa Bình"}},"31":{"name":"Tỉnh Hưng Yên","districts":{"408":"H Ân Thi","409":"H Khoái Châu","410":"H Kim Động","411":"H Mỹ Hào","412":"H Phù Cừ","413":"H Tiên Lữ","414":"H Văn Giang","415":"H Văn Lâm","416":"H Yên Mỹ","417":" Hưng Yên"}},"32":{"name":"Tỉnh Khánh Hòa","districts":{"418":"H Cam Lâm","419":"H Diên Khánh","420":"H Khánh Sơn","421":"H Khánh Vĩnh","422":"H Ninh Hòa","423":"H Trường Sa","424":"H Vạn Ninh","425":" Nha Trang","426":"TX Cam Ranh"}},"33":{"name":"Tỉnh Kiên Giang","districts":{"427":"H An Biên","428":"H An Minh","429":"H Châu Thành","430":"H Giang Thành","431":"H Giồng Riềng","432":"H Gò Quao","433":"H Hòn Đất","434":"H Kiên Hải","435":"H Kiên Lương","436":"H Phú Quốc","437":"H Tân Hiệp","438":"H U Minh Thượng","439":"H Vĩnh Thuận","440":" Rạch Giá","441":"TX Hà Tiên"}},"34":{"name":"Tỉnh Kon Tum","districts":{"442":"H Đắk Glei","443":"H Đắk Hà","444":"H Đắk Tô","445":"H Kon Plông","446":"H Kon Rẫy","447":"H Ngọc Hồi","448":"H Sa Thầy","449":"H Tu Mơ Rông","450":" Kon Tum"}},"35":{"name":"Tỉnh Lai Châu","districts":{"451":"H Mường Tè","452":"H Phong Thổ","453":"H Sìn Hồ","454":"H Tam Đường","455":"H Tân Uyên","456":"H Than Uyên","457":"TX Lai Châu"}},"36":{"name":"Tỉnh Lâm Đồng","districts":{"458":"H Bảo Lâm","459":"H Cát Tiên","460":"H Đạ Huoai","461":"H Đạ Tẻh","462":"H Đam Rông","463":"H Di Linh","464":"H Đơn Dương","465":"H Đức Trọng","466":"H Lạc Dương","467":"H Lâm Hà","468":" Bảo Lộc","469":" Đà Lạt"}},"37":{"name":"Tỉnh Lạng Sơn","districts":{"470":"H Bắc Sơn","471":"H Bình Gia","472":"H Cao Lộc","473":"H Chi Lăng","474":"H Đình Lập","475":"H Hữu Lũng","476":"H Lộc Bình","477":"H Tràng Định","478":"H Văn Lãng","479":"H Văn Quan","480":" Lạng Sơn"}},"38":{"name":"Tỉnh Lào Cai","districts":{"481":"H Bắc Hà","482":"H Bảo Thắng","483":"H Bảo Yên","484":"H Bát Xát","485":"H Mường Khương","486":"H Sa Pa","487":"H Si Ma Cai","488":"H Văn Bàn","489":" Lào Cai"}},"39":{"name":"Tỉnh Long An","districts":{"490":"H Bến Lức","491":"H Cần Đước","492":"H Cần Giuộc","493":"H Châu Thành","494":"H Đức Hòa","495":"H Đức Huệ","496":"H Mộc Hóa","497":"H Tân Hưng","498":"H Tân Thạnh","499":"H Tân Trụ","500":"H Thạnh Hóa","501":"H Thủ Thừa","502":"H Vĩnh Hưng","503":" Tân An"}},"40":{"name":"Tỉnh Nam Định","districts":{"504":"H Giao Thủy","505":"H Hải Hậu","506":"H Mỹ Lộc","507":"H Nam Trực","508":"H Nghĩa Hưng","509":"H Trực Ninh","510":"H Vụ Bản","511":"H Xuân Trường","512":"H ý Yên","513":" Nam Định"}},"41":{"name":"Tỉnh Nghệ An","districts":{"514":"H Anh Sơn","515":"H Con Cuông","516":"H Diễn Châu","517":"H Đô Lương","518":"H Hưng Nguyên","519":"H Kỳ Sơn","520":"H Nam Đàn","521":"H Nghi Lộc","522":"H Nghĩa Đàn","523":"H Quế Phong","524":"H Quỳ Châu","525":"H Quỳ Hợp","526":"H Quỳnh Lưu","527":"H Tân Kỳ","528":"H Thanh Chương","529":"H Tương Dương","530":"H Yên Thành","531":" Vinh","532":"TX Cửa Lò","533":"TX Thái Hòa"}},"42":{"name":"Tỉnh Ninh Bình","districts":{"534":"H Gia Viễn","535":"H Hoa Lư","536":"H Kim Sơn","537":"H Nho Quan","538":"H Yên Khánh","539":"H Yên Mô","540":" Ninh Bình","541":"TX Tam Điệp"}},"43":{"name":"Tỉnh Ninh Thuận","districts":{"542":"Huyên Bác ái","543":"H Ninh Hải","544":"H Ninh Phước","545":"H Ninh Sơn","546":"H Thuận Bắc","547":"H Thuận Nam","548":" Phan Rang-Tháp Chàm"}},"44":{"name":"Tỉnh Phú Thọ","districts":{"549":"H Cẩm Khê","550":"H Đoan Hùng","551":"H Hạ Hòa","552":"H Lâm Thao","553":"H Phù Ninh","554":"H Tam Nông","555":"H Tân Sơn","556":"H Thanh Ba","557":"H Thanh Sơn","558":"H Thanh Thủy","559":"H Yên Lập","560":" Việt Trì","561":"TX Phú Thọ"}},"45":{"name":"Tỉnh Phú Yên","districts":{"562":"H Đông Hòa","563":"H Đồng Xuân","564":"H Phú Hòa","565":"H Sơn Hòa","566":"H Sông Hinh","567":"H Tây Hòa","568":"H Tuy An","569":" Tuy Hòa","570":"TX Sông Cầu"}},"46":{"name":"Tỉnh Quảng Bình","districts":{"571":"H Bố Trạch","572":"H Lệ Thủy","573":"H MinhHoá","574":"H Quảng Ninh","575":"H Quảng Trạch","576":"H Tuyên Hoá","577":" Đồng Hới"}},"47":{"name":"Tỉnh Quảng Nam","districts":{"578":"H Bắc Trà My","579":"H Đại Lộc","580":"H Điện Bàn","581":"H Đông Giang","582":"H Duy Xuyên","583":"H Hiệp Đức","584":"H Nam Giang","585":"H Nam Trà My","586":"H Nông Sơn","587":"H Núi Thành","588":"H Phú Ninh","589":"H Phước Sơn","590":"H Quế Sơn","591":"H Tây Giang","592":"H Thăng Bình","593":"H Tiên Phước","594":" Hội An","595":" Tam Kỳ"}},"48":{"name":"Tỉnh Quảng Ngãi","districts":{"596":"H Ba Tơ","597":"H Bình Sơn","598":"H Đức Phổ","599":"H Lý sơn","600":"H Minh Long","601":"H Mộ Đức","602":"H Nghĩa Hành","603":"H Sơn Hà","604":"H Sơn Tây","605":"H Sơn Tịnh","606":"H Tây Trà","607":"H Trà Bồng","608":"H Tư Nghĩa","609":" Quảng Ngãi"}},"49":{"name":"Tỉnh Quảng Ninh","districts":{"610":"H Ba Chẽ","611":"H Bình Liêu","612":"H Cô Tô","613":"H Đầm Hà","614":"H Đông Triều","615":"H Hải Hà","616":"H Hoành Bồ","617":"H Tiên Yên","618":"H Vân Đồn","619":"H Yên Hưng","620":" Hạ Long","621":" Móng Cái","622":"TX Cẩm Phả","623":"TX Uông Bí"}},"50":{"name":"Tỉnh Quảng Trị","districts":{"624":"H Cam Lộ","625":"H Cồn Cỏ","626":"H Đa Krông","627":"H Gio Linh","628":"H Hải Lăng","629":"H Hướng Hóa","630":"H Triệu Phong","631":"H Vính Linh","632":" Đông Hà","633":"TX Quảng Trị"}},"51":{"name":"Tỉnh Sóc Trăng","districts":{"634":"H Châu Thành","635":"H Cù Lao Dung","636":"H Kế Sách","637":"H Long Phú","638":"H Mỹ Tú","639":"H Mỹ Xuyên","640":"H Ngã Năm","641":"H Thạnh Trị","642":"H Trần Đề","643":"H Vĩnh Châu","644":" Sóc Trăng"}},"52":{"name":"Tỉnh Sơn La","districts":{"645":"H Bắc Yên","646":"H Mai Sơn","647":"H Mộc Châu","648":"H Mường La","649":"H Phù Yên","650":"H Quỳnh Nhai","651":"H Sông Mã","652":"H Sốp Cộp","653":"H Thuận Châu","654":"H Yên Châu","655":" Sơn La"}},"53":{"name":"Tỉnh Tây Ninh","districts":{"656":"H Bến Cầu","657":"H Châu Thành","658":"H Dương Minh Châu","659":"H Gò Dầu","660":"H Hòa Thành","661":"H Tân Biên","662":"H Tân Châu","663":"H Trảng Bàng","664":"TX Tây Ninh"}},"54":{"name":"Tỉnh Thái Bình","districts":{"665":"H Đông Hưng","666":"H Hưng Hà","667":"H Kiến Xương","668":"H Quỳnh Phụ","669":"H Thái Thụy","670":"H Tiền Hải","671":"H Vũ Thư","672":" Thái Bình"}},"55":{"name":"Tỉnh Thái Nguyên","districts":{"673":"H Đại Từ","674":"H Định Hóa","675":"H Đồng Hỷ","676":"H Phổ Yên","677":"H Phú Bình","678":"H Phú Lương","679":"H Võ Nhai","680":" Thái Nguyên","681":"TX Sông Công"}},"56":{"name":"Tỉnh Thanh Hóa","districts":{"682":"H Bá Thước","683":"H Cẩm Thủy","684":"H Đông Sơn","685":"H Hà Trung","686":"H Hậu Lộc","687":"H Hoằng Hóa","688":"H Lang Chánh","689":"H Mường Lát","690":"H Nga Sơn","691":"H Ngọc Lặc","692":"H Như Thanh","693":"H Như Xuân","694":"H Nông Cống","695":"H Quan Hóa","696":"H Quan Sơn","697":"H Quảng Xương","698":"H Thạch Thành","699":"H Thiệu Hóa","700":"H Thọ Xuân","701":"H Thường Xuân","702":"H Tĩnh Gia","703":"H Triệu Sơn","704":"H Vĩnh Lộc","705":"H Yên Định","706":" Thanh Hóa","707":"TX Bỉm Sơn","708":"TX Sầm Sơn"}},"57":{"name":"Tỉnh Thừa Thiên Huế","districts":{"709":"H A Lưới","710":"H Hương Trà","711":"H Nam Dông","712":"H Phong Điền","713":"H Phú Lộc","714":"H Phú Vang","715":"H Quảng Điền","716":" Huế","717":"TX Hương Thủy"}},"58":{"name":"Tỉnh Tiền Giang","districts":{"718":"H Cái Bè","719":"H Cai Lậy","720":"H Châu Thành","721":"H Chợ Gạo","722":"H Gò Công Đông","723":"H Gò Công Tây","724":"H Tân Phú Đông","725":"H Tân Phước","726":" Mỹ Tho","727":"TX Gò Công"}},"59":{"name":"Tỉnh Trà Vinh","districts":{"728":"H Càng Long","729":"H Cầu Kè","730":"H Cầu Ngang","731":"H Châu Thành","732":"H Duyên Hải","733":"H Tiểu Cần","734":"H Trà Cú","735":" Trà Vinh"}},"60":{"name":"Tỉnh Tuyên Quang","districts":{"736":"H Chiêm Hóa","737":"H Hàm Yên","738":"H Na hang","739":"H Sơn Dương","740":"H Yên Sơn","741":" Tuyên Quang"}},"61":{"name":"Tỉnh Vĩnh Long","districts":{"742":"H Bình Minh","743":"H Bình Tân","744":"H Long Hồ","745":"H Mang Thít","746":"H Tam Bình","747":"H Trà Ôn","748":"H Vũng Liêm","749":" Vĩnh Long"}},"62":{"name":"Tỉnh Vĩnh Phúc","districts":{"750":"H Bình Xuyên","751":"H Lập Thạch","752":"H Sông Lô","753":"H Tam Đảo","754":"H Tam Dương","755":"H Vĩnh Tường","756":"H Yên Lạc","757":" Vĩnh Yên","758":"TX Phúc Yên"}},"63":{"name":"Tỉnh Yên Bái","districts":{"759":"H Lục Yên","760":"H Mù Cang Chải","761":"H Trạm Tấu","762":"H Trấn Yên","763":"H Văn Chấn","764":"H Văn Yên","765":"H Yên Bình","766":" Yên Bái","767":"TX Nghĩa Lộ"}}}

var  provine='<option>-- Province --</option>';


for (key in json_data) {

    provine+='<option value="'+key+'">'+json_data[key].name.trim()+'</option>';
}

$('#Province').html(provine);

//default districts 
var  dist ='<option>-- District --</option>';
for(i in json_data[3].districts){
    dist +='<option value="'+i+'">'+json_data[3].districts[i]+'</option>';   
}
$('#District').html(dist);
$('#District').find('option[value="91"]').prop("selected", true);

$(document).on('change','#Province',function (e) {
    var districts=json_data[$(this).val()].districts;
    var district='<option>-- District --</option>';
    for (index in districts) {
        district+='<option value="'+index+'">'+districts[index]+'</option>';
    }
        $('#District').html(district);
});

/*select city end*/

jQuery(document).ready(function ($) {
            var model_cat_a = $('.model-cat').find('a');
            var model = flg = '';
            var html_body = list_color_item = '';
            var ln = ln_color = 0;
            var str_img = '';
            var colors = {};

            var name_list = '';

            $.each(model_cat_a, function(i,v){
                $(v).click(function () {
                    $('#myModal').find('#myModalLabel').text($(this).html());
                    flg = $(this).attr('model');
                    if(flg == 'xe_ga'){
                        model = model_honda[0].xe_ga;
                        ln = $(model_honda[0].xe_ga).length;
                    }else if(flg == 'xe_so'){
                        model = model_honda[1].xe_so;
                        ln = $(model_honda[1].xe_so).length;
                    }else{
                        model = model_honda[2].xe_con;
                        ln = $(model_honda[2].xe_con).length;
                    }

                    $.each(model, function(index, value){
                        html_body += '<a href="#" id="'+index+'" class="list-group-item list-group-item-info">'+ value[index].name +'</a>';
                        $('.modal-body > .list-group').html(html_body);

                        var list_group_item = $('.list-group-item');
                        if($(list_group_item).length == ln){
                            $.each(list_group_item, function (list_index, list_value) {
                                $(list_value).click(function () {
                                    html_body = list_group_item ='';
                                    $('.modal-body > .list-group').html('');
                                    $('#model').val($(this).text().trim());

                                    if(flg == 'xe_ga'){
                                        colors = model_honda[0].xe_ga[list_index][0].color;                                        
                                    }else if(flg == 'xe_so'){
                                        colors = model_honda[1].xe_so[list_index][0].color;
                                    }else{
                                        colors = model_honda[2].xe_con[list_index][0].color;
                                    }
                                    ln_color = $.map(colors, function(el) { return el });

                                    $.each(colors, function(c_index, c_value) {
                                        $('#myModal').find('#myModalLabel').text('Chọn màu');
                                        html_body += '<a href="#" id="'+c_index+'" class="list-color-item list-group-item list-group-item-info">'+ c_value +'</a>';
                                        $('.modal-body > .list-group').html(html_body);
                                        $('#myModal').modal('show');

                                        list_color_item = $('.list-color-item');
                                        // console.log(list_color_item);
                                        if($(list_color_item).length == ln_color.length){
                                            $.each(list_color_item, function(ind, val){
                                                $(val).click(function(e){
                                                    $('#myModal').modal('hide');
                                                    $('#color').val($(this).text().trim());
                                                });
                                            });
                                        }
                                    });

                                    html_body = '';
                                });
                            });
                        }
                    });
                    html_body = '';
                });
            });
        });