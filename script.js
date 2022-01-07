var retornaCalculo = function(ano){
     calculo = (ano+8)%15;
     calculo = calculo == 0 ? 15 : calculo;
     return calculo;
}
function nerds(ano){

	nick = ["sherlock","velma","penelope","abby","spencer","mcgee","harry","bishop","blake", "hetty", "nell", "beale", "kasie", "patton", "sebastian"]
  		posicao = retornaCalculo(ano);
console.log(posicao);
return nick [posicao-1];
 	}
imagemPersonagem=['https://upload.wikimedia.org/wikipedia/commons/f/f9/Benedict_Cumberbatch_filming_Sherlock.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/61F4x2Al4HL._AC_SL1001_.jpg',
                  'https://upload.wikimedia.org/wikipedia/en/0/06/Penelope_Garcia_%28Criminal_Minds%29.jpg', 
                  'https://wwwimage-tve.cbsstatic.com/base/files/abby1.jpg',
                  'https://images6.fanpop.com/image/photos/38800000/Dr-Spencer-Reid-dr-spencer-reid-38816458-2248-3000.jpg',
                  'https://upload.wikimedia.org/wikipedia/en/0/09/Timmcgee.jpg',
                  'https://uploads.jovemnerd.com.br/wp-content/uploads/img_hp6_fotos_2.jpg',
                  'https://images6.fanpop.com/image/photos/41200000/Eleanor-Raye-Ellie-Bishop-ncis-41269884-225-300.jpg',
                  'https://upload.wikimedia.org/wikipedia/en/b/b3/Alex_Blake_%28Criminal_Minds%29.jpg', 'https://www.tvinsider.com/wp-content/uploads/2019/12/115931_0128b-1014x570.jpg',
                  'https://cartermatt-bgmyzuarasgpknxgxbrs.netdna-ssl.com/wp-content/uploads/2017/06/nell.jpg',
                  'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/b7ea0d6e7a1aabc4_ncisla_cast_barrettfoa.jpg',
                  'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/230ce97059ca89d7_ncis_cast_800x1000_dionareasonover.jpg',
                  'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/ncisno_cast_darylchillmitchell.jpg',
                  'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/ncisno_cast_robkerkovich.jpg'
];


	year.onkeyup=function(e){
		if(this.value.length > 0){
			k = nerds(parseInt(this.value))
      nome.innerHTML=k
      numero=retornaCalculo(parseInt(this.value))
      imagemEscolhida =`<img id ="imagemPersonagem"  src=${imagemPersonagem[numero-1]}>` 
     relato.innerHTML =  imagemEscolhida + txt.children[k].innerHTML
		}
	}