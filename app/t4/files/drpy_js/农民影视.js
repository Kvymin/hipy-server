// 发布页 https://www.nmdvd.com/
/**
 * 环境变量设置方法1: DR-PY 后台管理界面
    * CMS后台管理 > 设置中心 > 环境变量 > {"nmjx_url":"XXXXXXX"} > 保存
 * 环境变量设置方法2: 手动替换
    * 底下代码 "$nmjx_url" 比如 "http://localhost:5708/nm?all=&url="
 */
var rule={
	title:'农民影视',
	//host:'https://www.nmddd.com',
	host:'https://www.nmdvd.com/',
	hostJs:`print(HOST);let html=request(HOST,{headers:{"User-Agent":MOBILE_UA}});
	let src = jsp.pdfh(html,"body&&a:eq(1)&&href")||jsp.pdfh(html,"body&&a:eq(1)&&Text");
	if(!src.startsWith('http')){src='https://'+src};print("抓到主页:"+src);HOST=src`,
	url:'/vod-list-id-fyfilter.html',
	// /vod-list-id-2-pg-1-order--by-time-class-0-year-2023-letter--area--lang-.html
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}-pg-fypage-order--by-{{fl.by or "time"}}-class-0-year-{{fl.year}}-letter-{{fl.letter}}-area-{{fl.area}}-lang-',
	filter: {
		"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"5"},{"n":"喜剧片","v":"6"},{"n":"爱情片","v":"7"},{"n":"科幻片","v":"8"},{"n":"恐怖片","v":"9"},{"n":"剧情片","v":"10"},{"n":"战争片","v":"11"},{"n":"惊悚片","v":"16"},{"n":"奇幻片","v":"17"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"},{"n":"1979","v":"1979"},{"n":"1978","v":"1978"},{"n":"1977","v":"1977"},{"n":"1976","v":"1976"},{"n":"1975","v":"1975"},{"n":"1974","v":"1974"},{"n":"1973","v":"1973"},{"n":"1972","v":"1972"},{"n":"1971","v":"1971"},{"n":"1970","v":"1970"},{"n":"1969","v":"1969"},{"n":"1968","v":"1968"},{"n":"1967","v":"1967"},{"n":"1966","v":"1966"},{"n":"1965","v":"1965"},{"n":"1964","v":"1964"},{"n":"1963","v":"1963"},{"n":"1962","v":"1962"},{"n":"1961","v":"1961"},{"n":"1960","v":"1960"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"12"},{"n":"港台泰","v":"13"},{"n":"日韩剧","v":"14"},{"n":"欧美剧","v":"15"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"},{"n":"1979","v":"1979"},{"n":"1978","v":"1978"},{"n":"1977","v":"1977"},{"n":"1976","v":"1976"},{"n":"1975","v":"1975"},{"n":"1974","v":"1974"},{"n":"1973","v":"1973"},{"n":"1972","v":"1972"},{"n":"1971","v":"1971"},{"n":"1970","v":"1970"},{"n":"1969","v":"1969"},{"n":"1968","v":"1968"},{"n":"1967","v":"1967"},{"n":"1966","v":"1966"},{"n":"1965","v":"1965"},{"n":"1964","v":"1964"},{"n":"1963","v":"1963"},{"n":"1962","v":"1962"},{"n":"1961","v":"1961"},{"n":"1960","v":"1960"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"3":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"},{"n":"1979","v":"1979"},{"n":"1978","v":"1978"},{"n":"1977","v":"1977"},{"n":"1976","v":"1976"},{"n":"1975","v":"1975"},{"n":"1974","v":"1974"},{"n":"1973","v":"1973"},{"n":"1972","v":"1972"},{"n":"1971","v":"1971"},{"n":"1970","v":"1970"},{"n":"1969","v":"1969"},{"n":"1968","v":"1968"},{"n":"1967","v":"1967"},{"n":"1966","v":"1966"},{"n":"1965","v":"1965"},{"n":"1964","v":"1964"},{"n":"1963","v":"1963"},{"n":"1962","v":"1962"},{"n":"1961","v":"1961"},{"n":"1960","v":"1960"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"动漫剧","v":"18"},{"n":"动漫片","v":"19"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"},{"n":"1979","v":"1979"},{"n":"1978","v":"1978"},{"n":"1977","v":"1977"},{"n":"1976","v":"1976"},{"n":"1975","v":"1975"},{"n":"1974","v":"1974"},{"n":"1973","v":"1973"},{"n":"1972","v":"1972"},{"n":"1971","v":"1971"},{"n":"1970","v":"1970"},{"n":"1969","v":"1969"},{"n":"1968","v":"1968"},{"n":"1967","v":"1967"},{"n":"1966","v":"1966"},{"n":"1965","v":"1965"},{"n":"1964","v":"1964"},{"n":"1963","v":"1963"},{"n":"1962","v":"1962"},{"n":"1961","v":"1961"},{"n":"1960","v":"1960"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
		"26":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"新加坡","v":"新加坡"},{"n":"马来西亚","v":"马来西亚"},{"n":"印度","v":"印度"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"加拿大","v":"加拿大"},{"n":"西班牙","v":"西班牙"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"},{"n":"1989","v":"1989"},{"n":"1988","v":"1988"},{"n":"1987","v":"1987"},{"n":"1986","v":"1986"},{"n":"1985","v":"1985"},{"n":"1984","v":"1984"},{"n":"1983","v":"1983"},{"n":"1982","v":"1982"},{"n":"1981","v":"1981"},{"n":"1980","v":"1980"},{"n":"1979","v":"1979"},{"n":"1978","v":"1978"},{"n":"1977","v":"1977"},{"n":"1976","v":"1976"},{"n":"1975","v":"1975"},{"n":"1974","v":"1974"},{"n":"1973","v":"1973"},{"n":"1972","v":"1972"},{"n":"1971","v":"1971"},{"n":"1970","v":"1970"},{"n":"1969","v":"1969"},{"n":"1968","v":"1968"},{"n":"1967","v":"1967"},{"n":"1966","v":"1966"},{"n":"1965","v":"1965"},{"n":"1964","v":"1964"},{"n":"1963","v":"1963"},{"n":"1962","v":"1962"},{"n":"1961","v":"1961"},{"n":"1960","v":"1960"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
	},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		26:{cateId:'26'}
	},
	searchUrl:'/index.php?m=vod-search&wd=**',
	searchable:2,//是否启用全局搜索,
	headers:{//网站的请求头,完整支持所有的,常带ua和cookies
		'User-Agent': 'MOBILE_UA',
	},
	// class_parse: '#topnav li:lt(4);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&连续剧&综艺&动漫&短剧',//静态分类名称拼接
    class_url:'1&2&3&4&26',//静态分类标识拼接
	play_parse: true,
	lazy:`
	let nmjx_url="$nmjx_url";
	var _0xodi='jsjiami.com.v7';const _0x37e71f=_0x1285;(function(_0x2e7bfd,_0x3cdd85,_0x4d347f,_0x47e412,_0x4ff866,_0x4aa004,_0x444f49){return _0x2e7bfd=_0x2e7bfd>>0x2,_0x4aa004='hs',_0x444f49='hs',function(_0x26e9c8,_0x2cd563,_0x335a8a,_0x2517a7,_0x5c94b8){const _0x5645ad=_0x1285;_0x2517a7='tfi',_0x4aa004=_0x2517a7+_0x4aa004,_0x5c94b8='up',_0x444f49+=_0x5c94b8,_0x4aa004=_0x335a8a(_0x4aa004),_0x444f49=_0x335a8a(_0x444f49),_0x335a8a=0x0;const _0x2de274=_0x26e9c8();while(!![]&&--_0x47e412+_0x2cd563){try{_0x2517a7=-parseInt(_0x5645ad(0x7d,'K0(&'))/0x1+parseInt(_0x5645ad(0x80,']OZ4'))/0x2+parseInt(_0x5645ad(0x75,'W614'))/0x3*(-parseInt(_0x5645ad(0x87,'31#m'))/0x4)+-parseInt(_0x5645ad(0x7f,'M]PY'))/0x5+-parseInt(_0x5645ad(0x86,'QMlb'))/0x6*(parseInt(_0x5645ad(0x76,'sT&i'))/0x7)+-parseInt(_0x5645ad(0x79,'pCyS'))/0x8*(parseInt(_0x5645ad(0x72,'gYCa'))/0x9)+parseInt(_0x5645ad(0x6a,'uIJ^'))/0xa;}catch(_0x55868d){_0x2517a7=_0x335a8a;}finally{_0x5c94b8=_0x2de274[_0x4aa004]();if(_0x2e7bfd<=_0x47e412)_0x335a8a?_0x4ff866?_0x2517a7=_0x5c94b8:_0x4ff866=_0x5c94b8:_0x335a8a=_0x5c94b8;else{if(_0x335a8a==_0x4ff866['replace'](/[EBDLXbwQxSTMIOgyNrk=]/g,'')){if(_0x2517a7===_0x2cd563){_0x2de274['un'+_0x4aa004](_0x5c94b8);break;}_0x2de274[_0x444f49](_0x5c94b8);}}}}}(_0x4d347f,_0x3cdd85,function(_0x1d4b13,_0x30c936,_0x395634,_0x6bd478,_0x1de8bb,_0x62c716,_0x3c0b80){return _0x30c936='\x73\x70\x6c\x69\x74',_0x1d4b13=arguments[0x0],_0x1d4b13=_0x1d4b13[_0x30c936](''),_0x395634='\x72\x65\x76\x65\x72\x73\x65',_0x1d4b13=_0x1d4b13[_0x395634]('\x76'),_0x6bd478='\x6a\x6f\x69\x6e',(0x163ac7,_0x1d4b13[_0x6bd478](''));});}(0x2fc,0x76eca,_0x36d4,0xc1),_0x36d4)&&(_0xodi=_0x36d4);pdfh=jsp['pdfh'],pdfa=jsp[_0x37e71f(0x74,'*1pz')];let html=request(input),mac_url=html['match'](/mac_url='(.*?)';/)[0x1],mac_from=html['match'](/mac_from='(.*?)'/)[0x1];log(_0x37e71f(0x7e,'q)91')+flag+'\x20mac_from:'+mac_from);let is_sniffer=/^线路/['test'](flag)||/one|zhou/[_0x37e71f(0x85,'31#m')](mac_from),index=parseInt(input[_0x37e71f(0x6d,'3#6c')](/num-(\\d+)/)[0x1])-0x1,playUrls=mac_url[_0x37e71f(0x81,']OZ4')]('#'),playUrl=playUrls[index][_0x37e71f(0x71,'lVcp')]('$')[0x1];log(playUrl);function _0x36d4(){const _0x53364a=(function(){return[_0xodi,'SwBDjrsjEQbiaMmLyi.NOrcxoxkmQX.BIvw7TIgM==','p8o+FcTECmkM','agRcQSoSW7ZcQ3S','i8koW4WuWPz0nSoefWBdO8oX','feWcWRRdQW','CSo1W5BdQSoGxSkBWRBcUCoFaIm','hCo9WQzMj8oaW45sW5pdVK7dTa','vSk4W7K7yq','WPVdUCkJW6BcHhLIW710ECoHW4RcTmo6','W7RcVSk4W4HiWQddIqu','WRSqCtevqKihsSo+dXu','W6ldTmoFW4S'].concat((function(){return['cSooWOCOAmo6wmoz','WQdcPmkzWOLnDSo2W77cR8kZDW','556W5AYA55UO6zkwWO4','srddUWlcVG','wXT3wKjBrmkRWPCj','WQbjW4/cLCk7W53dG8k7W7JdLmooW4O','W7lcLLakACopBx/cHW06oh/dUG','iCo7W57dUmodoCkgrq','W7lcMfegA8odhXJcKrmDgW','o2VdUIrc','W6bll2zigW','fLjrWQ/dLq','WQTLW4nMW5hdIaL2'].concat((function(){return['WQ05WOpdSrS','W5LeWQ1wW67cGmobc8oNWP3dISkY','eSkiv8kaW6H/W4ldMq','mSkbWOJdTa','haHrW6ldNCoEosO','W63cOCoQex5/W5dcNJSKt08','6kAL5P6f5PcL5Psy5z+q5z6vDa','WRldNJNcL8kdW70','WQXKWOvjW6ldKHfGjW','kSkrWPRdPq'];}()));}()));}());_0x36d4=function(){return _0x53364a;};return _0x36d4();};let scripts=html['match'](/script src="(.*?)"/g),js_url='';for(let i=0x0;i<scripts['length'];i++){let script=scripts[i]['match'](/src="(.*?)"/)[0x1];if(!script[_0x37e71f(0x8a,'lThl')](_0x37e71f(0x7a,'*1pz'))&&!script[_0x37e71f(0x73,'G8Be')]('config')){js_url=urljoin(input,script);break;}else{if(script[_0x37e71f(0x6b,'pctT')](_0x37e71f(0x6e,'qgSj'))&&!script['includes'](_0x37e71f(0x78,'WwGw'))){js_url=urljoin(input,script);break;}}}log(_0x37e71f(0x7c,'j$jA')+js_url),html=request(js_url);let jx_path=html[_0x37e71f(0x6f,'N90e')](/this.Path=.*?"(.*?)"/)[0x1];function _0x1285(_0x10a76b,_0x5c4c01){const _0x36d4cd=_0x36d4();return _0x1285=function(_0x12851b,_0x34cb3b){_0x12851b=_0x12851b-0x6a;let _0x37fd40=_0x36d4cd[_0x12851b];if(_0x1285['hnQdXB']===undefined){var _0xb7f286=function(_0x5ceec7){const _0x114a04='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x372a53='',_0x407de2='';for(let _0x3312b0=0x0,_0xfea828,_0x46d76a,_0x4f8693=0x0;_0x46d76a=_0x5ceec7['charAt'](_0x4f8693++);~_0x46d76a&&(_0xfea828=_0x3312b0%0x4?_0xfea828*0x40+_0x46d76a:_0x46d76a,_0x3312b0++%0x4)?_0x372a53+=String['fromCharCode'](0xff&_0xfea828>>(-0x2*_0x3312b0&0x6)):0x0){_0x46d76a=_0x114a04['indexOf'](_0x46d76a);}for(let _0x4f71be=0x0,_0x146aea=_0x372a53['length'];_0x4f71be<_0x146aea;_0x4f71be++){_0x407de2+='%'+('00'+_0x372a53['charCodeAt'](_0x4f71be)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x407de2);};const _0x34ef19=function(_0x1b0acf,_0x4e4792){let _0x359eae=[],_0x1dc0cd=0x0,_0x1f5a60,_0x32021c='';_0x1b0acf=_0xb7f286(_0x1b0acf);let _0x431d11;for(_0x431d11=0x0;_0x431d11<0x100;_0x431d11++){_0x359eae[_0x431d11]=_0x431d11;}for(_0x431d11=0x0;_0x431d11<0x100;_0x431d11++){_0x1dc0cd=(_0x1dc0cd+_0x359eae[_0x431d11]+_0x4e4792['charCodeAt'](_0x431d11%_0x4e4792['length']))%0x100,_0x1f5a60=_0x359eae[_0x431d11],_0x359eae[_0x431d11]=_0x359eae[_0x1dc0cd],_0x359eae[_0x1dc0cd]=_0x1f5a60;}_0x431d11=0x0,_0x1dc0cd=0x0;for(let _0x509089=0x0;_0x509089<_0x1b0acf['length'];_0x509089++){_0x431d11=(_0x431d11+0x1)%0x100,_0x1dc0cd=(_0x1dc0cd+_0x359eae[_0x431d11])%0x100,_0x1f5a60=_0x359eae[_0x431d11],_0x359eae[_0x431d11]=_0x359eae[_0x1dc0cd],_0x359eae[_0x1dc0cd]=_0x1f5a60,_0x32021c+=String['fromCharCode'](_0x1b0acf['charCodeAt'](_0x509089)^_0x359eae[(_0x359eae[_0x431d11]+_0x359eae[_0x1dc0cd])%0x100]);}return _0x32021c;};_0x1285['odQkxk']=_0x34ef19,_0x10a76b=arguments,_0x1285['hnQdXB']=!![];}const _0x4ef3fe=_0x36d4cd[0x0],_0x38977f=_0x12851b+_0x4ef3fe,_0x36459a=_0x10a76b[_0x38977f];return!_0x36459a?(_0x1285['iXQsil']===undefined&&(_0x1285['iXQsil']=!![]),_0x37fd40=_0x1285['odQkxk'](_0x37fd40,_0x34cb3b),_0x10a76b[_0x38977f]=_0x37fd40):_0x37fd40=_0x36459a,_0x37fd40;},_0x1285(_0x10a76b,_0x5c4c01);}jx_path=urljoin(HOST,jx_path),log(_0x37e71f(0x83,'470G')+jx_path);let jx_js_url=jx_path+mac_from+'.js';log(_0x37e71f(0x7b,'Zkut')+js_url),html=request(jx_js_url);let jx_php_url=html['match'](/src="(.*?)'/)[0x1];if(is_sniffer){html=request(nmjx_url+jx_php_url);let urls=JSON[_0x37e71f(0x89,'Q@uc')](html)['data'];log(urls),playUrl=urls[0x0]+playUrl;}else playUrl=jx_php_url+playUrl;log(_0x37e71f(0x77,'be5Q')+playUrl),html=req(playUrl,{'headers':{'User-Agent':MOBILE_UA}})['content'];let realUrl;is_sniffer?realUrl=html['match'](/video src="(.*?)"/)[0x1]:realUrl=html['match'](/url='(.*?)'/)[0x1];log(_0x37e71f(0x88,'6730')+realUrl);realUrl&&(input={'parse':0x0,'url':realUrl});var version_ = 'jsjiami.com.v7';
	`,
	lazy2 : `
	// let location = JSON.parse(request('https://www.wzget.cn/02w9z',{withHeaders:true,redirect:0})).location;
	let location = JSON.parse(request('https://www.wzget.cn/02w9z',{withHeaders:true,redirect:null})).location;
	//let location = request('https://www.wzget.cn/02w9z',{withHeaders:true,redirect:0});
	log(location);`,
	lazy_old:`
	pdfh = jsp.pdfh;
	pdfa = jsp.pdfa;
	// log(input);
	let html=request(input);
	// log(html);
	let mac_url = html.match(/mac_url='(.*?)';/)[1];
	let mac_from = html.match(/mac_from='(.*?)'/)[1];
	log(mac_from);
	let index = parseInt(input.match(/num-(\\d+)/)[1])-1;
	let playUrls = mac_url.split('#');
	let playUrl = playUrls[index].split('$')[1];
	// log('index:'+index);
	// log(mac_url);
	log(playUrl);
	let jx_js_url = 'https://m.nmddd.com/player/'+mac_from+'.js';
	html = request(jx_js_url);
	// log(html);
	let jx_php_url = html.match(/src="(.*?)'/)[1];
	// log(jx_php_url);
	if(mac_from=='one'){
	// html = request('https://api.cnmcom.com/webcloud/nmm.php');
	html = request(jx_php_url);
	//log(html);
	let v7js = pdfa(html,'body&&script').find((it)=>{
		return pdfh(it,'body&&Html').includes('jsjiami.com');
	});
	// v7js = pdfh(v7js,'script&&Html').split('*/')[1];
	v7js = pdfh(v7js,'script&&Text') || pdfh(v7js,'script&&Html');
	v7js = v7js.replace(/debugger/g,'console.log("debugger")');
	log(v7js);
	// function playlist(obj){log(obj)};
	var window={location:{href:""},onload:function(){}};function URL(href){return{searchParams:{get:function(){return""}}}}var elements={WANG:{src:""}};var document={getElementById:function(id){return elements[id]}};
	function setInterval(){}
	eval(v7js+'\\nrule.playlist=playlist;');
	log(typeof(rule.playlist));
	let urls = [];
	let lines = pdfa(html, "body&&li").map(x => {
		let textContent = pdfh(x, "body&&Text");
		log(textContent);
		rule.playlist({
			textContent: textContent
		});
		urls.push(elements.WANG.src)
	});
	log(urls);
	playUrl = urls[0]+playUrl;
	}else{
	playUrl = jx_php_url+playUrl;
	}
	log(playUrl);
	html = request(playUrl);
	// log(html);
	let realUrl; 
	if(mac_from=='one'){
	realUrl = html.match(/video src="(.*?)"/)[1];
	}else{
	realUrl = html.match(/url='(.*?)'/)[1];
	}
	// log(realUrl);
	if(realUrl){
		input = {parse:0,url:realUrl};
	}
	`,

	limit:6,
	double: true, // 推荐内容是否双层定位
	推荐:'.globalPicList;.resize_list;*;*;*;*',
	一级:'.globalPicList li;.sTit&&Text;img:eq(-1)&&src;.sBottom--em&&Text;a&&href',
	二级:{
		"title":".title&&Text;.type-title&&Text",
		"img":".page-hd&&img&&src",
		"desc":".desc_item:eq(3)&&Text;.desc_item:eq(4)--span&&Text;;.desc_item:eq(1)--span&&Text;.desc_item:eq(2)--span&&Text",
		"content":".detail-con p&&Text",
		"tabs":".hd li",
		"lists":".numList:eq(#id) li"
	},
	搜索:'.ulPicTxt.clearfix li;*;img&&data-src;.sDes:eq(1)&&Text;*',
	tab_rename:{'默认':'线路①','播放':'线路①'},

	// //是否启用辅助嗅探: 1,0
	// sniffer:1,
	// // 辅助嗅探规则js写法
	// isVideo:`js:
	// 	log(input);
	// 	if(/video\\/tos/.test(input)){
	// 		input = true
	// 	}else if(/\\.m3u8/.test(input)){
	// 		input = true
	// 	}else{
	// 		input = false
	// 	}
	// `,
}