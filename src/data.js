function setJson()
{   
var s =document.getElementById("text1").value;
var reg = new RegExp("��ʦ��","g");
s.replace(reg,"��ʦ��/");
var reg = new RegExp("����ʿ����","g");
s.replace(reg,"����ʿ����/");
var reg = new RegExp("��˶ʿ����","g");
s.replace(reg,"��˶ʿ����/");
var reg = new RegExp("����������","g");
s.replace(reg,"����������/");
var reg = new RegExp(" ","g");
s.replace(reg,"");
var length=s.length;
if (s[length-1].match(/\n|\r/g))
alert("�ı�ĩ�����п��У�");
var reg = /\n(\n)*( )*(\n)*\n/g;
s = s.replace(reg,"\n");
var ss = s.split(/��|\n|\r|��|\t|\ +/g); 
if(i==0){
	if(ss[i]=="��ʦ"){
		$("#Tree").html('<li id="id4'+num4+'"><span  id="id5'+num5+'" class="badge badge-success"> ��ʦ</span><>');
		num4++;
		i++;
		$('#id5'+num5).after('<ul><li id="tc'+tc+'"><span id="teacher"> '+ss[i]+'</span><></u1>');
		num5++;
	}
	else{
	break;
	} 
	console.log(ss[i]);
}
else{
	if(ss[i]=="��ʦ"){
	$('#id4'+(num4-1)).after('<li id="id4'+num4+'"><span  id="id5'+num5+'" class="badge badge-success"> ��ʦ</span><>');
	num4++;
	i++;
	$('#id5'+num5).after('<ul><li id="tc'+tc+'"><span id="teacher"> '+ss[i]+'</span><></u1>');
	num5++;
	}
	else{
		break;
	} 
	console.log(ss[i]);
}
if(ss[i].match(/(([0-9]+)����ʿ��)|(([0-9]+)��˶ʿ��)|(([0-9]+)��������)/)){
	$('#tc'+tc).after('<li><span id="id'+num1+'" class="badge badge-success"> </span><>');

	$('#id'+num1).html(ss[i]);
	console.log(ss[i]);
	i++;
	var j=1;
	for(;i<ss.length;i++){
		console.log(ss[i]);
		if(ss[i].match(/(([0-9]+)����ʿ��)|(([0-9]+)��˶ʿ��)|(([0-9]+)��������)|��ʦ/)){
			i--;
			break;
		}
		if(j==1){
			$('#id'+num1).after('<ul><li id="id3'+num3+'"><span id="id2'+num2+'"> </span><></u1>');
			j++;
		}
		else{
			$('#id3'+(num3-1)).after('<li id="id3'+num3+'"><span id="id2'+num2+'"> </span><>');
		}
		$('#id2'+num2).html(ss[i]);
		num2=num2+1;
		num3=num3+1;
		console.log(ss[i]);
	}  
		num1=num1+1;
}
else{
	break;
}
}