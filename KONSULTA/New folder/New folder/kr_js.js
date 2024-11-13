function cmdViewDocPic(doctors){
    if (doctors == 'genie'){
        document.getElementById('doc_pic').src = "images/big_doc/doc-genie-de-lumen-ob-gyne_MG_0337.jpg";
    };
	if (doctors == 'dancel'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-maryann-dancel-ob-gyne_MG_0374.jpg";
		};
	if (doctors == 'baquiring'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-rosemarie-baquiring-ob-gyne_MG_9959.jpg";
		};
	if (doctors == 'charito'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-charito-estalani-ob-gyne_MG_0345.jpg";
		};
	if (doctors == 'facelo'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-kristina-facelo-ob-gyne_MG_9757.jpg";
		};
	if (doctors == 'bersabe'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-bersabe-bernardo-ob-sonologist_MG_9815.jpg";
		};
	if (doctors == 'karpal'){
		document.getElementById('doc_pic').src = "images/big_doc/karpal singh.png";
		};
	if (doctors == 'joanbongco'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-jo-ann-bongco-internist_MG_0324.jpg";
		};
	if (doctors == 'limon'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-randy-limon-ophthalmologist_MG_0358.jpg";
		};
	if (doctors == 'demesa'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-warren-de-mesa-ophthalmologist_MG_9269.jpg";
		};
	if (doctors == 'bangayan'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-leonora-bangayan-ophthalmologist_MG_0314.jpg";
		};
	if (doctors == 'mary'){
		document.getElementById('doc_pic').src = "images/big_doc/Mary Ann Pacencia.png";
		};
	if (doctors == 'conglimon'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-marites-limon-pediatrician_MG_9116.jpg";
		};
	if (doctors == 'repollo'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-yvonne-repollo-pediatrician_MG_9296.jpg";
		};
        if (doctors == 'christine'){
		document.getElementById('doc_pic').src = "images/big_doc/Christine.png";
		};
	if (doctors == 'mond'){
		document.getElementById('doc_pic').src = "images/big_doc/Dr.Z.Raymond T. Cablitas.png";
		};
	if (doctors == 'steph'){
		document.getElementById('doc_pic').src = "images/big_doc/Stephanie Chua.png";
		};
	if (doctors == 'paciencia'){
		document.getElementById('doc_pic').src = "";
		};
	if (doctors == 'catherine'){
		document.getElementById('doc_pic').src = "images/big_doc/Catherine.png";
		};
	if (doctors == 'tan'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-apple-tan-pediatrician_MG_0380.jpg";
		};
	if (doctors == 'charo'){
		document.getElementById('doc_pic').src = "images/big_doc/Charo Coloma.png";
		};
	if (doctors == 'delacruz'){
		document.getElementById('doc_pic').src = "";
		};
	if (doctors == 'moises'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-manuel-moises-ent_MG_9204.jpg";
		};
	if (doctors == 'lili'){
		document.getElementById('doc_pic').src = "images/big_doc/Lilibeth Garcia.png";
		};
	if (doctors == 'vencio'){
		document.getElementById('doc_pic').src = "";
		};
	if (doctors == 'ramirbacquiring'){
		document.getElementById('doc_pic').src = "";
		};
	if (doctors == 'gensolin'){
		document.getElementById('doc_pic').src = "images/big_doc/doc-bryan-gensolin-surgeon_MG_9988.jpg";
		};
	
	$('.doc_pic_content').reveal({ 
		animation: 'fade',                   
		animationspeed: 200,                  
		closeonbackgroundclick: true,         
		dismissmodalclass: 'close' 
	  });	  
	$(".doc_pic_content").css("display","block"); 
	
}
function cmdClose(){
	$('.doc_pic_content').trigger("reveal:close");
	}