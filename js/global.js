function getBaseServerUrl() {
	return "http://192.168.1.119:8090/eidpws";
}

function getBaseImgUrl() {
	return "http://192.168.1.119:8090";
}

/*function getBaseServerUrl() {
	return "http://192.168.1.144:8081/eidpws";
}

function getBaseImgUrl() {
	return "http://192.168.1.144:8081";
}*/

/*function getBaseServerUrl1()
{
	return "http://192.168.1.146:8081/eidpws";
}
function getImgBaseServerUrl1()
{
	return "http://192.168.1.146:8081";
}*/

function isEmpty(str) {
	if(str == "" || str == null || str == undefined || str == "undefined") {
		return true;
	}
	return false;
}

//计算天数差的函数，通用  
function DateDiff(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式  
	var aDate, oDate1, oDate2, iDays
	aDate = sDate1.split("-")
	oDate1 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2]) //转换为12-18-2006格式  
	aDate = sDate2.split("-")
	oDate2 = new Date(aDate[0] + '-' + aDate[1] + '-' + aDate[2])
	iDays = parseInt((oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数  
	return iDays;
}

function formatStr(str){
	if(str.length == 1){
		return "0" + str;
	}
	return str;
}



